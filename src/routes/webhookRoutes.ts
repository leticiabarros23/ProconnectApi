import { Router } from "express";
import MercadoPagoWebhookController from "../useCase/assinatura/webhook/MercadoPagoWebhookController";

const router = Router();

router.post(
  "/webhooks/mercadopago",
  (req, res, next) => {
    res.setHeader("ngrok-skip-browser-warning", "true")
    next()
  },
  (req, res) => MercadoPagoWebhookController.handle(req, res)
);

export default router;