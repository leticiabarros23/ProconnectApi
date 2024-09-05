import express  from "express";
import CreatePacienteController from "../useCase/paciente/create/CreatePacienteController";

const pacienteRoutes = express.Router();


pacienteRoutes.post("/paciente",CreatePacienteController.createPaciente)

export default pacienteRoutes;
