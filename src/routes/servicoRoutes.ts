import express from "express";
import CreateServicoController from "../useCase/servico/create/CreateServicoController";
import { authenticate } from "../middlewares/authMiddleware";

const servicoRoutes = express.Router();

servicoRoutes.get("/servico", CreateServicoController.getAllServico);
servicoRoutes.get("/servico/:id", CreateServicoController.getServicoById);

servicoRoutes.post(
"/servico",
  authenticate,
  CreateServicoController.createServico
);

servicoRoutes.put(
  "/servico/:id",
  authenticate,
  CreateServicoController.updateServico
);

servicoRoutes.delete(
  "/servico/:id",
  authenticate,
  CreateServicoController.deleteServico
);

export default servicoRoutes;
