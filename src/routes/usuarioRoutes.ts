import express from "express";
import CreateUsuarioController from "../useCase/usuario/create/CreateUsuarioController";
import { authenticate } from "../middlewares/authMiddleware";

const usuarioRoutes = express.Router();

usuarioRoutes.post(
  "/usuario", 
  CreateUsuarioController.createUsuario
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
