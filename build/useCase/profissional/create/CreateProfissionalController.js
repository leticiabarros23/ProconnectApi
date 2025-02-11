"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateProfissionalModel_1 = __importDefault(require("./CreateProfissionalModel"));
class CreateProfissionalController {
    // Método para criar um profissional
    async createProfissional(req, res) {
        // Recebe os dados do body
        const { nome, email, telefone, linkedin, instagram } = req.body;
        try {
            // Chama o método do model para criar o profissional
            const profissional = await CreateProfissionalModel_1.default.createProfissionalModel(nome, email, telefone, linkedin, instagram);
            // Retorna o profissional criado
            return res.status(201).json(profissional);
        }
        catch (error) {
            console.error("Erro ao criar profissional:", error);
            return res.status(500).json({
                error: true,
                message: "Erro ao criar profissional. Verifique os dados enviados.",
            });
        }
    }
}
exports.default = new CreateProfissionalController();
