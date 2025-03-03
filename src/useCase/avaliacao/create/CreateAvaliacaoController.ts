import { Request, Response } from "express";
import CreatePrecoModel from "./CreateAvaliacaoModel";

class CreateAvaliacaoController {
  // Método para criar uma preço
  async createPreco(req: Request, res: Response) {
    // Recebe os dados do body
    const { star, descricao, servicoId, usuarioId  } = req.body;

    try {
      // Chama o método do model para criar a localização
      const avaliacao = await CreatePrecoModel.createAvaliacaoModel(
        star,
        descricao,
        servicoId,
        usuarioId  
      );

      // Retorna a localização criada
      return res.status(201).json(avaliacao);
    } catch (error) {
      console.error("Erro ao criar local:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar localização. Verifique os dados enviados.",
      });
    }
  }
}

export default new CreateAvaliacaoController();
