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

  // --- NOVAS FUNÇÕES PARA O PUSH NOTIFICATION ---

  /**
   * Salva a mensagem enviada no banco de dados
   */
  async criarMensagem(data: { conversaId: string, remetenteId: number, texto: string }) {
    return await prisma.mensagem.create({
      data: {
        conversaId: data.conversaId,
        remetenteId: data.remetenteId,
        texto: data.texto,
      },
    });
  }

  /**
   * Descobre quem é a outra pessoa da conversa e retorna o fcmToken dela
   */
  async getDestinatarioDaConversa(conversaId: string, remetenteId: number) {
    try {
      const conversa = await prisma.conversa.findUnique({
        where: { id: conversaId },
        select: {
          clienteId: true,
          profissionalId: true,
        },
      });

      if (!conversa) return null;

      // Se o remetente é o cliente, o destinatário é o profissional. Caso contrário, é o cliente.
      const destinatarioId = remetenteId === conversa.clienteId 
        ? conversa.profissionalId 
        : conversa.clienteId;

      // Busca os dados do destinatário na tabela de usuários
      return await prisma.usuario.findUnique({
        where: { id: destinatarioId },
        select: {
          id: true,
          nome: true,
          fcmToken: true,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar destinatário para push:", error);
      return null;
    }
  }
}

export default new ChatModel();