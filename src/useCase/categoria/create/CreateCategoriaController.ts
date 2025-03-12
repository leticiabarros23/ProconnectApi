import { Request, Response } from "express";
import CreateCategoriaModel from "./CreateCategoriaModel";

class CreateCategoriaController {
  // Método para criar uma categoria
  async createCategoria(req: Request, res: Response) {
    // Recebe os dados do body
    const { nomeServico,  } = req.body;

    try {
      // Chama o método do model para criar a categoria
      const categoria = await CreateCategoriaModel.createCategoriaModel(
        nomeServico
      );

      // Retorna a categoria criada
      return res.status(201).json(categoria);
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar categoria. Verifique os dados enviados.",
      });
    }
  }
}

export default new CreateCategoriaController();
