import { Servico, Usuario} from "@prisma/client";
import { prisma } from "../../../lib/prisma";

class CreateAvaliacaoModel {
  // Método para criar um avaliaçao no banco de dados
  async createPrecoModel(
    star: number,
    descricao: String,
    servicoId: number // Relacionamento com a tabela servico
    usuarioId: number // Relacionamento com a tabela usuario

  ) {
    try {
      // Insere o serviço no banco
      const preco = await prisma.preco.create({
        data: {
            star: star,
            descricao: descricao,
            servico: {              
            connect: { id:  servicoId }
          }
          usuario: {              
            connect: { id:  usuarioId }
          }
        },
      });

      return preco; // Retorna o serviço criado
    } catch (error) {
      console.error("Erro no Model ao criar serviço:", error);
      throw new Error("Erro ao salvar serviço no banco de dados");
    }
  }
}

export default new CreateAvaliacaoModel();
