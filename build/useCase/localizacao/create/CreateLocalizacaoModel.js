"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class CreateLocalizacaoModel {
    // Método para criar uma localização no banco de dados
    async createLocalizacaoModel(numero, bairro, cidade) {
        try {
            // Insere a localização no banco
            const localizacao = await prisma_1.prisma.localizacao.create({
                data: {
                    numero: numero,
                    bairro: bairro,
                    cidade: cidade,
                },
            });
            return localizacao; // Retorna a localização criada
        }
        catch (error) {
            console.error("Erro no Model ao criar localização:", error);
            throw new Error("Erro ao salvar localização no banco de dados");
        }
    }
}
exports.default = new CreateLocalizacaoModel();
