"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateServicoModel_1 = __importDefault(require("./CreateServicoModel"));
class CreateServicoController {
    // Método para criar um serviço
    async createServico(req, res) {
        // Recebe os dados do body
        const { nome, preco, categoria, descricao, profissionalId } = req.body;
        try {
            // Chama o método do model para criar o serviço
            const servico = await CreateServicoModel_1.default.createServicoModel(nome, preco, categoria, descricao, profissionalId);
            // Retorna o serviço criado
            return res.status(201).json(servico);
        }
        catch (error) {
            console.error("Erro ao criar serviço:", error);
            return res.status(500).json({
                error: true,
                message: "Erro ao criar serviço. Verifique os dados enviados.",
            });
        }
    }
}
exports.default = new CreateServicoController();
