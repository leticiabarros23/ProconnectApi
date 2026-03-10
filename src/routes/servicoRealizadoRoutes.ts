import express from "express";
import ServicoRealizadoController from "../useCase/servicorealizado/CreateServicoRealizadoController";
import { authenticate } from "../middlewares/authMiddleware";

const servicoRealizadoRoutes = express.Router();

servicoRealizadoRoutes.post(
  "/servico-realizado",
  authenticate,
  ServicoRealizadoController.createServicoRealizado
);

servicoRealizadoRoutes.patch(
  "/servico-realizado/confirmar",
  authenticate,
  ServicoRealizadoController.confirmarServico
);

servicoRealizadoRoutes.get(
  "/servico-realizado",
  authenticate,
  ServicoRealizadoController.listarServicosRealizados
);

export default servicoRealizadoRoutes;