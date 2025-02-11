import express from "express";
import CreateProfissionalController from "../useCase/profissional/create/CreateProfissionalController";

const profissionalRoutes = express.Router();

profissionalRoutes.post("/profissionais", CreateProfissionalController.createProfissional);

    

export default profissionalRoutes;
