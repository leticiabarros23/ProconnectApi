import { Request, Response } from "express";
import ResetPasswordModel from "./ResetPasswordModel";

function validarSenhaForte(senha: string): string | null {
  if (senha.length < 8) return "A senha deve ter no mínimo 8 caracteres.";
  if (!/[A-Z]/.test(senha)) return "A senha deve ter pelo menos 1 letra maiúscula.";
  if (!/[0-9]/.test(senha)) return "A senha deve ter pelo menos 1 número.";
  if (!/[^a-zA-Z0-9]/.test(senha)) return "A senha deve ter pelo menos 1 caractere especial.";
  return null;
}

class ResetPasswordController {
  async resetPassword(req: Request, res: Response) {
    const { token, novaSenha } = req.body;

    // Validação de senha forte
    const erroSenha = validarSenhaForte(novaSenha);
    if (erroSenha) {
      return res.status(400).json({ error: true, message: erroSenha });
    }

    try {
      const resetToken = await ResetPasswordModel.findToken(token);

      if (!resetToken) {
        return res.status(400).json({ error: "Token inválido." });
      }

      if (new Date() > resetToken.expiresAt) {
        await ResetPasswordModel.deleteToken(token);
        return res.status(400).json({ error: "Token expirado." });
      }

      await ResetPasswordModel.updateSenha(resetToken.usuarioId, novaSenha);
      await ResetPasswordModel.deleteToken(token);

      return res.status(200).json({ message: "Senha atualizada com sucesso." });
    } catch (error) {
      console.error("Erro no Controller resetPassword:", error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

export default new ResetPasswordController();