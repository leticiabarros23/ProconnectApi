import express from 'express';
import CreateServicoController from "../useCase/servico/create/CreateServicoController";

const servicoRoutes = express.Router();

servicoRoutes.post("/servico",CreateServicoController.createServico);

export default servicoRoutes;
