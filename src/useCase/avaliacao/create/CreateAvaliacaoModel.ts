import { Servico, Usuario} from "@prisma/client";
import { prisma } from "../../../lib/prisma";

class CreateAvaliacaoModel {
  // Método para criar um avaliaçao no banco de dados
  async createAvaliacaoModel(
    star: number,
    descricao: string,
    servicoId: number, // Relacionamento com a tabela servico
    usuarioId: number // Relacionamento com a tabela usuario

  ) {
    try {
      // Insere a avaliacao no banco
      const avaliacao = await prisma.avaliacao.create({
        data: {
            star: star,
            descricao: descricao,
            servico: {              
            connect: { id:  servicoId }
          },
          usuario: {              
            connect: { id:  usuarioId }
          }
        },
      });

      return avaliacao; // Retorna a avaliacao criada
    } catch (error) {
      console.error("Erro no Model ao criar avaliacao:", error);
      throw new Error("Erro ao salvar avaliacao no banco de dados");
    }
  }
}

export default new CreateAvaliacaoModel();
