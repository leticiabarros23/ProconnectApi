import { Servico } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

class CreatePrecoModel {
  // Método para criar um preco no banco de dados
  async createPrecoModel(
    nomeservico: string,
    precificacao: number,
    servicoId: number // Relacionamento com a tabela servico
  ) {
    try {
      // Insere o preco no banco
      const preco = await prisma.preco.create({
        data: {
            nomeservico: nomeservico,
            precificacao: precificacao,
            servico: {              
            connect: { id:  servicoId }
          }
        },
      });

      return preco; // Retorna o preco criado
    } catch (error) {
      console.error("Erro no Model ao criar o preco:", error);
      throw new Error("Erro ao salvar o preco no banco de dados");
    }
  }
}

export default new CreatePrecoModel();
