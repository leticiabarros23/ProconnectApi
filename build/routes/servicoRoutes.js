"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateServicoController_1 = __importDefault(require("../useCase/servico/create/CreateServicoController"));
const servicoRoutes = express_1.default.Router();
servicoRoutes.post("/servico", CreateServicoController_1.default.createServico);
exports.default = servicoRoutes;
