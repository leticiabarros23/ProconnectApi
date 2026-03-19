import { Router } from "express";
import { ChatController } from "../useCase/chat/ChatController";

const router = Router();
const chatController = new ChatController();

router.post("/chat", chatController.iniciarConversa);
router.get("/chat/:conversaId/mensagens", chatController.historicoMensagens);
router.get("/chat/usuario/:usuarioId", chatController.listarConversas);

export default router;