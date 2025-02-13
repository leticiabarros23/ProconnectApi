import { Request, Response } from "express";
import CreateServicoModel from "./CreateServicoModel";

class CreateServicoController {
  // Método para criar um serviço
  async createServico(req: Request, res: Response) {
    // Recebe os dados do body
    const { nome, preco, categoria, descricao, profissionalId } = req.body;

    try {
      // Chama o método do model para criar o serviço
      const servico = await CreateServicoModel.createServicoModel(
        nome,
        preco,
        categoria,
        descricao,
        profissionalId
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
}

export default new CreateServicoController();
