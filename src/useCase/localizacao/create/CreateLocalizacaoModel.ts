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

  // Método para buscar uma localização pelo ID
  async getLocalizacaoModel(id: number) {
    try {
      const localizacao = await prisma.localizacao.findUnique({
        where: { id: id },
      });

      return localizacao;  // Retorna a localização encontrada
    } catch (error) {
      console.error("Erro ao buscar localização:", error);
      throw new Error("Erro ao buscar localização no banco de dados");
    }
  }

  // Método para atualizar uma localização no banco de dados
  async updateLocalizacaoModel(
    id: number,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string
  ) {
    try {
      const localizacaoAtualizada = await prisma.localizacao.update({
        where: { id: id },
        data: {
          numero: numero,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
        },
      });

      return localizacaoAtualizada;  // Retorna a localização atualizada
    } catch (error) {
      console.error("Erro ao atualizar localização:", error);
      throw new Error("Erro ao atualizar localização no banco de dados");
    }
  }

  // Método para deletar uma localização no banco de dados
  async deleteLocalizacaoModel(id: number) {
    try {
      const localizacaoDeletada = await prisma.localizacao.delete({
        where: { id: id },
      });

      return localizacaoDeletada;  // Retorna a localização deletada
    } catch (error) {
      console.error("Erro ao deletar localização:", error);
      throw new Error("Erro ao deletar localização no banco de dados");
    }
  }
}

export default new CreateLocalizacaoModel();
