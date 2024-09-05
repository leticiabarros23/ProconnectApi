import express  from "express";
import CreatePacienteController from "../useCase/paciente/create/CreatePacienteController";

const pacienteRoutes = express.Router();


pacienteRoutes.post("/paciente",CreatePacienteController.createPaciente)

<<<<<<< HEAD

=======
>>>>>>> dce18613f255231574efc05a4120fe34e629cbb7
export default pacienteRoutes;
