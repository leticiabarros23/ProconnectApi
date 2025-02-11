import { Request, Response } from "express";
import CreateLocalizacaoModel from "./CreateLocalizacaoModel";

class CreateLocalizacaoController {
  // Método para criar uma localização
  async createLocalizacao(req: Request, res: Response) {
    // Recebe os dados do body
    const { numero, bairro, cidade } = req.body;

    try {
      // Chama o método do model para criar a localização
      const localizacao = await CreateLocalizacaoModel.createLocalizacaoModel(
        numero,
        bairro,
        cidade
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
}

export default new CreateLocalizacaoController();
