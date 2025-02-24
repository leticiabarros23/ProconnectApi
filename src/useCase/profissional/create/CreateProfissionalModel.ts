import { prisma } from "../../../lib/prisma";

class CreateProfissionalModel {
  // Método para criar um profissional no banco de dados
  async createProfissionalModel(
    nome: string,
    email: string,
    telefone: string,
    linkedin?: string,
    instagram?: string
  ) {
    try {
      // Insere o profissional no banco
      const profissional = await prisma.Profissional.create({
        data: {
          nome: nome,
          email: email,
          telefone: telefone,
          linkedin: linkedin || null, // Aceita valor opcional
          instagram: instagram || null, // Aceita valor opcional
        },
      });

      return profissional; // Retorna o profissional criado
    } catch (error) {
      console.error("Erro no Model ao criar profissional:", error);
      throw new Error("Erro ao salvar profissional no banco de dados");
    }
  }
}

export default new CreateProfissionalModel();
