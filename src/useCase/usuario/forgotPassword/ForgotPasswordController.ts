import { Request, Response } from "express";
import ForgotPasswordModel from "./ForgotPasswordModel";
import nodemailer from "nodemailer";
import { generateEmailHtml } from "../../../lib/emailTemplate";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true para 465, false para 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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
        <a href="${resetLink}" style="background:#4F46E5;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;">Redefinir Senha</a>
        <p style="margin-top:16px;">Ou copie e cole este link no navegador:<br>${resetLink}</p>
      `;

      await transporter.sendMail({
        from: `"ProConnect" <${process.env.EMAIL_USER}>`,
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