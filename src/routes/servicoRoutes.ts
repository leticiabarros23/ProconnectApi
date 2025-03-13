import express from 'express';
import CreateServicoController from "../useCase/servico/create/CreateServicoController";

const servicoRoutes = express.Router();

servicoRoutes.post("/servico",CreateServicoController.createServico);
servicoRoutes.get("/servico/:id", CreateServicoController.getServico);
servicoRoutes.put("/servico/:id", CreateServicoController.updateServico);
servicoRoutes.delete("/servico/:id", CreateServicoController.deleteServico);

export default servicoRoutes;
