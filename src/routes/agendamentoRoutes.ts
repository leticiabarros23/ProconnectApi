import express  from "express";
import CreateAgendamentoController from "../useCase/agendamento/create/createAgendamentoController";

const agendamentoRoutes = express.Router();


agendamentoRoutes.post("/agendamento",CreateAgendamentoController.createAgendamento)

export default agendamentoRoutes;
