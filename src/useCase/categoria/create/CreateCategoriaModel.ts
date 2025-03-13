import { prisma } from "../../../lib/prisma";

class CreateCategoriaModel {
  // Método para criar uma categoria no banco de dados
  async createCategoriaModel(nomeServico: string) {
    try {
      // Insere a categoria no banco, associando os serviços se existirem
      const categoria = await prisma.categoria.create({
        data: {
          nomeServico
        }
      });

      return categoria; // Retorna a categoria criada com os serviços
    } catch (error) {
      console.error("Erro no Model ao criar categoria:", error);
      throw new Error("Erro ao salvar categoria no banco de dados");
    }
  }

  // Método para buscar uma categoria pelo ID
  async getCategoriaModel(id: number) {
    try {
      const categoria = await prisma.categoria.findUnique({
        where: { id: id },  // Procura pela categoria com o ID fornecido
      });

      return categoria;  // Retorna a categoria encontrada
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
      throw new Error("Erro ao buscar categoria no banco de dados");
    }
  }

  // Método para atualizar uma categoria
  async updateCategoriaModel(id: number, nomeServico: string) {
    try {
      const categoriaAtualizada = await prisma.categoria.update({
        where: { id: id },
        data: {
          nomeServico,
        },
      });

      return categoriaAtualizada;  // Retorna a categoria atualizada
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
      throw new Error("Erro ao atualizar categoria no banco de dados");
    }
  }

  // Método para deletar uma categoria
  async deleteCategoriaModel(id: number) {
    try {
      const categoriaDeletada = await prisma.categoria.delete({
        where: { id: id },
      });

      return categoriaDeletada;  // Retorna a categoria deletada
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
      throw new Error("Erro ao deletar categoria no banco de dados");
    }
  }
}

export default new CreateCategoriaModel();
