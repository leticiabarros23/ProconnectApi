import { Servico } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

class CreatePrecoModel {
  // Método para criar um preco no banco de dados
  async createPrecoModel(
    nomeservico: string,
    precificacao: number,
    servicoId: number 
  ) {
    try {
      const preco = await prisma.preco.create({
        data: {
          nomeservico: nomeservico,
          precificacao: precificacao,
          servico: { connect: { id: servicoId } }
        },
      });
      return preco;
    } catch (error) {
      console.error("Erro no Model ao criar o preco:", error);
      throw new Error("Erro ao salvar o preco no banco de dados");
    }
  }

  // Método para buscar todos os preços
  async getAllPrecoModel() {
    try {
      const precos = await prisma.preco.findMany();  // Busca todos os preços
      return precos;  // Retorna todos os preços encontrados
    } catch (error) {
      console.error("Erro ao buscar todos os preços:", error);
      throw new Error("Erro ao buscar preços no banco de dados");
    }
  }

  // Método para atualizar um preco no banco de dados
  async updatePrecoModel(id: number, data: { nomeservico?: string; precificacao?: number }) {
    try {
      const precoAtualizado = await prisma.preco.update({
        where: { id },
        data,
      });
      return precoAtualizado;
    } catch (error) {
      console.error("Erro no Model ao atualizar o preco:", error);
      throw new Error("Erro ao atualizar o preco no banco de dados");
    }
  }

  // Método para deletar um preco no banco de dados
  async deletePrecoModel(id: number) {
    try {
      const precoDeletado = await prisma.preco.delete({
        where: { id },
      });
      return precoDeletado;
    } catch (error) {
      console.error("Erro no Model ao deletar o preco:", error);
      throw new Error("Erro ao deletar o preco no banco de dados");
    }
  }
}

export default new CreatePrecoModel();
