import express from "express";
import CreateUsuarioController from "../useCase/usuario/create/CreateUsuarioController";

const usuarioRoutes = express.Router();

usuarioRoutes.post("/usuario", CreateUsuarioController.createUsuario);
usuarioRoutes.get("/usuario/:id", CreateUsuarioController.getUsuario);
usuarioRoutes.put("/usuario/:id", CreateUsuarioController.updateUsuario);
usuarioRoutes.delete("/usuario/:id", CreateUsuarioController.deleteUsuario);

export default usuarioRoutes;
