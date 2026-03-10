import { Request, Response } from "express";
import ContatoWhatsappModel from "./CreateContatoWhatsappModel";

class ContatoWhatsappController {
  // Registrar clique no botão "Entrar em contato"
  async registrarContato(req: Request, res: Response) {
    try {
      const { servicoId } = req.body;
      const usuarioId = req.user?.id;

      if (!usuarioId) {
        return res.status(401).json({
          error: true,
          message: "Usuário não autenticado.",
        });
      }

      const contato = await ContatoWhatsappModel.registrarContato(
        usuarioId,
        servicoId
      );

      return res.status(201).json(contato);
    } catch (error) {
      console.error("Erro ao registrar contato:", error);
      return res.status(500).json({
        error: true,
        message: "Erro interno ao registrar contato.",
      });
    }
  }

  // Buscar contatos pendentes (perguntado = false) ao logar
  async buscarPendentes(req: Request, res: Response) {
    try {
      const usuarioId = req.user?.id;

      if (!usuarioId) {
        return res.status(401).json({
          error: true,
          message: "Usuário não autenticado.",
        });
      }

      const pendentes = await ContatoWhatsappModel.buscarPendentes(usuarioId);

      return res.status(200).json(pendentes);
    } catch (error) {
      console.error("Erro ao buscar pendentes:", error);
      return res.status(500).json({
        error: true,
        message: "Erro interno ao buscar pendentes.",
      });
    }
  }
}

export default new ContatoWhatsappController();