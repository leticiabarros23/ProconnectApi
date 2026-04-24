import prisma from "../../../lib/prisma";

class MercadoPagoWebhookModel {
  async buscarEventoExistente(externalId: string) {
    return prisma.webhookEvento.findUnique({
      where: { externalId }
    })
  }

  async salvarEvento(data: {
    externalId: string
    tipo: string
    status: string
    payload: object
  }) {
    return prisma.webhookEvento.create({ data })
  }

  async ativarAssinatura(data: {
    usuarioId: number
    expiraEm: Date
    paymentId: string
    valor: number
    metodoPagamento: string | null
  }) {
    return prisma.$transaction(async (tx) => {
      // Busca só pelo usuarioId e status pendente — sem preferenceId
      await tx.assinatura.updateMany({
        where: {
          usuarioId: data.usuarioId,
          status: "pendente"
        },
        data: {
          status: "ativa",
          inicioEm: new Date(),
          expiraEm: data.expiraEm,
        }
      })

      await tx.pagamento.create({
        data: {
          usuarioId: data.usuarioId,
          mpPaymentId: data.paymentId,
          valor: data.valor,
          status: "aprovado",
          metodoPagamento: data.metodoPagamento,
        }
      })

      await tx.usuario.update({
        where: { id: data.usuarioId },
        data: { plano: "premium" }
      })
    })
  }
}

export default new MercadoPagoWebhookModel()