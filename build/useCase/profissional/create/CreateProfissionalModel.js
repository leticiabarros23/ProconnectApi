"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class CreateProfissionalModel {
    // Método para criar um profissional no banco de dados
    async createProfissionalModel(nome, email, telefone, linkedin, instagram) {
        try {
            // Insere o profissional no banco
            const profissional = await prisma_1.prisma.profissional.create({
                data: {
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    linkedin: linkedin || null, // Aceita valor opcional
                    instagram: instagram || null, // Aceita valor opcional
                },
            });
            return profissional; // Retorna o profissional criado
        }
        catch (error) {
            console.error("Erro no Model ao criar profissional:", error);
            throw new Error("Erro ao salvar profissional no banco de dados");
        }
    }
}
exports.default = new CreateProfissionalModel();
