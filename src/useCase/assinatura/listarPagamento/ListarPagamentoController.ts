import { Request, Response } from "express";
import ListarPagamentoModel from "./ListarPagamentoModel";

class ListarPagamentoController {
  async handle(req: Request, res: Response) {
    if (!req.user) {
      return res.status(401).json({ error: "Não autorizado." })
    }

    const usuarioId = req.user.id;

    const pagamentos = await ListarPagamentoModel.listar(usuarioId)

    return res.status(200).json({
      total: pagamentos.length,
      pagamentos
    })
  }
}

export default new ListarPagamentoController()