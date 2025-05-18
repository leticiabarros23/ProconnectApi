import express from "express";
import CreateCategoriaController from "../useCase/categoria/create/CreateCategoriaController";
import { authenticate } from "../middlewares/authMiddleware";

const categoriaRoutes = express.Router();

categoriaRoutes.get(
  "/categoria",
  CreateCategoriaController.getAllCategoria
);

categoriaRoutes.post(
  "/categoria",
  authenticate,
  CreateCategoriaController.createCategoria
);

categoriaRoutes.put(
  "/categoria/:id",
  authenticate,
  CreateCategoriaController.updateCategoria
);

categoriaRoutes.delete(
  "/categoria/:id",
  authenticate,
  CreateCategoriaController.deleteCategoria
);

export default categoriaRoutes;
