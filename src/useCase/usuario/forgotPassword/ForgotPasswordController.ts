import { Request, Response } from "express";
import ForgotPasswordModel from "./ForgotPasswordModel";
import { Resend } from "resend";
import { generateEmailHtml } from "../../../lib/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

class ForgotPasswordController {
  async forgotPassword(req: Request, res: Response) {
    const { email } = req.body;

    try {
      const usuario = await ForgotPasswordModel.findByEmail(email);

      if (!usuario) {
        return res.status(404).json({ error: "E-mail não encontrado." });
      }

      const token = await ForgotPasswordModel.createResetToken(usuario.id);

      const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

      const emailContent = `
        <h2>Recuperação de Senha</h2>
        <p>Recebemos uma solicitação para redefinir a senha da sua conta no <strong>ProConnect</strong>.</p>
        <p>Clique no botão abaixo para criar uma nova senha. O link expira em <strong>1 hora</strong>.</p>
        <a href="${resetLink}" class="btn">Redefinir Senha</a>
        <p class="link-text">Ou copie e cole este link no navegador:<br>${resetLink}</p>
      `;

      await resend.emails.send({
        from: "ProConnect <onboarding@resend.dev>",
        to: email,
        subject: "Recuperação de senha - ProConnect",
        html: generateEmailHtml(emailContent),
      });

      return res.status(200).json({ message: "E-mail de recuperação enviado com sucesso." });
    } catch (error) {
      console.error("Erro no Controller forgotPassword:", error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

export default new ForgotPasswordController();