import { prisma } from "../../lib/prisma";

class AuthModel {
  // Busca usuário pelo e-mail
  async findByEmail(email: string) {
    return prisma.usuario.findUnique({
      where: { email }
    });
  }
}

export default new AuthModel();