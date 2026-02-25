import  prisma  from "../../../lib/prisma";

class CreateCategoriaModel {
  async createCategoriaModel(nomeServico: string) {
    try {
      return await prisma.categoria.create({
        data: { nomeServico },
      });
    } catch (error) {
      console.error("Erro no Model ao criar categoria:", error);
      throw new Error("Erro ao salvar categoria no banco de dados");
    }
  }

  async getAllCategoriaModel() {
    try {
      return await prisma.categoria.findMany();
    } catch (error) {
      console.error("Erro ao buscar todas as categorias:", error);
      throw new Error("Erro ao buscar categorias no banco de dados");
    }
  }

  async getCategoriaByIdModel(id: number) {
    try {
      return await prisma.categoria.findUnique({ where: { id } });
    } catch (error) {
      console.error("Erro ao buscar categoria por ID:", error);
      throw new Error("Erro ao buscar categoria no banco de dados");
    }
  }

  async updateCategoriaModel(id: number, nomeServico: string) {
    try {
      return await prisma.categoria.update({
        where: { id },
        data: { nomeServico },
      });
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
      throw new Error("Erro ao atualizar categoria no banco de dados");
    }
  }

  async deleteCategoriaModel(id: number) {
    try {
      return await prisma.categoria.delete({ where: { id } });
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
      throw new Error("Erro ao deletar categoria no banco de dados");
    }
  }
}

export default new CreateCategoriaModel();
