import { Request, Response } from "express";
import CreateServicoModel from "./CreateServicoModel";

class CreateServicoController {
  // Método para criar um serviço com localização e preços
  async createServico(req: Request, res: Response) {
    const {
      nomeNegocio,
      descricao,
      preco,
      categoriaId,
      usuarioId,
      localizacao
    } = req.body;

    try {
      const servico = await CreateServicoModel.createServicoModel(
        nomeNegocio,
        descricao,
        preco,
        categoriaId,
        usuarioId,
        localizacao
      );

      return res.status(201).json(servico);
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar serviço. Verifique os dados enviados.",
      });
    }
  }

  // Método para buscar todos os serviços
  async getAllServico(req: Request, res: Response) {
    try {
      const servicos = await CreateServicoModel.getAllServicoModel();

      if (servicos.length === 0) {
        return res.status(404).json({
          error: true,
          message: "Nenhum serviço encontrado.",
        });
      }

      return res.status(200).json(servicos);
    } catch (error) {
      console.error("Erro ao buscar todos os serviços:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao buscar serviços. Tente novamente mais tarde.",
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
    const { id } = req.params;
    const {
      nomeNegocio,
      preco,
      avaliacao,
      descricao,
      categoriaId,
      usuarioId
    } = req.body;

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

      return res.status(200).json(servicoAtualizado);
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
