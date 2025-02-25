import express from "express";
import CreateUsuarioController from "../useCase/usuario/create/CreateUsuarioController";

const usuarioRoutes = express.Router();

usuarioRoutes.post("/usuario", CreateUsuarioController.createUsuario);

export default usuarioRoutes;
