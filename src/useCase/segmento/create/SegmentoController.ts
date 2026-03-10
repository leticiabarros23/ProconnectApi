import { Request, Response } from "express";
import SegmentoModel from "./SegmentoModel";

class SegmentoController {
  async createSegmento(req: Request, res: Response) {
    try {
      const { nome, icone } = req.body;

      if (!nome) {
        return res.status(400).json({ error: true, message: "Nome do segmento é obrigatório." });
      }

      const segmento = await SegmentoModel.createSegmento(nome, icone);
      return res.status(201).json(segmento);
    } catch (error) {
      console.error("Erro ao criar segmento:", error);
      return res.status(500).json({ error: true, message: "Erro interno ao criar segmento." });
    }
  }

  async getAllSegmentos(req: Request, res: Response) {
    try {
      const segmentos = await SegmentoModel.getAllSegmentos();
      return res.status(200).json(segmentos);
    } catch (error) {
      console.error("Erro ao buscar segmentos:", error);
      return res.status(500).json({ error: true, message: "Erro interno ao buscar segmentos." });
    }
  }

  async vincularCategoria(req: Request, res: Response) {
    try {
      const { segmentoId, categoriaId } = req.body;

      if (!segmentoId || !categoriaId) {
        return res.status(400).json({ error: true, message: "segmentoId e categoriaId são obrigatórios." });
      }

      const categoria = await SegmentoModel.vincularCategoria(
        Number(segmentoId),
        Number(categoriaId)
      );
      return res.status(200).json(categoria);
    } catch (error) {
      console.error("Erro ao vincular categoria:", error);
      return res.status(500).json({ error: true, message: "Erro interno ao vincular categoria." });
    }
  }

  async deleteSegmento(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await SegmentoModel.deleteSegmento(Number(id));
      return res.status(204).send();
    } catch (error) {
      console.error("Erro ao deletar segmento:", error);
      return res.status(500).json({ error: true, message: "Erro interno ao deletar segmento." });
    }
  }
}

export default new SegmentoController();