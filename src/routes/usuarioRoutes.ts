import express from "express";
import ForgotPasswordController from "../useCase/usuario/forgotPassword/ForgotPasswordController";
import ResetPasswordController from "../useCase/usuario/resetpassword/ResetPasswordController";
import CreateUsuarioController from "../useCase/usuario/create/CreateUsuarioController";
import { authenticate } from "../middlewares/authMiddleware";
import CreateServicoController from "../useCase/servico/create/CreateServicoController";

const usuarioRoutes = express.Router();

usuarioRoutes.post(
  "/usuario",
  CreateUsuarioController.createUsuario
);

usuarioRoutes.post(
  "/usuario/forgot-password",
  ForgotPasswordController.forgotPassword
);

usuarioRoutes.post(
  "/usuario/reset-password",
  ResetPasswordController.resetPassword
);

usuarioRoutes.get(
  "/usuario/me",
  authenticate,
  CreateUsuarioController.me
);

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