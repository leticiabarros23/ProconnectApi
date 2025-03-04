import { prisma } from "../../../lib/prisma";

class CreateCategoriaModel {
  // Método para criar uma categoria no banco de dados
  async createCategoriaModel( nomeServico: string, servicoId: number ) {
    try {
      // Insere a categoria no banco, associando os serviços se existirem
      const categoria = await prisma.categoria.create({
        data: {
          nomeServico:  nomeServico,
          servicos: {              
            connect: { id:  servicoId}
          }
        },
        include: {
          servicos: true, // Inclui os serviços criados no retorno
        },
      });

      return categoria; // Retorna a categoria criada com os serviços
    } catch (error) {
      console.error("Erro no Model ao criar categoria:", error);
      throw new Error("Erro ao salvar categoria no banco de dados");
    }
  }
}

export default new CreateCategoriaModel();
