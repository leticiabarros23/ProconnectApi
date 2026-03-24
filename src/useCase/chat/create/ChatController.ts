import { Request, Response } from "express";
import { ChatModel } from "./ChatModel";

const chatModel = new ChatModel();

export class ChatController {
  async iniciarConversa(req: Request, res: Response) {
    try {
      const { profissionalId } = req.body;
      // clienteId vem do JWT — não confiamos no body para isto
      const clienteId = req.user!.id;

      if (!profissionalId) {
        return res.status(400).json({ error: "profissionalId é obrigatório." });
      }

      // Impede que alguém crie uma conversa consigo próprio
      if (clienteId === Number(profissionalId)) {
        return res.status(400).json({ error: "Não podes iniciar uma conversa contigo mesmo." });
      }

      const conversa = await chatModel.findOrCreateConversa(clienteId, Number(profissionalId));
      return res.status(200).json(conversa);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao iniciar conversa." });
    }
  }

  async historicoMensagens(req: Request, res: Response) {
    try {
      const { conversaId } = req.params;
      const userId = req.user!.id;

      // Verifica se o utilizador tem acesso a esta conversa
      const temAcesso = await chatModel.verificarAcesso(conversaId, userId);
      if (!temAcesso) {
        return res.status(403).json({ error: "Acesso negado a esta conversa." });
      }

      const mensagens = await chatModel.getMensagens(conversaId);
      return res.status(200).json(mensagens);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar histórico." });
    }
  }

  async listarConversas(req: Request, res: Response) {
    try {
      // Usa o ID do JWT — ignora o :usuarioId da URL para evitar que
      // um utilizador veja as conversas de outro
      const userId = req.user!.id;
      const conversas = await chatModel.getConversasDoUsuario(userId);
      return res.status(200).json(conversas);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar conversas." });
    }
  }
}