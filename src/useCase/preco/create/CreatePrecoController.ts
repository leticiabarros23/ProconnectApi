import { Request, Response } from "express";
import CreatePrecoModel from "./CreatePrecoModel";

class CreatePrecoController {
  // Método para criar um preço
  async createPreco(req: Request, res: Response) {
    // Recebe os dados do body
    const { nomeservico, precificacao, servicoId } = req.body;

    try {
      // Chama o método do model para criar o preco
      const preco = await CreatePrecoModel.createPrecoModel(
        nomeservico,
        precificacao,
        servicoId 
      );

      // Retorna o preco criada
      return res.status(201).json(preco);
    } catch (error) {
      console.error("Erro ao criar o preco:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar o preco. Verifique os dados enviados.",
      });
    }
  }
}

export default new CreatePrecoController();
