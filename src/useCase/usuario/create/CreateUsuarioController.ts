// CreateUsuarioController.ts
import { Request, Response } from "express";
import CreateUsuarioModel from "./CreateUsuarioModel";

class CreateUsuarioController {
  // Cria um novo usuário
  async createUsuario(req: Request, res: Response) {
    const { nome, email, telefone, estado, cidade, endereco, senha } = req.body;

    // Validação básica
    if (!nome || !email || !telefone || !estado || !cidade || !endereco || !senha) {
      return res
        .status(400)
        .json({ error: true, message: "Todos os campos são obrigatórios." });
    }

    try {
      const usuario = await CreateUsuarioModel.createUsuarioModel(
        nome,
        email,
        telefone,
        estado,
        cidade,
        endereco,
        senha
      );
      return res.status(201).json(usuario);
    } catch (error: any) {
      console.error("Erro ao criar usuário:", error);
      return res.status(500).json({
        error: true,
        message: error.message || "Erro ao criar usuário. Verifique os dados enviados.",
      });
    }
  }

  // Busca usuário autenticado
  async getUsuario(req: Request, res: Response) {
    const idParam = Number(req.params.id);
    const userId = req.user?.id;
    if (!userId || idParam !== userId) {
      return res.status(403).json({ error: true, message: "Acesso negado." });
    }

    try {
      const usuario = await CreateUsuarioModel.getUsuarioModel(idParam);
      return res.json(usuario);
    } catch (err: any) {
      console.error("Erro ao buscar usuário:", err);
      return res.status(500).json({ error: true, message: err.message });
    }
  }

  // Atualiza dados do usuário
  async updateUsuario(req: Request, res: Response) {
    const idParam = Number(req.params.id);
    const userId = req.user?.id;
    if (!userId || idParam !== userId) {
      return res.status(403).json({ error: true, message: "Acesso negado." });
    }

    const { nome, email, telefone, estado, cidade, endereco, senha } = req.body;
    try {
      const usuario = await CreateUsuarioModel.updateUsuarioModel(
        idParam,
        nome,
        email,
        telefone,
        estado,
        cidade,
        endereco,
        senha
      );
      return res.json(usuario);
    } catch (err: any) {
      console.error("Erro ao atualizar usuário:", err);
      return res.status(500).json({ error: true, message: err.message });
    }
  }

  // Deleta conta do usuário
  async deleteUsuario(req: Request, res: Response) {
    const idParam = Number(req.params.id);
    const userId = req.user?.id;
    if (!userId || idParam !== userId) {
      return res.status(403).json({ error: true, message: "Acesso negado." });
    }

    try {
      await CreateUsuarioModel.deleteUsuarioModel(idParam);
      return res.json({ message: "Conta removida com sucesso." });
    } catch (err: any) {
      console.error("Erro ao deletar usuário:", err);
      return res.status(500).json({ error: true, message: err.message });
    }
  }
}

export default new CreateUsuarioController();
