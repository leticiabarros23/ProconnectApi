import { Request, Response } from "express";
import CreateLocalizacaoModel from "./CreatePrecoModel";

class CreateLocalizacaoController {
  // Método para criar uma preço
  async createPreco(req: Request, res: Response) {
    // Recebe os dados do body
    const { nomeservico, precificacao, servicoId } = req.body;

    try {
      // Chama o método do model para criar a localização
      const Preco = await CreatePrecoModel.createPrecoModel(
        nomeservico,
        precificacao,
        servicoId 
      );

      // Retorna a localização criada
      return res.status(201).json(Preco);
    } catch (error) {
      console.error("Erro ao criar localização:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar localização. Verifique os dados enviados.",
      });
    }
  }
}

export default new CreatePrecoController();
