import { Request, Response } from "express";
import CreateUsuarioModel from "./CreateUsuarioModel";

class CreateUsuarioController {
  // Método para criar um usuario
  async createUsuario(req: Request, res: Response) {
    const { nome, email, telefone} = req.body;

    try {
      // Chama o método do model para criar usuario
      const usuario = await CreateUsuarioModel.createUsuarioModel(
        nome,
        email,
        telefone
      );

      return res.status(201).json(usuario);
    } catch (error) {
      console.error("Erro ao criar usuario:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar usuario. Verifique os dados enviados.",
      });
    }
  }

  // Método para buscar um usuário
  async getUsuario(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);  // Converte o ID da URL de string para número

    if (isNaN(id)) {
      return res.status(400).json({
        error: true,
        message: "ID inválido. O ID deve ser um número.",
      });
    }

    try {
      // Chama o método do model para buscar o usuário
      const usuario = await CreateUsuarioModel.getUsuarioModel(id);

      if (!usuario) {
        return res.status(404).json({
          error: true,
          message: "Usuário não encontrado",
        });
      }

      // Retorna os dados do usuário encontrado, incluindo o ID
      return res.status(200).json(usuario);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao buscar usuário. Tente novamente mais tarde.",
      });
    }
  }


  // Método para atualizar um usuário
  async updateUsuario(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);  // Convertendo o ID da URL para número
    const { nome, email, telefone } = req.body;  // Dados que foram enviados no corpo da requisição

    if (isNaN(id)) {
      return res.status(400).json({
        error: true,
        message: "ID inválido. O ID deve ser um número.",
      });
    }

    try {
      const usuarioAtualizado = await CreateUsuarioModel.updateUsuarioModel(
        id,
        nome,
        email,
        telefone
      );

      if (!usuarioAtualizado) {
        return res.status(404).json({
          error: true,
          message: "Usuário não encontrado para atualização",
        });
      }

      return res.status(200).json(usuarioAtualizado);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao atualizar usuário. Tente novamente mais tarde.",
      });
    }
  }

  // Método para deletar um usuário
  async deleteUsuario(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);  // Convertendo o ID da URL para número

    if (isNaN(id)) {
      return res.status(400).json({
        error: true,
        message: "ID inválido. O ID deve ser um número.",
      });
    }

    try {
      // Chama o método do model para deletar o usuário
      const usuarioDeletado = await CreateUsuarioModel.deleteUsuarioModel(id);

      if (!usuarioDeletado) {
        return res.status(404).json({
          error: true,
          message: "Usuário não encontrado para deletar",
        });
      }

      return res.status(200).json({
        message: "Usuário deletado com sucesso",
      });
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao deletar usuário. Tente novamente mais tarde.",

      });
    }
  }
}

export default new CreateUsuarioController();

