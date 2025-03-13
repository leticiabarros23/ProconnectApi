import express from 'express';
import CreateLocalizacaoController from "../useCase/localizacao/create/CreateLocalizacaoController";

const localizacaoRoutes = express.Router();

localizacaoRoutes.post("/localizacao", CreateLocalizacaoController.createLocalizacao);
localizacaoRoutes.get("/localizacao/:id", CreateLocalizacaoController.getLocalizacao);
localizacaoRoutes.put("/localizacao/:id", CreateLocalizacaoController.updateLocalizacao);
localizacaoRoutes.delete("/localizacao/:id", CreateLocalizacaoController.deleteLocalizacao);

export default localizacaoRoutes;
