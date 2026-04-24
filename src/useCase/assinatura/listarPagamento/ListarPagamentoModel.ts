import prisma from "../../../lib/prisma";

class ListarPagamentoModel {
  async listar(usuarioId: number) {
    return prisma.pagamento.findMany({
      where: { usuarioId },
      orderBy: { criadoEm: "desc" },
      include: {
        assinatura: {
          select: {
            tipo: true,
            status: true
          }
        }
      }
    })
  }
}

export default new ListarPagamentoModel()