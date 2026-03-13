import express from "express";
import FavoritoController from "../useCase/favorito/create/FavoritoController";
import { authenticate } from "../middlewares/authMiddleware";

const favoritoRoutes = express.Router();

favoritoRoutes.post("/favorito", authenticate, FavoritoController.adicionarFavorito);
favoritoRoutes.delete("/favorito/:servicoId", authenticate, FavoritoController.removerFavorito);
favoritoRoutes.get("/favorito", authenticate, FavoritoController.listarFavoritos);

export default favoritoRoutes;