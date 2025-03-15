import express from 'express';
import CreateAvaliacaoController from "../useCase/avaliacao/create/CreateAvaliacaoController";

const avaliacaoRoutes = express.Router();

avaliacaoRoutes.post("/avaliacao", CreateAvaliacaoController.createAvaliacao);
avaliacaoRoutes.get("/avaliacao/:id", CreateAvaliacaoController.getAvaliacoes);

export default avaliacaoRoutes;
