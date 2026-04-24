import { Request, Response } from "express";
import { MercadoPagoConfig, Payment } from "mercadopago";
import MercadoPagoWebhookModel from "./MercadoPagoWebhookModel";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!
});

class MercadoPagoWebhookController {
  async handle(req: Request, res: Response) {
    res.status(200).json({ received: true })

    try {
      const { type, data } = req.body
      console.log("🔔 Webhook recebido:", { type, data })

      if (type !== "payment") {
        console.log("⏭️ Tipo ignorado:", type)
        return
      }

      const paymentId = data?.id
      if (!paymentId) {
        console.log("⚠️ Sem paymentId")
        return
      }

      const jaProcessado = await MercadoPagoWebhookModel.buscarEventoExistente(String(paymentId))
      if (jaProcessado) {
        console.log("⏭️ Já processado:", paymentId)
        return
      }

      console.log("🔍 Buscando pagamento no MP:", paymentId)
      const paymentClient = new Payment(client)
      const pagamento = await paymentClient.get({ id: paymentId })
      console.log("💳 Status do pagamento:", pagamento.status)
      console.log("👤 external_reference:", pagamento.external_reference)
      console.log("📦 metadata:", pagamento.metadata)

      // Salva evento para auditoria
      await MercadoPagoWebhookModel.salvarEvento({
        externalId: String(paymentId),
        tipo: type,
        status: pagamento.status ?? "desconhecido",
        payload: req.body
      })

      if (pagamento.status !== "approved") {
        console.log("⏭️ Pagamento não aprovado:", pagamento.status)
        return
      }

      const usuarioId = Number(pagamento.external_reference)
      const tipoPlan = pagamento.metadata?.tipo_plano as "mensal" | "anual"

      console.log("👤 usuarioId:", usuarioId)
      console.log("📋 tipoPlan:", tipoPlan)

      if (!usuarioId || !tipoPlan) {
        console.log("⚠️ usuarioId ou tipoPlan inválido")
        return
      }

      // Calcula expiração
      const agora = new Date()
      const expiraEm = tipoPlan === "anual"
        ? new Date(new Date().setFullYear(agora.getFullYear() + 1))
        : new Date(new Date().setMonth(agora.getMonth() + 1))

      console.log("⏰ expiraEm:", expiraEm)

      // Ativa assinatura
      await MercadoPagoWebhookModel.ativarAssinatura({
        usuarioId,
        expiraEm,
        paymentId: String(paymentId),
        valor: pagamento.transaction_amount ?? 0,
        metodoPagamento: pagamento.payment_type_id ?? null,
      })

      console.log("✅ Assinatura ativada com sucesso para usuário:", usuarioId)

    } catch (error) {
      console.error("❌ Erro ao processar webhook:", error)
    }
  }
}

export default new MercadoPagoWebhookController()