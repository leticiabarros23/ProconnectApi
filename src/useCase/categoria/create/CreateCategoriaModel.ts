import { prisma } from "../../../lib/prisma";

class CreateCategoriaModel {
  async createCategoriaModel(nomeServico: string) {
    try {
      const categoria = await prisma.categoria.create({
        data: {
          nomeServico
        }
      });

      return categoria;
    } catch (error) {
      console.error("Erro no Model ao criar categoria:", error);
      throw new Error("Erro ao salvar categoria no banco de dados");
    }
  }

  async getAllCategoriaModel() {
    try {
      const categorias = await prisma.categoria.findMany();
      return categorias;
    } catch (error) {
      console.error("Erro ao buscar todas as categorias:", error);
      throw new Error("Erro ao buscar categorias no banco de dados");
    }
  }

  async updateCategoriaModel(id: number, nomeServico: string) {
    try {
      const categoriaAtualizada = await prisma.categoria.update({
        where: { id: id },
        data: {
          nomeServico,
        },
      });

      return categoriaAtualizada;
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
      throw new Error("Erro ao atualizar categoria no banco de dados");
    }
  }

  async deleteCategoriaModel(id: number) {
    try {
      const categoriaDeletada = await prisma.categoria.delete({
        where: { id: id },
      });

      return categoriaDeletada;
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
      throw new Error("Erro ao deletar categoria no banco de dados");
    }
  }
}

export default new CreateCategoriaModel();
