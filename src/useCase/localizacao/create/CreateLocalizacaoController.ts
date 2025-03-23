import { Request, Response } from "express";
import CreateLocalizacaoModel from "./CreateLocalizacaoModel";

class CreateLocalizacaoController {
  // Método para criar uma localização
  async createLocalizacao(req: Request, res: Response) {
    // Recebe os dados do body
    const { numero, bairro, cidade, estado } = req.body;

    try {
      // Chama o método do model para criar a localização
      const localizacao = await CreateLocalizacaoModel.createLocalizacaoModel(
        numero,
        bairro,
        cidade,
        estado
      );

      // Retorna a localização criada
      return res.status(201).json(localizacao);
    } catch (error) {
      console.error("Erro ao criar localização:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar localização. Verifique os dados enviados.",
      });
    }
  }

  // Método para buscar uma localização pelo ID
  async getLocalizacao(req: Request, res: Response) {
    const { id } = req.params;  // Recebe o ID da URL

    try {
      // Chama o método do model para buscar a localização
      const localizacao = await CreateLocalizacaoModel.getLocalizacaoModel(Number(id));

      if (!localizacao) {
        return res.status(404).json({
          error: true,
          message: "Localização não encontrada.",
        });
      }

      return res.status(200).json(localizacao);  // Retorna a localização encontrada
    } catch (error) {
      console.error("Erro ao buscar localização:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao buscar localização. Tente novamente mais tarde.",
      });
    }
  }

  // Método para atualizar uma localização
  async updateLocalizacao(req: Request, res: Response) {
    const { id } = req.params;  // Recebe o ID da URL
    const { numero, bairro, cidade, estado } = req.body;  // Dados da localização

    try {
      // Chama o método do model para atualizar a localização
      const localizacaoAtualizada = await CreateLocalizacaoModel.updateLocalizacaoModel(
        Number(id),
        numero,
        bairro,
        cidade,
        estado
      );

      if (!localizacaoAtualizada) {
        return res.status(404).json({
          error: true,
          message: "Localização não encontrada para atualização.",
        });
      }

      return res.status(200).json(localizacaoAtualizada);  // Retorna a localização atualizada
    } catch (error) {
      console.error("Erro ao atualizar localização:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao atualizar localização. Tente novamente mais tarde.",
      });
    }
  }

  async getAllLocalizacoes(req: Request, res: Response) {
    try {
      const localizacoes = await CreateLocalizacaoModel.getAllLocalizacoesModel();
      return res.status(200).json(localizacoes);
    } catch (error) {
      console.error("Erro ao buscar localizações:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao buscar localizações.",
      });
    }
  }
  
  // Método para deletar uma localização
  async deleteLocalizacao(req: Request, res: Response) {
    const { id } = req.params;  // Recebe o ID da URL

    try {
      // Chama o método do model para deletar a localização
      const localizacaoDeletada = await CreateLocalizacaoModel.deleteLocalizacaoModel(Number(id));

      if (!localizacaoDeletada) {
        return res.status(404).json({
          error: true,
          message: "Localização não encontrada para exclusão.",
        });
      }

      return res.status(200).json({
        message: "Localização deletada com sucesso.",
      });  // Confirmação de exclusão
    } catch (error) {
      console.error("Erro ao deletar localização:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao deletar localização. Tente novamente mais tarde.",
      });
    }
  }
}

export default new CreateLocalizacaoController();
