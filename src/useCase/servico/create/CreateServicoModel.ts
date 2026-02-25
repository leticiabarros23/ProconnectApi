// src/useCase/servico/create/CreateServicoModel.ts
import  prisma  from "../../../lib/prisma";

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
        localizacao: localizacao ? { create: { ...localizacao } } : undefined,
        preco: preco.length
          ? { create: preco.map((p) => ({ nomeservico: p.nomeservico, precificacao: p.precificacao })) }
          : undefined,
      },
      include: { localizacao: true, preco: true, categoria: true, usuario: true },
    });
  }

  async getAllServicoModel(filtroCidade?: string) {
    return prisma.servico.findMany({
      where: filtroCidade
        ? { localizacao: { cidade: { contains: filtroCidade, mode: "insensitive" } } }
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
      include: {
        usuario: true,
        categoria: true,
        localizacao: true,
        preco: true,
        avaliacao: true,
      },
    });
  }

  async getServicosByUsuarioId(usuarioId: number) {
    return prisma.servico.findMany({
      where: { usuarioId },
      include: {
        categoria: true,
        preco: true,
        avaliacao: true, // Adicionado para consistência
        localizacao: true, // Adicionado para consistência
      },
    });
  }

  async updateServico(id: number, usuarioId: number, data: any) {
    const servico = await prisma.servico.findUnique({ where: { id } });

    if (!servico) {
      throw new Error("Serviço não encontrado.");
    }
    if (servico.usuarioId !== usuarioId) {
      throw new Error("Este serviço não pertence a você.");
    }

    return prisma.servico.update({
      where: { id },
      data,
    });
  }

  async deleteServico(id: number, usuarioId: number) {
    const servico = await prisma.servico.findUnique({ where: { id } });

    if (!servico) {
      throw new Error("Serviço não encontrado.");
    }
    if (servico.usuarioId !== usuarioId) {
      throw new Error("Este serviço não pertence a você.");
    }

    // Executa a exclusão de registros relacionados e do serviço em si dentro de uma transação
    return prisma.$transaction([
      prisma.preco.deleteMany({
        where: { servicoId: id },
      }),
      prisma.avaliacao.deleteMany({
        where: { servicoId: id },
      }),
      prisma.servico.delete({
        where: { id },
      }),
    ]);
  }
}

export default new CreateServicoModel();