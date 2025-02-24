import { Localizacao, Servico } from "@prisma/client";
import { prisma } from "../../../lib/prisma";
import { create } from "domain";

class CreateUsuarioModel {
  // Método para criar um profissional no banco de dados
  async createUsuarioModel(
    nome: string,
    email: string,
    telefone: string,
    servico: Servico[],
    localizacao: Localizacao[]
  ) {
    try {
      // Insere o profissional no banco
      const usuario = await prisma.usuario.create({
        data: {
          nome: nome,
          email: email,
          telefone: telefone,
          servicos: {
            create: servico[0]
          },
          localizacao: {
            create: localizacao[0]
          }
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
