import { Request, Response } from "express";
import CreateCategoriaModel from "./CreateCategoriaModel";

class CreateCategoriaController {
  async createCategoria(req: Request, res: Response) {
    const { nomeServico, } = req.body;

    try {
      const categoria = await CreateCategoriaModel.createCategoriaModel(
        nomeServico
      );

      return res.status(201).json(categoria);
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar categoria. Verifique os dados enviados.",
      });
    }
  }

 async getAllCategoria(req: Request, res: Response) {
  try {
    const categorias = await CreateCategoriaModel.getAllCategoriaModel();

    if (categorias.length === 0) {
      return res.status(404).json({
        error: true,
        message: "Nenhuma categoria encontrada.",
      });
    }

    return res.status(200).json(categorias);
  } catch (error) {
    console.error("Erro ao buscar todas as categorias:", error);
    return res.status(500).json({
      error: true,
      message: "Erro ao buscar as categorias. Tente novamente mais tarde.",
    });
  }
}
  async updateCategoria(req: Request, res: Response) {
    const { id } = req.params;
    const { nomeServico } = req.body;

    try {
      const categoriaAtualizada = await CreateCategoriaModel.updateCategoriaModel(
        Number(id),
        nomeServico
      );

      if (!categoriaAtualizada) {
        return res.status(404).json({
          error: true,
          message: "Categoria não encontrada para atualização.",
        });
      }

      return res.status(200).json(categoriaAtualizada);
    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao atualizar categoria. Tente novamente mais tarde.",
      });
    }
  }

  async deleteCategoria(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const categoriaDeletada = await CreateCategoriaModel.deleteCategoriaModel(Number(id));

      if (!categoriaDeletada) {
        return res.status(404).json({
          error: true,
          message: "Categoria não encontrada para exclusão.",
        });
      }

      return res.status(200).json({
        message: "Categoria deletada com sucesso.",
      }); 
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao deletar categoria. Tente novamente mais tarde.",
      });
    }
  }
}

export default new CreateCategoriaController();
