import { Request, Response } from "express";
import ServicoRealizadoModel from "./CreateServicoRealizadoModel";
import ContatoWhatsappModel from "../contatowhatsapp/CreateContatoWhatsappModel";

class ServicoRealizadoController {
  // Registrar serviço realizado
  async createServicoRealizado(req: Request, res: Response) {
    try {
      const { servicoId } = req.body;
      const usuarioId = req.user?.id;

      if (!usuarioId) {
        return res.status(401).json({
          error: true,
          message: "Usuário não autenticado.",
        });
      }

      const registro = await ServicoRealizadoModel.createServicoRealizado(
        usuarioId,
        servicoId
      );

      return res.status(201).json(registro);
    } catch (error) {
      console.error("Erro ao registrar serviço realizado:", error);
      return res.status(500).json({
        error: true,
        message: "Erro interno ao registrar serviço realizado.",
      });
    }
  }

  // Responder sim/não ao modal
  async confirmarServico(req: Request, res: Response) {
    try {
      const { servicoId, confirmado } = req.body;
      const usuarioId = req.user?.id;

      if (!usuarioId) {
        return res.status(401).json({
          error: true,
          message: "Usuário não autenticado.",
        });
      }

      if (typeof confirmado !== "boolean") {
        return res.status(400).json({
          error: true,
          message: "O campo confirmado deve ser true ou false.",
        });
      }

      // Salva a resposta do usuário
      const registro = await ServicoRealizadoModel.confirmarServico(
        usuarioId,
        servicoId,
        confirmado
      );

      // Marca o contato como perguntado para não exibir o modal de novo
      await ContatoWhatsappModel.marcarComoPerguntado(usuarioId, servicoId);

      return res.status(200).json(registro);
    } catch (error) {
      console.error("Erro ao confirmar serviço:", error);
      return res.status(500).json({
        error: true,
        message: "Erro interno ao confirmar serviço.",
      });
    }
  }

  // Listar serviços realizados de um usuário
  async listarServicosRealizados(req: Request, res: Response) {
    try {
      const usuarioId = req.user?.id;

      if (!usuarioId) {
        return res.status(401).json({
          error: true,
          message: "Usuário não autenticado.",
        });
      }

      const servicos = await ServicoRealizadoModel.listarServicosRealizados(
        usuarioId
      );

      return res.status(200).json(servicos);
    } catch (error) {
      console.error("Erro ao listar serviços realizados:", error);
      return res.status(500).json({
        error: true,
        message: "Erro interno ao listar serviços realizados.",
      });
    }
  }
}

export default new ServicoRealizadoController();