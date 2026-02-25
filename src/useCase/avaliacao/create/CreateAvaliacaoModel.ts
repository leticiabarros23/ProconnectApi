import { Servico, Usuario } from "@prisma/client";
import  prisma  from "../../../lib/prisma";

class CreateAvaliacaoModel {
  // Método para criar um avaliaçao no banco de dados
  async createAvaliacaoModel(
    star: number,
    descricao: string,
    servicoId: number,
    usuarioId: number
  ) {
    try {
      const avaliacao = await prisma.avaliacao.create({
        data: {
          star: star,
          descricao: descricao,
          servico: { connect: { id: servicoId } },
          usuario: { connect: { id: usuarioId } }
        },
      });
      return avaliacao;
    } catch (error) {
      console.error("Erro no Model ao criar avaliacao:", error);
      throw new Error("Erro ao salvar avaliacao no banco de dados");
    }
  }

  // Método para buscar todas as avaliações
  async getAvaliacoesModel() {
    try {
      const avaliacoes = await prisma.avaliacao.findMany({
        include: {
          servico: true,
          usuario: true,
        },
      });
      return avaliacoes;
    } catch (error) {
      console.error("Erro no Model ao buscar as avaliações:", error);
      throw new Error("Erro ao buscar as avaliações no banco de dados");
    }
  }
}

export default new CreateAvaliacaoModel();
