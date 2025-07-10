import { prisma } from "../../../lib/prisma";

class CreateUsuarioModel {
  async createUsuarioModel(
    nome: string,
    email: string,
    telefone: string,
    estado: string,
    cidade: string,
    endereco: string,
    senha: string
  ) {
    try {
      return await prisma.usuario.create({
        data: { nome, email, telefone, estado, cidade, endereco, senha },
      });
    } catch (error) {
      console.error("Erro no Model ao criar usuário:", error);
      throw new Error("Erro ao salvar usuário no banco de dados");
    }
  }

  async getUsuarioModel(id: number) {
    try {
      return await prisma.usuario.findUnique({ where: { id } });
    } catch (error) {
      console.error("Erro no Model ao buscar usuário:", error);
      throw new Error("Erro ao buscar usuário no banco de dados");
    }
  }

  async updateUsuarioModel(
    id: number,
    nome: string,
    email: string,
    telefone: string,
    estado: string,
    cidade: string,
    endereco: string,
    senha: string
  ) {
    try {
      return await prisma.usuario.update({
        where: { id },
        data: { nome, email, telefone, estado, cidade, endereco, senha },
      });
    } catch (error) {
      console.error("Erro no Model ao atualizar usuário:", error);
      throw new Error("Erro ao atualizar usuário no banco de dados");
    }
  }

  async deleteUsuarioModel(id: number) {
    try {
      return await prisma.usuario.delete({ where: { id } });
    } catch (error) {
      console.error("Erro no Model ao deletar usuário:", error);
      throw new Error("Erro ao deletar usuário no banco de dados");
    }
  }
}

export default new CreateUsuarioModel();
