import { Request, Response } from "express";
import CancelarAssinaturaModel from "./CancelarAssinaturaModel";
import prisma from "../../../lib/prisma";

class CancelarAssinaturaController {
  async handle(req: Request, res: Response) {
    if (!req.user) {
      return res.status(401).json({ error: "Não autorizado." })
    }

    const usuarioId = req.user.id;

    const assinatura = await CancelarAssinaturaModel.buscarAssinaturaAtiva(usuarioId)

    if (!assinatura) {
      return res.status(404).json({ error: "Nenhuma assinatura ativa encontrada." })
    }

    // Atualiza os dois registros em sequência dentro de uma transaction
    await prisma.$transaction(async (tx) => {
      await tx.assinatura.update({
        where: { id: assinatura.id },
        data: {
          status: "cancelada",
          canceladoEm: new Date()
        }
      })

      await tx.usuario.update({
        where: { id: usuarioId },
        data: { plano: "free" }
      })
    })

    return res.status(200).json({ 
      message: "Assinatura cancelada com sucesso.",
      assinatura: {
        id: assinatura.id,
        status: "cancelada",
        canceladoEm: new Date()
      }
    })
  }
}

export default new CancelarAssinaturaController()