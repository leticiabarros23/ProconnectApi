import express  from "express";
import CreateDisponibilidadesController from "../useCase/disponibilidades/create/createDisponibilidadesController";

const disponibilidadesRoutes = express.Router();

disponibilidadesRoutes.post("/agendamento",CreateDisponibilidadesController.createDisponibilidades)

export default disponibilidadesRoutes;

