import { prisma } from "../../../lib/prisma";

class CreateServicoModel {
  // Método para criar um serviço no banco de dados
  async createServicoModel(
    nome: string,
    preco: number,
    categoria: string,
    descricao: string,
    profissionalId: number // Relacionamento com a tabela Profissional
  ) {
    try {
      // Insere o serviço no banco
      const servico = await prisma.servico.create({
        data: {
          nome: nome,
          preco: preco,
          categoria: categoria,
          descricao: descricao,
          profissionalId: profissionalId, // Relaciona com o profissional
        },
      });

      return servico; // Retorna o serviço criado
    } catch (error) {
      console.error("Erro no Model ao criar serviço:", error);
      throw new Error("Erro ao salvar serviço no banco de dados");
    }
  }
}

export default new CreateServicoModel();
