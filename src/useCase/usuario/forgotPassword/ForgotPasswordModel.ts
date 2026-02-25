import prisma from "../../../lib/prisma";
import { v4 as uuidv4 } from "uuid";

class ForgotPasswordModel {
  async findByEmail(email: string) {
    try {
      return await prisma.usuario.findUnique({
        where: { email },
      });
    } catch (error) {
      console.error("Erro no Model ao buscar e-mail:", error);
      throw error;
    }
  }

  async createResetToken(usuarioId: number) {
    try {
      const token = uuidv4();
      const expiresAt = new Date(Date.now() + 1000 * 60 * 60); // 1 hora

      await prisma.resetToken.create({
        data: { token, usuarioId, expiresAt },
      });

      return token;
    } catch (error) {
      console.error("Erro no Model ao criar token:", error);
      throw error;
    }
  }
}

export default new ForgotPasswordModel();