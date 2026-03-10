import { Request, Response } from "express";
import CreateAvaliacaoModel from "./CreateAvaliacaoModel";

class CreateAvaliacaoController {
  // Criar avaliação
  async createAvaliacao(req: Request, res: Response) {
    try {
      const { star, descricao, servicoId } = req.body;
      const usuarioId = req.user?.id;

      if (!usuarioId) {
        return res.status(401).json({
          error: true,
          message: "Usuário não autenticado.",
        });
      }

      if (!Number.isInteger(star) || star < 1 || star > 5) {
        return res.status(400).json({
          error: true,
          message: "A nota deve ser um número inteiro entre 1 e 5.",
        });
      }

      const realizou = await CreateAvaliacaoModel.verificarServicoRealizado(
        usuarioId,
        servicoId
      );

      if (!realizou) {
        return res.status(403).json({
          error: true,
          message: "Você só pode avaliar serviços que realizou.",
        });
      }

      const jaAvaliou = await CreateAvaliacaoModel.verificarAvaliacaoExistente(
      usuarioId,
      servicoId
      );

      if (jaAvaliou) {
      return res.status(403).json({
      error: true,
      message: "Você já avaliou este serviço.",
      });
    }

      const avaliacao = await CreateAvaliacaoModel.createAvaliacaoModel(
        star,
        descricao,
        servicoId,
        usuarioId
      );

      return res.status(201).json(avaliacao);
    } catch (error) {
      console.error("Erro ao criar avaliação:", error);
      return res.status(500).json({
        error: true,
        message: "Erro interno ao criar avaliação.",
      });
    }
  }

  // Buscar avaliações de um serviço
  async getAvaliacoes(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const avaliacoes = await CreateAvaliacaoModel.getAvaliacoesModel(Number(id));
    const media = await CreateAvaliacaoModel.getMediaEstrelas(Number(id));
    const contagem = await CreateAvaliacaoModel.getContagemEstrelas(Number(id));

    return res.status(200).json({
      mediaEstrelas: media,
      contagemEstrelas: contagem,
      avaliacoes,
    });
  } catch (error) {
    console.error("Erro ao buscar avaliações:", error);
    return res.status(500).json({
      error: true,
      message: "Erro interno ao buscar avaliações.",
      });
    }
  }
}

export default new CreateAvaliacaoController();