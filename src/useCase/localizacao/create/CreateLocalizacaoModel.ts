import { prisma } from "../../../lib/prisma";

class CreateLocalizacaoModel {
  // Método para criar uma localização no banco de dados
  async createLocalizacaoModel(
    numero: string,
    bairro: string,
    cidade: string,
    estado: string

  ) {
    try {
      // Insere a localização no banco
      const localizacao = await prisma.localizacao.create({
        data: {
          numero: numero,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
        },
      });

      return localizacao; // Retorna a localização criada
    } catch (error) {
      console.error("Erro no Model ao criar localização:", error);
      throw new Error("Erro ao salvar localização no banco de dados");
    }
  }
}

export default new CreateLocalizacaoModel();
