import express from 'express';
import CreateCategoriaController from "../useCase/categoria/create/CreateCategoriaController";

const categoriaRoutes = express.Router();

categoriaRoutes.post("/categoria", CreateCategoriaController.createCategoria);
categoriaRoutes.get("/categoria", CreateCategoriaController.getAllCategoria);
categoriaRoutes.put("/categoria/:id", CreateCategoriaController.updateCategoria);
categoriaRoutes.delete("/categoria/:id", CreateCategoriaController.deleteCategoria);

export default categoriaRoutes;