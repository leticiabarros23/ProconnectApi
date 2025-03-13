import { Localizacao } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

class CreateUsuarioModel {
  // Método para criar um profissional no banco de dados
  async createUsuarioModel(
    nome: string,
    email: string,
    telefone: string,
    localizacao: Localizacao[]
  ) {
    try {
      // Insere o profissional no banco
      const usuario = await prisma.usuario.create({
        data: {
          nome: nome,
          email: email,
          telefone: telefone,
          localizacao: {
            create: localizacao[0] // Assume-se que você está criando uma única localizacao
          }
        },
      });

      return usuario; // Retorna o profissional criado
    } catch (error) {
      console.error("Erro no Model ao criar profissional:", error);
      throw new Error("Erro ao salvar profissional no banco de dados");
    }
  }

  // Método para buscar um usuário pelo ID
  async getUsuarioModel(id: number) {  // Alterado para `number`
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { id: id },
        include: { localizacao: true },
      });

      return usuario;
    } catch (error) {
      console.error("Erro no Model ao buscar profissional:", error);
      throw new Error("Erro ao buscar profissional no banco de dados");
    }
  }

  async deleteUsuarioModel(id: number) {  // Alterado para `number`
    try {
      const usuario = await prisma.usuario.delete({
        where: { id: id },
      });

      return usuario;
    } catch (error) {
      console.error("Erro no Model ao deletar profissional:", error);
      throw new Error("Erro ao deletar profissional no banco de dados");
    }
  }

  async updateUsuarioModel(
    id: number, // Alterado para `number`
    nome: string,
    email: string,
    telefone: string,
    localizacao: Localizacao[]
  ) {
    try {
      const usuario = await prisma.usuario.update({
        where: { id: id },
        data: {
          nome: nome,
          email: email,
          telefone: telefone,
          localizacao: {
            update: {
              where: { id: localizacao[0].id },
              data: localizacao[0],
            },
          },
        },
      });

      return usuario;
    } catch (error) {
      console.error("Erro no Model ao atualizar profissional:", error);
      throw new Error("Erro ao atualizar profissional no banco de dados");
    }
  }
}

export default new CreateUsuarioModel();
