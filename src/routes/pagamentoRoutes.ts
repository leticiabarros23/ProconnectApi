import { Router } from "express";
import { authenticate } from "../middlewares/authMiddleware";
import ListarPagamentoController from "../useCase/assinatura/listarPagamento/ListarPagamentoController";

const router = Router();

router.get(
  "/pagamento/historico",
  authenticate,
  (req, res) => ListarPagamentoController.handle(req, res)
);

export default router;