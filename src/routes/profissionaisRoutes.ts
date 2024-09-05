import express  from "express";
import CreateProfissionaisController from "../useCase/profissionais/create/createProfissionaisController";

const profissionaisRoutes = express.Router();


profissionaisRoutes.post("/profissionais",CreateProfissionaisController.createProfissionais)

export default profissionaisRoutes;

