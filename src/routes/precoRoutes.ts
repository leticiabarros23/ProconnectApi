import express from "express";
import CreatePrecoController from "../useCase/preco/create/CreatePrecoController";

const precoRoutes = express.Router();


precoRoutes.post("/preco", CreatePrecoController.createPreco);

export default precoRoutes;