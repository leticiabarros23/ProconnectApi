import prisma from "../../lib/prisma"; 

class ServicoRealizadoModel {
  // Criar registro de serviço realizado
  async createServicoRealizado(usuarioId: number, servicoId: number) {
    return await prisma.servicoRealizado.upsert({
      where: {
        usuarioId_servicoId: { usuarioId, servicoId },
      },
      update: {}, // já existe, não faz nada
      create: {
        usuarioId,
        servicoId,
      },
    });
  }

  // Confirmar se realizou ou não (sim/não)
  async confirmarServico(
    usuarioId: number,
    servicoId: number,
    confirmado: boolean
  ) {
    return await prisma.servicoRealizado.upsert({
      where: {
        usuarioId_servicoId: { usuarioId, servicoId },
      },
      update: {
        confirmado,
        respondidoEm: new Date(),
      },
      create: {
        usuarioId,
        servicoId,
        confirmado,
        respondidoEm: new Date(),
      },
    });
  }

  // Verificar se o usuário realizou o serviço
  async verificarServicoRealizado(usuarioId: number, servicoId: number) {
    const servico = await prisma.servicoRealizado.findFirst({
      where: {
        usuarioId,
        servicoId,
        confirmado: true, // só retorna true se confirmou que realizou
      },
    });
    return !!servico;
  }

  // Listar serviços realizados de um usuário
  async listarServicosRealizados(usuarioId: number) {
    return await prisma.servicoRealizado.findMany({
      where: { usuarioId },
      include: { servico: true },
    });
  }
}

export default new ServicoRealizadoModel();