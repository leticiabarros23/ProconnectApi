import { Request, Response } from "express";
import GetAssinaturaModel from "./GetAssinaturaModel";

class GetAssinaturaController {
  async handle(req: Request, res: Response) {
    if (!req.user) {
      return res.status(401).json({ error: "Não autorizado." })
    }

    const usuarioId = req.user.id;

    const assinatura = await GetAssinaturaModel.buscarAssinaturaAtiva(usuarioId)

    if (!assinatura) {
      return res.status(200).json({ 
        plano: "free",
        assinatura: null
      })
    }

    return res.status(200).json({
      plano: "premium",
      assinatura: {
        id: assinatura.id,
        tipo: assinatura.tipo,
        status: assinatura.status,
        inicioEm: assinatura.inicioEm,
        expiraEm: assinatura.expiraEm,
        ultimoPagamento: assinatura.pagamentos[0] ?? null
      }
    })
  }
}

export default new GetAssinaturaController()