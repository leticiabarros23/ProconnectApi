import { Request, Response } from "express";
import CreateProfissionalModel from "./CreateProfissionalModel";

class CreateProfissionalController {
  // Método para criar um profissional
  async createProfissional(req: Request, res: Response) {
    // Recebe os dados do body
    const { nome, email, telefone, linkedin, instagram } = req.body;

    try {
      // Chama o método do model para criar o profissional
      const profissional = await CreateProfissionalModel.createProfissionalModel(
        nome,
        email,
        telefone,
        linkedin,
        instagram
      );

      // Retorna o profissional criado
      return res.status(201).json(profissional);
    } catch (error) {
      console.error("Erro ao criar profissional:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar profissional. Verifique os dados enviados.",
      });
    }
  }
}

export default new CreateProfissionalController();
