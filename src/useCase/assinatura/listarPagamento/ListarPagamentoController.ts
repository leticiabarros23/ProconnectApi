import { Request, Response } from "express";
import ListarPagamentoModel from "./ListarPagamentoModel";

class ListarPagamentoController {
  async handle(req: Request, res: Response) {
    if (!req.user) {
      return res.status(401).json({ error: "Não autorizado." })
    }

    const usuarioId = req.user.id;

    const pagamentos = await ListarPagamentoModel.listar(usuarioId)

    const pagamentosFormatados = pagamentos.map(p => ({
      id: p.id,
      mpPaymentId: p.mpPaymentId,
      valor: p.valor,
      status: p.status,
      metodoPagamento: p.metodoPagamento,
      criadoEm: p.criadoEm,
      assinatura: p.assinatura ? {
        tipo: p.assinatura.tipo,
        status: p.assinatura.status,
        duracao: p.assinatura.tipo === "anual" ? "12 meses" : "1 mês",
        descricao: p.assinatura.tipo === "anual"
          ? "Plano Anual — acesso premium por 12 meses"
          : "Plano Mensal — acesso premium por 1 mês"
      } : null
    }))

    return res.status(200).json({
      total: pagamentos.length,
      pagamentos: pagamentosFormatados
    })
  }
}

export default new ListarPagamentoController()