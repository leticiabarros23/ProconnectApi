import { Request, Response } from "express";
import { ChatModel } from "./ChatModel";

const chatModel = new ChatModel();

export class ChatController {
  async iniciarConversa(req: Request, res: Response) {
    try {
      const { clienteId, profissionalId } = req.body;
      
      if (!clienteId || !profissionalId) {
        return res.status(400).json({ error: "Faltam os IDs dos utilizadores." });
      }

      const conversa = await chatModel.findOrCreateConversa(Number(clienteId), Number(profissionalId));
      return res.status(200).json(conversa);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao iniciar conversa." });
    }
  }

  async historicoMensagens(req: Request, res: Response) {
    try {
      const { conversaId } = req.params;
      const mensagens = await chatModel.getMensagens(conversaId);
      return res.status(200).json(mensagens);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar histórico." });
    }
  }

  async listarConversas(req: Request, res: Response) {
    try {
      const { usuarioId } = req.params;
      const conversas = await chatModel.getConversasDoUsuario(Number(usuarioId));
      return res.status(200).json(conversas);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar conversas." });
    }
  }
}