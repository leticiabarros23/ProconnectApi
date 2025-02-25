import { Servico } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

class CreateCategoriaModel {
  // Método para criar uma categoria no banco de dados
  async createCategoriaModel(nome: string, servicos: Servico[]) {
    try {
      // Insere a categoria no banco, associando os serviços se existirem
      const categoria = await prisma.categoria.create({
        data: {
          nome: nome,
          servico: {
            create: servicos, // Cria e associa serviços à categoria, se enviados
          },
        },
        include: {
          servico: true, // Inclui os serviços criados no retorno
        },
      });

      return categoria; // Retorna a categoria criada com os serviços
    } catch (error) {
      console.error("Erro no Model ao criar categoria:", error);
      throw new Error("Erro ao salvar categoria no banco de dados");
    }
  }
}

export default new CreateCategoriaModel();
