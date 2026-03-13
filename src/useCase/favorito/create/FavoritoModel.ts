import prisma from "../../../lib/prisma";

class FavoritoModel {
  async adicionarFavorito(usuarioId: number, servicoId: number) {
    return prisma.favorito.upsert({
      where: {
        usuarioId_servicoId: { usuarioId, servicoId },
      },
      update: {},
      create: { usuarioId, servicoId },
    });
  }

  async removerFavorito(usuarioId: number, servicoId: number) {
    const favorito = await prisma.favorito.findUnique({
      where: { usuarioId_servicoId: { usuarioId, servicoId } },
    });

    if (!favorito) throw new Error("Favorito não encontrado.");

    return prisma.favorito.delete({
      where: { usuarioId_servicoId: { usuarioId, servicoId } },
    });
  }

  async listarFavoritos(usuarioId: number) {
    return prisma.favorito.findMany({
      where: { usuarioId },
      include: {
        servico: {
          include: {
            categoria: true,
            localizacao: true,
            preco: true,
            avaliacao: true,
            portfolio: true,
            usuario: {
              select: {
                id: true,
                nome: true,
                email: true,
                telefone: true,
                cidade: true,
                estado: true,
              },
            },
          },
        },
      },
      orderBy: { criadoEm: "desc" },
    });
  }
}

export default new FavoritoModel();