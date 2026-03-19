import prisma from "../../../lib/prisma";

export class ChatModel {
  // 1. Procurar ou criar uma conversa entre dois utilizadores
  async findOrCreateConversa(clienteId: number, profissionalId: number) {
    // Procura se já existe
    let conversa = await prisma.conversa.findFirst({
      where: {
        clienteId,
        profissionalId,
      },
      include: {
        profissional: { select: { nome: true, imagem: true } },
        cliente: { select: { nome: true, imagem: true } }
      }
    });

    // Se não existe, cria uma nova
    if (!conversa) {
      conversa = await prisma.conversa.create({
        data: {
          clienteId,
          profissionalId,
        },
        include: {
          profissional: { select: { nome: true, imagem: true } },
          cliente: { select: { nome: true, imagem: true } }
        }
      });
    }

    return conversa;
  }

  // 2. Ir buscar o histórico de mensagens de uma conversa
  async getMensagens(conversaId: string) {
    return await prisma.mensagem.findMany({
      where: { conversaId },
      orderBy: { criadaEm: 'asc' }, // Mais antigas primeiro
    });
  }

  // 3. Listar todas as conversas de um utilizador (para a barra lateral)
  async getConversasDoUsuario(usuarioId: number) {
    return await prisma.conversa.findMany({
      where: {
        OR: [
          { clienteId: usuarioId },
          { profissionalId: usuarioId }
        ]
      },
      include: {
        cliente: { select: { id: true, nome: true, imagem: true } },
        profissional: { select: { id: true, nome: true, imagem: true } },
        // Traz a última mensagem para mostrar na lista
        mensagens: {
          orderBy: { criadaEm: 'desc' },
          take: 1
        }
      },
      orderBy: { criadaEm: 'desc' }
    });
  }
}