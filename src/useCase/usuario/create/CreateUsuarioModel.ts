import { prisma } from "../../../lib/prisma";

class CreateUsuarioModel {
  // Método para criar um profissional no banco de dados
  async createUsuarioModel(
    nome: string,
    email: string,
    telefone: string,
    servico: Servico[],
    localizacao:Localizacao[]
  ) {
    try {
      // Insere o profissional no banco
      const Usuario = await prisma.Usuario.create({
        data: {
          nome: nome,
          email: email,
          telefone: telefone,
          servico: servico,
          localizacao:localizacao
        },
      });

      return usuario; // Retorna o profissional criado
    } catch (error) {
      console.error("Erro no Model ao criar profissional:", error);
      throw new Error("Erro ao salvar profissional no banco de dados");
    }
  }
}

export default new CreateUsuarioModel();
