import { Router } from "express";
import { authenticate } from "../middlewares/authMiddleware";
import CreateAssinaturaController from "../useCase/assinatura/create/CreateAssinaturaController";
import GetAssinaturaController from "../useCase/assinatura/get/GetAssinaturaController";
import CancelarAssinaturaController from "../useCase/assinatura/cancelar/CancelarAssinaturaController";

const router = Router();

router.post(
  "/assinatura/criar",
  authenticate,
  (req, res) => CreateAssinaturaController.handle(req, res)
);

router.get(
  "/assinatura",
  authenticate,
  (req, res) => GetAssinaturaController.handle(req, res)
);

router.patch(
  "/assinatura/cancelar",
  authenticate,
  (req, res) => CancelarAssinaturaController.handle(req, res)
);

export default router;