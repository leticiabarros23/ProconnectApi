import express from "express";
import ContatoWhatsappController from "../useCase/contatowhatsapp/CreateContatoWhatsappController";
import { authenticate } from "../middlewares/authMiddleware";

const contatoWhatsappRoutes = express.Router();

contatoWhatsappRoutes.post(
  "/contato-whatsapp",
  authenticate,
  ContatoWhatsappController.registrarContato
);

contatoWhatsappRoutes.get(
  "/contato-whatsapp/pendentes",
  authenticate,
  ContatoWhatsappController.buscarPendentes
);

export default contatoWhatsappRoutes;