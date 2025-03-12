import express from 'express';
import CreateCategoriaController from "../useCase/categoria/create/CreateCategoriaController";

const categoriaRoutes = express.Router();

categoriaRoutes.post("/categoria", CreateCategoriaController.createCategoria);
categoriaRoutes.get("/categoria", CreateCategoriaController.createCategoria);

export default categoriaRoutes;