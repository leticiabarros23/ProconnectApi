import { Categoria, Avaliacao, Preco, Usuario } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

class CreateServicoModel {
  // Método para criar um serviço no banco de dados
  async createServicoModel(
    nomeNegocio: string,
    preco: Preco[],
    avaliacao: Avaliacao,
    descricao: string,
    categoriaId: number,
    usuarioId: number // Relacionamento com a tabela Profissional
  ) {
    try {
      // Insere o serviço no banco
      const servico = await prisma.servico.create({
        data: {
          nomeNegocio: nomeNegocio,
          preco: {
            create: preco
          },
          descricao: descricao,
          avaliacao: {
            create: avaliacao
          },
          categoria: {
            connect: { id: categoriaId }
          },
          usuario: {
            connect: { id: usuarioId }
          }
        },
      });

      return servico; // Retorna o serviço criado
    } catch (error) {
      console.error("Erro no Model ao criar serviço:", error);
      throw new Error("Erro ao salvar serviço no banco de dados");
    }
  }

  // Método para buscar um serviço pelo ID
  async getServicoModel(id: number) {  // Corrigido para garantir que `id` seja `number`
    try {
      // Busca o serviço com o ID fornecido
      const servico = await prisma.servico.findUnique({
        where: { id: id },  // A busca é feita pelo `id`
        include: {
          preco: true,           // Inclui os dados de preço relacionados
          avaliacao: true,       // Inclui os dados de avaliação relacionados
          categoria: true,       // Inclui os dados da categoria relacionada
          usuario: true          // Inclui os dados do usuário relacionado
        },
      });

      return servico;  // Retorna o serviço encontrado
    } catch (error) {
      console.error("Erro ao buscar serviço no model:", error);
      throw new Error("Erro ao buscar serviço no banco de dados");
    }
  }

  // Método para deletar um serviço
  async deleteServicoModel(id: number) {
    try {
      // Primeiro, exclui os preços relacionados a este serviço
      await prisma.preco.deleteMany({
        where: {
          servicoId: id,
        },
      });

      // Exclui as avaliações relacionadas a este serviço
      await prisma.avaliacao.deleteMany({
        where: {
          servicoId: id,
        },
      });

      // Agora, deleta o serviço
      const servicoDeletado = await prisma.servico.delete({
        where: {
          id: id,
        },
      });

      return servicoDeletado;  // Retorna o serviço deletado
    } catch (error) {
      console.error("Erro ao deletar serviço no model:", error);
      throw new Error("Erro ao deletar serviço no banco de dados");
    }
  }

  // Método para atualizar um serviço
  async updateServicoModel(
    id: number,
    nomeNegocio: string,
    preco: Preco[],  // Array de Precos
    avaliacao: Avaliacao[],  // Array de Avaliacoes
    descricao: string,
    categoriaId: number,
    usuarioId: number
  ) {
    try {
      const servicoAtualizado = await prisma.servico.update({
        where: { id: id },
        data: {
          nomeNegocio,
          descricao,

          // Verifica se preco é um array e está sendo passado corretamente
          preco: preco && preco.length > 0 ? {
            update: preco.map(p => ({
              where: { id: p.id },  // Identifica pelo id
              data: {
                nomeservico: p.nomeservico,
                precificacao: p.precificacao,
                servicoId: p.servicoId
              }
            }))
          } : undefined,  // Caso preço não seja passado, não atualiza nada

          // Verifica se avaliacao é um array e está sendo passado corretamente
          avaliacao: avaliacao && avaliacao.length > 0 ? {
            update: avaliacao.map(a => ({
              where: { id: a.id },  // Identifica pela avaliação ID
              data: {
                star: a.star,
                descricao: a.descricao,
                usuarioId: a.usuarioId
              }
            }))
          } : undefined,  // Caso avaliação não seja passada, não atualiza nada

          // Atualiza a categoria
          categoria: categoriaId ? {
            connect: { id: categoriaId }
          } : undefined,

          // Atualiza o usuário
          usuario: usuarioId ? {
            connect: { id: usuarioId }
          } : undefined,
        },
      });

      return servicoAtualizado;
    } catch (error) {
      console.error("Erro ao atualizar serviço:", error);
      throw new Error("Erro ao atualizar serviço no banco de dados");
    }
  }
}



export default new CreateServicoModel();
