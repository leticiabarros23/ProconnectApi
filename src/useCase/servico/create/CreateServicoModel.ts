import { prisma } from "../../../lib/prisma"; 
class CreateServicoModel {
  async createServicoModel(
    nomeNegocio: string,
    descricao: string,
    preco: {
      nomeservico: string;
      precificacao: number;
    }[],
    categoriaId: number,
    usuarioId: number,
    localizacao?: {
      numero: string;
      bairro: string;
      cidade: string;
      estado: string;
    }
  ) {
    return await prisma.servico.create({
      data: {
        nomeNegocio,
        descricao,
        categoria: { connect: { id: categoriaId } },
        usuario: { connect: { id: usuarioId } },
        localizacao: localizacao
          ? {
              create: {
                numero: localizacao.numero,
                bairro: localizacao.bairro,
                cidade: localizacao.cidade,
                estado: localizacao.estado
              }
            }
          : undefined,
        preco: preco && preco.length > 0
          ? {
              create: preco.map((item) => ({
                nomeservico: item.nomeservico,
                precificacao: item.precificacao
              }))
            }
          : undefined
      },
      include: {
        localizacao: true,
        preco: true,
        categoria: true,
        usuario: true
      }
    });
  }

  async getAllServicoModel() {
    return await prisma.servico.findMany({
      include: {
        usuario: true,
        categoria: true,
        localizacao: true,
        preco: true,
        avaliacao: true
      }
    });
  }

  async deleteServicoModel(id: number) {
    return await prisma.servico.delete({
      where: { id }
    });
  }

  async updateServicoModel(
    id: number,
    nomeNegocio: string,
    preco: any,
    avaliacao: any,
    descricao: string,
    categoriaId: number,
    usuarioId: number
  ) {
    return await prisma.servico.update({
      where: { id },
      data: {
        nomeNegocio,
        descricao,
        categoria: { connect: { id: categoriaId } },
        usuario: { connect: { id: usuarioId } }
        // Atualização de localizacao e preco pode ser adicionada aqui futuramente
      }
    });
  }
}

export default new CreateServicoModel();
