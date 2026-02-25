import { Request, Response } from "express";
import ResetPasswordModel from "./ResetPasswordModel";

class ResetPasswordController {
  async resetPassword(req: Request, res: Response) {
    const { token, novaSenha } = req.body;

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