import cron from "node-cron";
import prisma from "../lib/prisma";
import { enviarNotificacaoPush } from "../lib/pushNotification";

async function verificarAssinaturas() {
  const agora = new Date();

  // Define as datas de referência
  const em7dias = new Date(agora);
  em7dias.setDate(em7dias.getDate() + 7);

  const em3dias = new Date(agora);
  em3dias.setDate(em3dias.getDate() + 3);

  const hoje = new Date(agora);

  // Busca assinaturas ativas que vencem nessas datas
  const assinaturas = await prisma.assinatura.findMany({
    where: {
      status: "ativa",
      expiraEm: {
        gte: new Date(hoje.setHours(0, 0, 0, 0)),
        lte: new Date(em7dias.setHours(23, 59, 59, 999)),
      }
    },
    include: {
      usuario: {
        select: { fcmToken: true, nome: true }
      }
    }
  })

  for (const assinatura of assinaturas) {
    const fcmToken = assinatura.usuario?.fcmToken
    if (!fcmToken || !assinatura.expiraEm) continue

    const expira = new Date(assinatura.expiraEm)
    const diffMs = expira.getTime() - new Date().getTime()
    const diffDias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

    let mensagem = ""

    if (diffDias <= 0) {
      mensagem = "Seu plano Premium venceu hoje. Renove para voltar ao destaque!"
    } else if (diffDias <= 3) {
      mensagem = `Seu plano Premium vence em ${diffDias} dias!`
    } else if (diffDias <= 7) {
      mensagem = "Seu plano Premium vence em 7 dias. Renove para continuar com seus benefícios!"
    }

    if (mensagem) {
      await enviarNotificacaoPush({
        fcmToken,
        remetenteNome: "ProConnect",
        textoMensagem: mensagem,
        conversaId: assinatura.id,
      })
      console.log(`📅 Lembrete enviado para assinatura ${assinatura.id}: ${mensagem}`)
    }
  }
}

// Roda todo dia às 9h da manhã
export function iniciarJobLembrete() {
  cron.schedule("0 9 * * *", async () => {
    console.log("⏰ Verificando assinaturas próximas do vencimento...")
    try {
      await verificarAssinaturas()
    } catch (error) {
      console.error("❌ Erro no job de lembrete:", error)
    }
  }, {
    timezone: "America/Fortaleza"
  })

  console.log("✅ Job de lembrete de assinatura iniciado!")
}