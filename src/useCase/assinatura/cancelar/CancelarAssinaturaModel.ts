import prisma from "../../../lib/prisma";

class CancelarAssinaturaModel {
  async buscarAssinaturaAtiva(usuarioId: number) {
    return prisma.assinatura.findFirst({
      where: {
        usuarioId,
        status: "ativa"
      }
    })
  }

  async cancelar(assinaturaId: number) {
    return prisma.assinatura.update({
      where: { id: assinaturaId },
      data: {
        status: "cancelada",
        canceladoEm: new Date()
      }
    })
  }

  async rebaixarPlanoUsuario(usuarioId: number) {
    return prisma.usuario.update({
      where: { id: usuarioId },
      data: { plano: "free" }
    })
  }
}

export default new CancelarAssinaturaModel()