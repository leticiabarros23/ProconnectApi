import express  from "express";
import CreatePacienteController from "../useCase/paciente/create/CreatePacienteController";

const pacienteRoutes = express.Router();


pacienteRoutes.post("/paciente",CreatePacienteController.createPaciente) // determina o caminho do paciente e chama o controller


export default pacienteRoutes;
