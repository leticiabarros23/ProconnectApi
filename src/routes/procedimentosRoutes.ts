import express  from "express";
import CreateProcedimentosController from "../useCase/procedimentos/create/createProcedimentosController";

const procedimentosRoutes = express.Router();


procedimentosRoutes.post("/procedimentos",CreateProcedimentosController.createProcedimentos)

export default procedimentosRoutes;

