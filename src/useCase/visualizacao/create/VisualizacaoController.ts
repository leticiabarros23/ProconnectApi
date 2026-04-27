import { Request, Response } from "express";
import VisualizacaoModel from "./VisualizacaoModel";

class VisualizacaoController {
  async handle(req: Request, res: Response) {
    const servicoId = parseInt(req.params.id)

    if (isNaN(servicoId)) {
      return res.status(400).json({ error: "ID inválido." })
    }

    await VisualizacaoModel.registrar(servicoId)

    return res.status(201).json({ ok: true })
  }
}

export default new VisualizacaoController()