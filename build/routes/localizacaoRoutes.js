"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateLocalizacaoController_1 = __importDefault(require("../useCase/localizacao/create/CreateLocalizacaoController"));
const localizacaoRoutes = express_1.default.Router();
localizacaoRoutes.post("/localizacao", CreateLocalizacaoController_1.default.createLocalizacao);
exports.default = localizacaoRoutes;
