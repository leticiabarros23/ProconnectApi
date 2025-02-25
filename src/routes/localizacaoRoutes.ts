import express from 'express';
import CreateLocalizacaoController from "../useCase/localizacao/create/CreateLocalizacaoController";

const localizacaoRoutes = express.Router();

localizacaoRoutes.post("/localizacao", CreateLocalizacaoController.createLocalizacao);

export default localizacaoRoutes;
