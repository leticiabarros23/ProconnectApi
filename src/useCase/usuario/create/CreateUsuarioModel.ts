import { prisma } from "../../../lib/prisma";

class CreateUsuarioModel {
  // Método para criar um profissional no banco de dados
  async createUsuarioModel(
    nome: string,
    email: string,
    telefone: string,
    senha: string
  ) {
    try {
      const usuario = await prisma.usuario.create({
        data: {
          nome: nome,
          email: email,
          telefone: telefone,
          senha: senha
        },
      });

      return usuario;
    } catch (error) {
      console.error("Erro no Model ao criar profissional:", error);
      throw new Error("Erro ao salvar profissional no banco de dados");
    }
  }

  async getUsuarioModel(id: number) {
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { id: id }
      });

      return usuario;
    } catch (error) {
      console.error("Erro no Model ao buscar profissional:", error);
      throw new Error("Erro ao buscar profissional no banco de dados");
    }
  }

  async deleteUsuarioModel(id: number) {
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
    id: number,
    nome: string,
    email: string,
    telefone: string,
    senha: string
  ) {
    try {
      const usuario = await prisma.usuario.update({
        where: { id: id },
        data: {
          nome: nome,
          email: email,
          telefone: telefone,
          senha: senha
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
