import express  from "express";
import CreateLocaisController from "../useCase/locais/create/createLocaisContoller";

const locaisRoutes = express.Router();


locaisRoutes.post("/locais",CreateLocaisController.createLocais)

export default locaisRoutes;

