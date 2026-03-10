import express from 'express';
import CreateAvaliacaoController from "../useCase/avaliacao/create/CreateAvaliacaoController";
import { authenticate } from "../middlewares/authMiddleware";

const avaliacaoRoutes = express.Router();

avaliacaoRoutes.post(
    "/avaliacao", 
    authenticate,
    CreateAvaliacaoController.createAvaliacao
);

avaliacaoRoutes.get(
    "/avaliacao/:id", 
    CreateAvaliacaoController.getAvaliacoes
);

export default avaliacaoRoutes;