import { Request, Response } from "express";
import CreateUsuarioModel from "./CreateUsuarioModel";
import { hash } from "bcryptjs";
import { supabase } from "../../../lib/supabase";

// Função de validação de senha forte
function validarSenhaForte(senha: string): string | null {
  if (senha.length < 8) return "A senha deve ter no mínimo 8 caracteres.";
  if (!/[A-Z]/.test(senha)) return "A senha deve ter pelo menos 1 letra maiúscula.";
  if (!/[0-9]/.test(senha)) return "A senha deve ter pelo menos 1 número.";
  if (!/[^a-zA-Z0-9]/.test(senha)) return "A senha deve ter pelo menos 1 caractere especial.";
  return null;
}

class CreateUsuarioController {
  async createUsuario(req: Request, res: Response) {
    const { nome, email, telefone, estado, cidade, endereco, senha } = req.body;

    if (!nome || !email || !telefone || !estado || !cidade || !endereco || !senha) {
      return res.status(400).json({ error: true, message: "Todos os campos são obrigatórios." });
    }

    // Validação de senha forte
    const erroSenha = validarSenhaForte(senha);
    if (erroSenha) {
      return res.status(400).json({ error: true, message: erroSenha });
    }

    try {
      const usuarioJaExiste = await CreateUsuarioModel.findByEmail(email);
      if (usuarioJaExiste) {
        return res.status(400).json({ 
          error: true, 
          message: "Este e-mail já está cadastrado. Tente fazer login ou recupere sua senha." 
        });
      }

      const senhaCriptografada = await hash(senha, 10);
      const usuario = await CreateUsuarioModel.createUsuarioModel(
        nome, email, telefone, estado, cidade, endereco, senhaCriptografada
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
      const dadosParaAtualizar: any = { nome, email, telefone, estado, cidade, endereco };

      if (senha && senha.trim() !== "") {
        // Validação de senha forte ao atualizar também
        const erroSenha = validarSenhaForte(senha);
        if (erroSenha) {
          return res.status(400).json({ error: true, message: erroSenha });
        }
        dadosParaAtualizar.senha = await hash(senha, 10);
      }

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

  async uploadImagem(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: true, message: "Não autenticado." });
    }

    if (!req.file) {
      return res.status(400).json({ error: true, message: "Nenhuma imagem enviada." });
    }

    const nomeArquivo = `${userId}/${Date.now()}-${req.file.originalname}`;

    const { data, error } = await supabase.storage
      .from("usuarios")
      .upload(nomeArquivo, req.file.buffer, {
        contentType: req.file.mimetype,
        upsert: true,
      });

    if (error) {
      return res.status(500).json({ error: true, message: "Erro ao fazer upload da imagem." });
    }

    const { data: urlData } = supabase.storage
      .from("usuarios")
      .getPublicUrl(data.path);

    const usuario = await CreateUsuarioModel.uploadImagemUsuario(userId, urlData.publicUrl);

    return res.status(200).json(usuario);
  } catch (err: any) {
    console.error("Erro ao fazer upload da imagem:", err);
    return res.status(500).json({ error: true, message: "Erro interno do servidor." });
  }
 }

async deletarImagem(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: true, message: "Não autenticado." });
    }

    const usuario = await CreateUsuarioModel.getUsuarioModel(userId);

    if (!usuario?.imagem) {
      return res.status(404).json({ error: true, message: "Nenhuma foto de perfil encontrada." });
    }

    const path = decodeURIComponent(usuario.imagem.split("/usuarios/")[1]);
    await supabase.storage.from("usuarios").remove([path]);

    const usuarioAtualizado = await CreateUsuarioModel.updateUsuarioModel(userId, { imagem: null });
    return res.status(200).json(usuarioAtualizado);
  } catch (err: any) {
    console.error("Erro ao deletar imagem:", err);
    return res.status(500).json({ error: true, message: "Erro interno do servidor." });
    }
  }
}

export default new CreateUsuarioController();