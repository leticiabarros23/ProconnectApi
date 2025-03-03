import { Servico } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

class CreatePrecoModel {
  // Método para criar um preco no banco de dados
  async createPrecoModel(
    nomeservico: string,
    precificacao: number,
    servicoId: number // Relacionamento com a tabela Profissional
  ) {
    try {
      // Insere o serviço no banco
      const preco = await prisma.preco.create({
        data: {
            nomeservico: nomeservico,
            precificacao: precificacao,
            servico: {              
            connect: { id:  servicoId }
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

export default new CreatePrecoModel();
