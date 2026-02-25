import { Request, Response } from "express";
import ForgotPasswordModel from "./ForgotPasswordModel";
import nodemailer from "nodemailer";

class ForgotPasswordController {
  async forgotPassword(req: Request, res: Response) {
    const { email } = req.body;

    try {
      const usuario = await ForgotPasswordModel.findByEmail(email);

      if (!usuario) {
        return res.status(404).json({ error: "E-mail não encontrado." });
      }

      const token = await ForgotPasswordModel.createResetToken(usuario.id);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

      await transporter.sendMail({
        from: `"ProConnect" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Recuperação de senha - ProConnect",
        html: `
          <h2>Recuperação de senha</h2>
          <p>Clique no link abaixo para redefinir sua senha. O link expira em 1 hora.</p>
          <a href="${resetLink}">${resetLink}</a>
        `,
      });

      return res.status(200).json({ message: "E-mail de recuperação enviado com sucesso." });
    } catch (error) {
      console.error("Erro no Controller forgotPassword:", error);
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

export default new ForgotPasswordController();

