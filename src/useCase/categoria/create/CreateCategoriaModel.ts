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

  // Método para buscar todas as categorias
  async getAllCategoriaModel() {
    try {
      const categorias = await prisma.categoria.findMany();  // Busca todas as categorias
      return categorias;  // Retorna todas as categorias encontradas
    } catch (error) {
      console.error("Erro ao buscar todas as categorias:", error);
      throw new Error("Erro ao buscar categorias no banco de dados");
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
