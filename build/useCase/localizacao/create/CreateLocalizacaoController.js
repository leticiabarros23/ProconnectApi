"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateLocalizacaoModel_1 = __importDefault(require("./CreateLocalizacaoModel"));
class CreateLocalizacaoController {
    // Método para criar uma localização
    async createLocalizacao(req, res) {
        // Recebe os dados do body
        const { numero, bairro, cidade } = req.body;
        try {
            // Chama o método do model para criar a localização
            const localizacao = await CreateLocalizacaoModel_1.default.createLocalizacaoModel(numero, bairro, cidade);
            // Retorna a localização criada
            return res.status(201).json(localizacao);
        }
        catch (error) {
            console.error("Erro ao criar localização:", error);
            return res.status(500).json({
                error: true,
                message: "Erro ao criar localização. Verifique os dados enviados.",
            });
        }
    }
}
exports.default = new CreateLocalizacaoController();
