"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateProfissionalController_1 = __importDefault(require("../useCase/profissional/create/CreateProfissionalController"));
const profissionalRoutes = express_1.default.Router();
profissionalRoutes.post("/profissionais", CreateProfissionalController_1.default.createProfissional);
exports.default = profissionalRoutes;
