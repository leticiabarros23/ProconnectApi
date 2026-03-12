import prisma from "../../lib/prisma"; 

class ContatoWhatsappModel {
  // Registrar clique — se já existe, ignora (upsert)
  async registrarContato(usuarioId: number, servicoId: number) {
    return await prisma.contatoWhatsapp.upsert({
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

  // Buscar contatos onde o modal ainda não foi exibido
  async buscarPendentes(usuarioId: number) {
    return await prisma.contatoWhatsapp.findMany({
      where: {
        usuarioId,
        perguntado: false,
      },
      include: {
        servico: {
          select: {
            id: true,
            nomeNegocio: true,
            imagem: true,
            usuario: {
              select: { nome: true },
            },
          },
        },
      },
    });
  }

  // Marcar como perguntado após exibir o modal
  async marcarComoPerguntado(usuarioId: number, servicoId: number) {
    return await prisma.contatoWhatsapp.update({
      where: {
        usuarioId_servicoId: { usuarioId, servicoId },
      },
      data: {
        perguntado: true,
      },
    });
  }

  // Buscar todos os contatos do usuário para a página "Meus Pedidos"
  async buscarTodosContatos(usuarioId: number) {
    return await prisma.contatoWhatsapp.findMany({
      where: { usuarioId },
      include: {
        servico: {
          select: {
            id: true,
            nomeNegocio: true,
            imagem: true,
            descricao: true,
            categoria: {
              select: { nomeServico: true },
            },
            usuario: {
              select: { nome: true, telefone: true },
            },
          },
        },
      },
      orderBy: { clicadoEm: "desc" },
    });
  }
}

export default new ContatoWhatsappModel();