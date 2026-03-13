import { Request, Response } from "express";
import FavoritoModel from "./FavoritoModel";

class FavoritoController {
  async adicionarFavorito(req: Request, res: Response) {
    try {
      const usuarioId = req.user?.id;
      const { servicoId } = req.body;

      if (!usuarioId) {
        return res.status(401).json({ error: true, message: "Não autenticado." });
      }

      if (!servicoId) {
        return res.status(400).json({ error: true, message: "servicoId é obrigatório." });
      }

      const favorito = await FavoritoModel.adicionarFavorito(usuarioId, Number(servicoId));
      return res.status(201).json(favorito);
    } catch (error: any) {
      console.error("Erro ao adicionar favorito:", error);
      return res.status(500).json({ error: true, message: "Erro interno do servidor." });
    }
  }

  async removerFavorito(req: Request, res: Response) {
    try {
      const usuarioId = req.user?.id;
      const { servicoId } = req.params;

      if (!usuarioId) {
        return res.status(401).json({ error: true, message: "Não autenticado." });
      }

      await FavoritoModel.removerFavorito(usuarioId, Number(servicoId));
      return res.status(204).send();
    } catch (error: any) {
      if (error.message.includes("encontrado")) {
        return res.status(404).json({ error: true, message: error.message });
      }
      console.error("Erro ao remover favorito:", error);
      return res.status(500).json({ error: true, message: "Erro interno do servidor." });
    }
  }

  async listarFavoritos(req: Request, res: Response) {
    try {
      const usuarioId = req.user?.id;

      if (!usuarioId) {
        return res.status(401).json({ error: true, message: "Não autenticado." });
      }

      const favoritos = await FavoritoModel.listarFavoritos(usuarioId);
      return res.status(200).json(favoritos);
    } catch (error: any) {
      console.error("Erro ao listar favoritos:", error);
      return res.status(500).json({ error: true, message: "Erro interno do servidor." });
    }
  }
}

export default new FavoritoController();