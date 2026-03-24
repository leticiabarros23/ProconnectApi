import { Router } from "express";
import { ChatController } from "../useCase/chat/create/ChatController";
import { authenticate } from "../middlewares/authMiddleware"; 
const router = Router();
const chatController = new ChatController();


router.post("/chat", authenticate, chatController.iniciarConversa);
router.get("/chat/:conversaId/mensagens", authenticate, chatController.historicoMensagens);
router.get("/chat/usuario/:usuarioId", authenticate, chatController.listarConversas);

export default router;