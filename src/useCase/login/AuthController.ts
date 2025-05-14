import { Request, Response } from "express";
import AuthModel from "./AuthModel";
import { sign } from "jsonwebtoken/promises";

import type { StringValue } from "ms";

class AuthController {
  async login(req: Request, res: Response) {
    const { email, senha } = req.body;
    const expiresIn = (process.env.JWT_EXPIRES_IN ?? "1h") as StringValue;
    const secret = process.env.JWT_SECRET!;

    if (!email || !senha) {
      return res
        .status(400)
        .json({ error: true, message: "E-mail e senha são obrigatórios." });
    }

    try {
      const usuario = await AuthModel.findByEmail(email);
      if (!usuario || usuario.senha !== senha) {
        return res
          .status(401)
          .json({ error: true, message: "Credenciais inválidas." });
      }


      // retorna Promise<string>
      const token = await sign(
        { sub: usuario.id, email: usuario.email },
        secret,
        { expiresIn }
      );

      return res.json({ token });
    } catch (error) {
      console.error("Erro no AuthController:", error);
      return res
        .status(500)
        .json({ error: true, message: "Erro ao autenticar usuário." });
    }
  }
}

export default new AuthController();
