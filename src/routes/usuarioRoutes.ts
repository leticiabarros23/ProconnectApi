import express from "express";
import CreateUsuarioController from "../useCase/usuario/create/CreateUsuarioController";
import { authenticate } from "../middlewares/authMiddleware";
import CreateServicoController from "../useCase/servico/create/CreateServicoController";

const usuarioRoutes = express.Router();

usuarioRoutes.post(
  "/usuario",
  CreateUsuarioController.createUsuario
);

usuarioRoutes.get(
  "/usuario/me",
  authenticate,
  CreateUsuarioController.me
);

// ROTA ADICIONADA
usuarioRoutes.get(
  "/usuario/me/servicos",
  authenticate,
  CreateServicoController.getServicosByUsuario
);

usuarioRoutes.get(
  "/usuario/:id",
  authenticate,
  CreateUsuarioController.getUsuario
);

usuarioRoutes.put(
  "/usuario/:id",
  authenticate,
  CreateUsuarioController.updateUsuario
);

usuarioRoutes.delete(
  "/usuario/:id",
  authenticate,
  CreateUsuarioController.deleteUsuario
);

export default usuarioRoutes;