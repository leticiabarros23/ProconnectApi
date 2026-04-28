import cron from "node-cron";
import prisma from "../lib/prisma";
import { enviarNotificacaoPush } from "../lib/pushNotification";

async function verificarAssinaturas() {
  const agora = new Date();

  const em7dias = new Date()
  em7dias.setDate(em7dias.getDate() + 7)

  const em3dias = new Date()
  em3dias.setDate(em3dias.getDate() + 3)

  // Busca assinaturas ativas que vencem nos próximos 7 dias
  const assinaturas = await prisma.assinatura.findMany({
    where: {
      status: "ativa",
      expiraEm: {
        gte: new Date(agora.setHours(0, 0, 0, 0)),
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

async function expirarAssinaturas() {
  const agora = new Date()

  // Busca assinaturas ativas que já venceram
  const expiradas = await prisma.assinatura.findMany({
    where: {
      status: "ativa",
      expiraEm: { lt: agora }
    },
    include: {
      usuario: {
        select: { id: true, fcmToken: true }
      }
    }
  })

  for (const assinatura of expiradas) {
    await prisma.$transaction(async (tx) => {
      // Atualiza status da assinatura para expirada
      await tx.assinatura.update({
        where: { id: assinatura.id },
        data: { status: "expirada" }
      })

      // Rebaixa o plano do usuário para free
      await tx.usuario.update({
        where: { id: assinatura.usuarioId },
        data: { plano: "free" }
      })
    })

    console.log(`⏰ Assinatura ${assinatura.id} expirada — usuário ${assinatura.usuarioId} rebaixado para free`)

    // Notifica o usuário se tiver token
    if (assinatura.usuario?.fcmToken) {
      await enviarNotificacaoPush({
        fcmToken: assinatura.usuario.fcmToken,
        remetenteNome: "ProConnect",
        textoMensagem: "Seu plano Premium expirou. Renove para continuar com seus benefícios!",
        conversaId: assinatura.id,
      }).catch(() => {})
    }
  }

  if (expiradas.length > 0) {
    console.log(`✅ ${expiradas.length} assinatura(s) expirada(s) processada(s)`)
  }
}

// Roda todo dia às 9h — lembretes de vencimento
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

  // Roda a cada hora — verifica assinaturas expiradas
  cron.schedule("0 * * * *", async () => {
    console.log("🔄 Verificando assinaturas expiradas...")
    try {
      await expirarAssinaturas()
    } catch (error) {
      console.error("❌ Erro no job de expiração:", error)
    }
  }, {
    timezone: "America/Fortaleza"
  })

  console.log("✅ Job de lembrete e expiração de assinatura iniciado!")
}