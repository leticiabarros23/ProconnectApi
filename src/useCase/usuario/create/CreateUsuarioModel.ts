import prisma from "../../../lib/prisma";
import { supabase } from "../../../lib/supabase";

const usuarioSelect = {
  id: true,
  nome: true,
  email: true,
  telefone: true,
  estado: true,
  cidade: true,
  endereco: true,
  imagem: true,
  disponivel: true,
  criadoEm: true,
};

class CreateUsuarioModel {
  async createUsuarioModel(
    nome: string,
    email: string,
    telefone: string,
    estado: string,
    cidade: string,
    endereco: string,
    senha: string
  ) {
    try {
      return await prisma.usuario.create({
        data: { nome, email, telefone, estado, cidade, endereco, senha },
        select: usuarioSelect,
      });
    } catch (error: any) {
      console.error("Erro no Model ao criar usuário:", error);
      throw error;
    }
  }

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

  async getUsuarioModel(id: number) {
    try {
      return await prisma.usuario.findUnique({
        where: { id },
        select: usuarioSelect,
      });
    } catch (error) {
      console.error("Erro no Model ao buscar usuário:", error);
      throw new Error("Erro ao buscar usuário no banco de dados");
    }
  }

  async updateUsuarioModel(id: number, dados: any) {
    try {
      return await prisma.usuario.update({
        where: { id },
        data: dados,
        select: usuarioSelect,
      });
    } catch (error) {
      console.error("Erro no Model ao atualizar usuário:", error);
      throw new Error("Erro ao atualizar usuário no banco de dados");
    }
  }

  async deleteUsuarioModel(id: number) {
    try {
      return await prisma.usuario.delete({ where: { id } });
    } catch (error) {
      console.error("Erro no Model ao deletar usuário:", error);
      throw new Error("Erro ao deletar usuário no banco de dados");
    }
  }

  async uploadImagemUsuario(id: number, imageUrl: string) {
    const usuario = await prisma.usuario.findUnique({ where: { id } });

    if (!usuario) throw new Error("Usuário não encontrado.");

    // Se já tinha imagem, deleta do storage antes
    if (usuario.imagem) {
      const path = decodeURIComponent(usuario.imagem.split("/usuarios/")[1]);
      await supabase.storage.from("usuarios").remove([path]);
    }

    return prisma.usuario.update({
      where: { id },
      data: { imagem: imageUrl },
      select: usuarioSelect,
    });
  }
}

export default new CreateUsuarioModel();