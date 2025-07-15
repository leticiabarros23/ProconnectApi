import express from "express";
import CreatePrecoController from "../useCase/preco/create/CreatePrecoController";
import { authenticate } from "../middlewares/authMiddleware";

const precoRoutes = express.Router();

precoRoutes.get(
  "/preco", 
  CreatePrecoController.getAllPreco
);

precoRoutes.post(
  "/preco",
  authenticate,
  CreatePrecoController.createPreco
);

precoRoutes.put(
  "/preco/:id",
  authenticate,
  CreatePrecoController.updatePreco
);

precoRoutes.delete(
  "/preco/:id",
  authenticate,
  CreatePrecoController.deletePreco
);

export default precoRoutes;
