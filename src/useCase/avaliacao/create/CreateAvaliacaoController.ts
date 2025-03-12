import { Request, Response } from "express";
import CreateAvaliacaoModel from "./CreateAvaliacaoModel";

class CreateAvaliacaoController {
  // Método para criar uma avaliacao
  async createAvaliacao(req: Request, res: Response) {
    console.log('entrou aquiiii')
    // Recebe os dados do body
    const { star, descricao, servicoId, usuarioId  } = req.body;

    try {
      // Chama o método do model para criar a avaliacao
      const avaliacao = await CreateAvaliacaoModel.createAvaliacaoModel(
        star,
        descricao,
        servicoId,
        usuarioId  
      );

      // Retorna a avaliacao criada
      return res.status(201).json(avaliacao);
    } catch (error) {
      console.error("Erro ao criar avaliacao:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar avaliacao. Verifique os dados enviados.",
      });
    }
  }
}

export default new CreateAvaliacaoController();
