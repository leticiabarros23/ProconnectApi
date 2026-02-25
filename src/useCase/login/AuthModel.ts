import  prisma  from "../../lib/prisma";

class AuthModel {
  async findByEmail(email: string) {
    return prisma.usuario.findUnique({
      where: { email }
    });
  }
}

export default new AuthModel();