import prisma from "../../../lib/prisma";

class GetAssinaturaModel {
  async buscarAssinaturaAtiva(usuarioId: number) {
    return prisma.assinatura.findFirst({
      where: {
        usuarioId,
        status: "ativa"
      },
      include: {
        pagamentos: {
          orderBy: { criadoEm: "desc" },
          take: 1
        }
      }
    })
  }
}

export default new GetAssinaturaModel()