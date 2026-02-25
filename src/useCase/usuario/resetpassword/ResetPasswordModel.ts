import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

class ResetPasswordModel {
  async findToken(token: string) {
    try {
      return await prisma.resetToken.findUnique({
        where: { token },
      });
    } catch (error) {
      console.error("Erro no Model ao buscar token:", error);
      throw error;
    }
  }

  async updateSenha(usuarioId: number, novaSenha: string) {
    try {
      const senhaHash = await bcrypt.hash(novaSenha, 10);
      return await prisma.usuario.update({
        where: { id: usuarioId },
        data: { senha: senhaHash },
      });
    } catch (error) {
      console.error("Erro no Model ao atualizar senha:", error);
      throw error;
    }
  }

  async deleteToken(token: string) {
    try {
      return await prisma.resetToken.delete({
        where: { token },
      });
    } catch (error) {
      console.error("Erro no Model ao deletar token:", error);
      throw error;
    }
  }
}

export default new ResetPasswordModel();