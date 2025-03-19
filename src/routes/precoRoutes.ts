import express from 'express';
import CreatePrecoController from "../useCase/preco/create/CreatePrecoController";

const precoRoutes = express.Router();

precoRoutes.post("/preco", CreatePrecoController.createPreco);
precoRoutes.put("/preco/:id", CreatePrecoController.updatePreco);
precoRoutes.delete("/preco/:id", CreatePrecoController.deletePreco);

export default precoRoutes;