import express from "express";
import CreateLocalizacaoController from "../useCase/localizacao/create/CreateLocalizacaoController";
import { authenticate } from "../middlewares/authMiddleware";

const localizacaoRoutes = express.Router();

localizacaoRoutes.get(
  "/localizacao",
  CreateLocalizacaoController.getAllLocalizacoes
);

localizacaoRoutes.get(
  "/localizacao/:id",
  CreateLocalizacaoController.getLocalizacao
);

localizacaoRoutes.post(
  "/localizacao",
  authenticate,
  CreateLocalizacaoController.createLocalizacao
);

localizacaoRoutes.put(
  "/localizacao/:id",
  authenticate,
  CreateLocalizacaoController.updateLocalizacao
);

localizacaoRoutes.delete(
  "/localizacao/:id",
  authenticate,
  CreateLocalizacaoController.deleteLocalizacao
);

export default localizacaoRoutes;
