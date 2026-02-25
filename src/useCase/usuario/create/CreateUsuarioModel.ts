import  prisma  from "../../../lib/prisma";

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
        select: {
          id: true,
          nome: true,
          email: true,
          telefone: true,
          estado: true,
          cidade: true,
          endereco: true,
          criadoEm: true,
        },
      });
    } catch (error: any) {
      console.error("Erro no Model ao criar usuário:", error);
      throw error;
    }
  }

  async findByEmail(email: string) {
    try {
      return await prisma.usuario.findUnique({
        where: { email },
      });
    } catch (error) {
      console.error("Erro no Model ao buscar e-mail:", error);
      throw error;
    }
  }

  async getUsuarioModel(id: number) {
    try {
      return await prisma.usuario.findUnique({
        where: { id },
        select: {
          id: true,
          nome: true,
          email: true,
          telefone: true,
          estado: true,
          cidade: true,
          endereco: true,
          criadoEm: true,
        },
      });
    } catch (error) {
      console.error("Erro no Model ao buscar usuário:", error);
      throw new Error("Erro ao buscar usuário no banco de dados");
    }
  }

  async updateUsuarioModel(id: number, dados: any) {
    try {
      return await prisma.usuario.update({
        where: { id },
        data: dados,
        select: {
          id: true,
          nome: true,
          email: true,
          telefone: true,
          estado: true,
          cidade: true,
          endereco: true,
        },
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