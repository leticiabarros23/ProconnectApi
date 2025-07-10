import { prisma } from "../../../lib/prisma";

class CreateServicoModel {
  async createServicoModel(
    nomeNegocio: string,
    descricao: string,
    preco: { nomeservico: string; precificacao: number }[],
    categoriaId: number,
    usuarioId: number,
    localizacao?: { numero: string; bairro: string; cidade: string; estado: string }
  ) {
    return prisma.servico.create({
      data: {
        nomeNegocio,
        descricao,
        categoria: { connect: { id: categoriaId } },
        usuario: { connect: { id: usuarioId } },
        localizacao: localizacao
          ? { create: { ...localizacao } }
          : undefined,
        preco: preco.length
          ? { create: preco.map(item => ({ ...item })) }
          : undefined
      },
      include: { localizacao: true, preco: true, categoria: true, usuario: true }
    });
  }

  async getAllServicoModel(filtroCidade?: string) {
    return prisma.servico.findMany({
      where: filtroCidade
        ? {
            localizacao: {
              cidade: {
                contains: filtroCidade,
                mode: "insensitive",
              },
            },
          }
        : {},
      include: {
        usuario: true,
        categoria: true,
        localizacao: true,
        preco: true,
        avaliacao: true,
      },
    });
  }

  async findServicoById(id: number) {
    return prisma.servico.findUnique({
      where: { id },
      select: { id: true, usuarioId: true }
    });
  }

  async deleteServicoModel(id: number) {
    return prisma.servico.delete({ where: { id } });
  }

  async updateServicoModel(
    id: number,
    nomeNegocio: string,
    preco: any,
    avaliacao: any,
    descricao: string,
    categoriaId: number
  ) {
    return prisma.servico.update({
      where: { id },
      data: {
        nomeNegocio,
        descricao,
        categoria: { connect: { id: categoriaId } },
      },
      include: { usuario: true, categoria: true, localizacao: true, preco: true, avaliacao: true }
    });
  }
}

export default new CreateServicoModel();
