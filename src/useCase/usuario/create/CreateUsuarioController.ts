import { Request, Response } from "express";
import CreateUsuarioModel from "./CreateUsuarioModel";
import { hash } from "bcryptjs";

class CreateUsuarioController {
  async createUsuario(req: Request, res: Response) {
    const { nome, email, telefone, estado, cidade, endereco, senha } = req.body;

    // Validação de campos obrigatórios
    if (!nome || !email || !telefone || !estado || !cidade || !endereco || !senha) {
      return res
        .status(400)
        .json({ error: true, message: "Todos os campos são obrigatórios." });
    }

    try {
      // --- VERIFICAÇÃO DE E-MAIL DUPLICADO ---
      // Verificamos se o e-mail já existe antes de fazer qualquer outra coisa
      const usuarioJaExiste = await CreateUsuarioModel.findByEmail(email);
      
      if (usuarioJaExiste) {
        return res.status(400).json({ 
          error: true, 
          message: "Este e-mail já está cadastrado. Tente fazer login ou recupere sua senha." 
        });
      }
      // ---------------------------------------

      // 1. Gera o hash da senha de forma segura
      const senhaCriptografada = await hash(senha, 10);

      // 2. Cria o usuário passando a senha já criptografada
      const usuario = await CreateUsuarioModel.createUsuarioModel(
        nome,
        email,
        telefone,
        estado,
        cidade,
        endereco,
        senhaCriptografada
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

  async me(req: Request, res: Response) {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: true, message: "Não autenticado." });
    const usuario = await CreateUsuarioModel.getUsuarioModel(userId);
    return res.json(usuario);
  }

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

  async updateUsuario(req: Request, res: Response) {
    const idParam = Number(req.params.id);
    const userId = req.user?.id;
    if (!userId || idParam !== userId) {
      return res.status(403).json({ error: true, message: "Acesso negado." });
    }

    const { nome, email, telefone, estado, cidade, endereco, senha } = req.body;
    
    try {
      // Criamos um objeto com os dados básicos
      const dadosParaAtualizar: any = { nome, email, telefone, estado, cidade, endereco };

      // Se o usuário enviou uma senha nova, gera um novo hash
      if (senha && senha.trim() !== "") {
        dadosParaAtualizar.senha = await hash(senha, 10);
      }

      // Atualiza usando o objeto flexível que configuramos no Model
      const usuario = await CreateUsuarioModel.updateUsuarioModel(idParam, dadosParaAtualizar);
      
      return res.json(usuario);
    } catch (err: any) {
      console.error("Erro ao atualizar usuário:", err);
      return res.status(500).json({ error: true, message: err.message });
    }
  }

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