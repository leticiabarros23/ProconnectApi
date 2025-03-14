import { Request, Response } from "express";
import CreatePrecoModel from "./CreatePrecoModel";

class CreatePrecoController {
  // Método para criar um preço
  async createPreco(req: Request, res: Response) {
    const { nomeservico, precificacao, servicoId } = req.body;

    try {
      const preco = await CreatePrecoModel.createPrecoModel(
        nomeservico,
        precificacao,
        servicoId 
      );
      return res.status(201).json(preco);
    } catch (error) {
      console.error("Erro ao criar o preco:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar o preco. Verifique os dados enviados.",
      });
    }
  }

  // Método para atualizar um preço
  async updatePreco(req: Request, res: Response) {
    const { id } = req.params;
    const { nomeservico, precificacao } = req.body;

    try {
      const precoAtualizado = await CreatePrecoModel.updatePrecoModel(Number(id), {
        nomeservico,
        precificacao,
      });

      if (!precoAtualizado) {
        return res.status(404).json({
          error: true,
          message: "Preço não encontrado.",
        });
      }

      return res.status(200).json(precoAtualizado);
    } catch (error) {
      console.error("Erro ao atualizar o preco:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao atualizar o preco. Verifique os dados enviados.",
      });
    }
  }

  // Método para excluir um preço
  async deletePreco(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const precoDeletado = await CreatePrecoModel.deletePrecoModel(Number(id));

      if (!precoDeletado) {
        return res.status(404).json({
          error: true,
          message: "Preço não encontrado.",
        });
      }

      return res.status(200).json({
        message: "Preço deletado com sucesso.",
      });
    } catch (error) {
      console.error("Erro ao deletar o preco:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao deletar o preco.",
      });
    }
  }
}

export default new CreatePrecoController();