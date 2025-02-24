import { Request, Response } from "express";
import CreateUsuarioModel from "./CreateUsuarioModel";

class CreateUsuarioController {
  // Método para criar um usuario
  async createUsuario(req: Request, res: Response) {
    // Recebe os dados do body
    const { nome, email, telefone,servico,localizacao } = req.body;

    try {
      // Chama o método do model para criar usuario
      const usuario = await CreateUsuarioModel.createUsuarioModel(
        nome,
        email,
        telefone,
        servico,
        localizacao
        
      );

      // Retorna o usuario criado
      return res.status(201).json(usuario);
    } catch (error) {
      console.error("Erro ao criar usuario:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar usuario. Verifique os dados enviados.",
      });
    }
  }
}

export default new CreateUsuarioController();
