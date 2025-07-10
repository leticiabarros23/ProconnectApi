import { prisma } from "../../../lib/prisma";

class CreatePrecoModel {
  async createPrecoModel(
    nomeservico: string,
    precificacao: number,
    servicoId: number
  ) {
    return prisma.preco.create({
      data: {
        nomeservico,
        precificacao,
        servico: { connect: { id: servicoId } },
      },
    });
  }

  async getAllPrecoModel() {
    return prisma.preco.findMany();
  }

  async findPrecoById(id: number) {
    return prisma.preco.findUnique({
      where: { id },
      select: { servicoId: true },
    });
  }

  async updatePrecoModel(
    id: number,
    data: { nomeservico?: string; precificacao?: number }
  ) {
    return prisma.preco.update({
      where: { id },
      data,
    });
  }

  async deletePrecoModel(id: number) {
    return prisma.preco.delete({
      where: { id },
    });
  }
}

export default new CreatePrecoModel();
