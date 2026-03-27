import prisma from "../../../lib/prisma";

export class ChatModel {
  // --- FUNÇÕES EXISTENTES ---

  async findOrCreateConversa(clienteId: number, profissionalId: number) {
    let conversa = await prisma.conversa.findFirst({
      where: { clienteId, profissionalId },
      include: {
        profissional: { select: { nome: true, imagem: true } },
        cliente: { select: { nome: true, imagem: true } },
      },
    });

    if (!conversa) {
      conversa = await prisma.conversa.create({
        data: { clienteId, profissionalId },
        include: {
          profissional: { select: { nome: true, imagem: true } },
          cliente: { select: { nome: true, imagem: true } },
        },
      });
    }

    return conversa;
  }

  async verificarAcesso(conversaId: string, userId: number) {
    const conversa = await prisma.conversa.findFirst({
      where: {
        id: conversaId,
        OR: [{ clienteId: userId }, { profissionalId: userId }],
      },
    });
    return !!conversa;
  }

  async getMensagens(conversaId: string) {
    return await prisma.mensagem.findMany({
      where: { conversaId },
      orderBy: { criadaEm: "asc" },
    });
  }

  async getConversasDoUsuario(usuarioId: number) {
    return await prisma.conversa.findMany({
      where: {
        OR: [{ clienteId: usuarioId }, { profissionalId: usuarioId }],
      },
      include: {
        cliente: { select: { id: true, nome: true, imagem: true } },
        profissional: { select: { id: true, nome: true, imagem: true } },
        mensagens: {
          orderBy: { criadaEm: "desc" },
          take: 1,
        },
      },
      orderBy: {
        criadaEm: "desc",
      },
    });
  }
}

export default new ChatModel();