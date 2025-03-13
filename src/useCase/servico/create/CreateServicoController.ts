import { Request, Response } from "express";
import CreateServicoModel from "./CreateServicoModel";

class CreateServicoController {
  // Método para criar um serviço
  async createServico(req: Request, res: Response) {
    // Recebe os dados do body
    const { nomeNegocio, preco, descricao, avaliacao, categoriaid, usuarioId } = req.body;

    try {
      // Chama o método do model para criar o serviço
      const servico = await CreateServicoModel.createServicoModel(
        nomeNegocio,
        preco,
        avaliacao,
        descricao,
        categoriaid,
        usuarioId
      );

      // Retorna o serviço criado
      return res.status(201).json(servico);
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar serviço. Verifique os dados enviados.",
      });
    }
  }


 // Método para buscar um serviço pelo id
 async getServico(req: Request, res: Response) {
  const { id } = req.params;  // Recebe o id pela URL

  try {
    const servico = await CreateServicoModel.getServicoModel(Number(id));

    if (!servico) {
      return res.status(404).json({
        error: true,
        message: "Serviço não encontrado",
      });
    }

    return res.status(200).json(servico);  // Retorna o serviço encontrado
  } catch (error) {
    console.error("Erro ao buscar serviço:", error);
    return res.status(500).json({
      error: true,
      message: "Erro ao buscar serviço. Tente novamente mais tarde.",
    });
  }
}

// Método para deletar um serviço
async deleteServico(req: Request, res: Response) {
  const { id } = req.params;  

  try {
    const servicoDeletado = await CreateServicoModel.deleteServicoModel(Number(id));

    if (!servicoDeletado) {
      return res.status(404).json({
        error: true,
        message: "Serviço não encontrado para deletar",
      });
    }

    return res.status(200).json({
      message: "Serviço deletado com sucesso",
    });
  } catch (error) {
    console.error("Erro ao deletar serviço:", error);
    return res.status(500).json({
      error: true,
      message: "Erro ao deletar serviço. Tente novamente mais tarde.",
    });
  }
}

// Método para atualizar um serviço
async updateServico(req: Request, res: Response) {
  const { id } = req.params;  // Recebe o id pela URL
  const { nomeNegocio, preco, descricao, avaliacao, categoriaId, usuarioId } = req.body;

  try {
    const servicoAtualizado = await CreateServicoModel.updateServicoModel(
      Number(id),
      nomeNegocio,
      preco,
      avaliacao,
      descricao,
      categoriaId,
      usuarioId
    );

    if (!servicoAtualizado) {
      return res.status(404).json({
        error: true,
        message: "Serviço não encontrado para atualização",
      });
    }

    return res.status(200).json(servicoAtualizado);  // Retorna o serviço atualizado
  } catch (error) {
    console.error("Erro ao atualizar serviço:", error);
    return res.status(500).json({
      error: true,
      message: "Erro ao atualizar serviço. Tente novamente mais tarde.",
      });
    }
  }
}


export default new CreateServicoController();
