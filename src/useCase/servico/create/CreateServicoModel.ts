import { Categoria } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

class CreateServicoModel {
  // Método para criar um serviço no banco de dados
  async createServicoModel(
    nomeMarca: string,
    descricao: string,
    categoria: Categoria[],
    usuarioId: number // Relacionamento com a tabela Profissional
  ) {
    try {
      // Insere o serviço no banco
      const servico = await prisma.servico.create({
        data: {
          nomeMarca: nomeMarca,
          descricao: descricao,
          categoria: {
            create: categoria,
          },
          usuario: {              
            connect: { id: usuarioId }
          }
        },
      });

      return servico; // Retorna o serviço criado
    } catch (error) {
      console.error("Erro no Model ao criar serviço:", error);
      throw new Error("Erro ao salvar serviço no banco de dados");
    }
  }
}

export default new CreateServicoModel();
