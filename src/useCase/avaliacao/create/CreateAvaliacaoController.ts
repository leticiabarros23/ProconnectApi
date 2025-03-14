import { Request, Response } from "express";
import CreateAvaliacaoModel from "./CreateAvaliacaoModel";

class CreateAvaliacaoController {
  // Método para criar uma avaliacao
  async createAvaliacao(req: Request, res: Response) {
    console.log('entrou aquiiii');
    const { star, descricao, servicoId, usuarioId } = req.body;

    try {
      const avaliacao = await CreateAvaliacaoModel.createAvaliacaoModel(
        star,
        descricao,
        servicoId,
        usuarioId
      );
      return res.status(201).json(avaliacao);
    } catch (error) {
      console.error("Erro ao criar avaliacao:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar avaliacao. Verifique os dados enviados.",
      });
    }
  }

  // Método para buscar todas as avaliações
  async getAvaliacoes(req: Request, res: Response) {
    try {
      const avaliacoes = await CreateAvaliacaoModel.getAvaliacoesModel();
      return res.status(200).json(avaliacoes);
    } catch (error) {
      console.error("Erro ao buscar avaliações:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao buscar avaliações.",
      });
    }
  }
}

export default new CreateAvaliacaoController();
