import prisma from "../../../lib/prisma";

class CreateAssinaturaModel {
  async verificarSeProfissional(usuarioId: number) {
    const count = await prisma.servico.count({
      where: { usuarioId }
    })
    return count > 0
  }

  async buscarAssinaturaAtiva(usuarioId: number) {
    return prisma.assinatura.findFirst({
      where: {
        usuarioId,
        status: "ativa"
      }
    })
  }

  async criar(data: {
    usuarioId: number
    tipo: "mensal" | "anual"
    mpPreferenceId: string
  }) {
    return prisma.assinatura.create({
      data: {
        usuarioId: data.usuarioId,
        tipo: data.tipo,
        status: "pendente",
        mpPreferenceId: data.mpPreferenceId,
      }
    })
  }
}

export default new CreateAssinaturaModel()