// src/useCase/servico/create/CreateServicoModel.ts
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
  criadoEm: true,
  disponivel: true,
};

class CreateServicoModel {
  async createServicoModel(
    nomeNegocio: string,
    descricao: string,
    preco: { nomeservico: string; precificacao: number }[],
    categoriaId: number,
    usuarioId: number,
    localizacao?: { numero: string; bairro: string; cidade: string; estado: string }
  ) {
    return prisma.servico.create({
      data: {
        nomeNegocio,
        descricao,
        categoria: { connect: { id: categoriaId } },
        usuario: { connect: { id: usuarioId } },
        localizacao: localizacao ? { create: { ...localizacao } } : undefined,
        preco: preco.length
          ? { create: preco.map((p) => ({ nomeservico: p.nomeservico, precificacao: p.precificacao })) }
          : undefined,
      },
      include: {
        localizacao: true,
        preco: true,
        categoria: true,
        usuario: { select: usuarioSelect },
        portfolio: true,
      },
    });
  }

  async getAllServicoModel(
    filtroCidade?: string,
    filtroCategoria?: number,
    filtroNomeCategoria?: string,
    filtroSegmento?: number,
    filtroNomeProfissional?: string,
    filtroNomeNegocio?: string,
    filtroDisponivel?: boolean
  ) {
    return prisma.servico.findMany({
      where: {
        ...(filtroCidade ? { localizacao: { cidade: { contains: filtroCidade, mode: "insensitive" } } } : {}),
        ...(filtroCategoria ? { categoriaId: filtroCategoria } : {}),
        ...(filtroNomeCategoria ? { categoria: { nomeServico: { contains: filtroNomeCategoria, mode: "insensitive" } } } : {}),
        ...(filtroSegmento ? { categoria: { segmentoId: filtroSegmento } } : {}),
        ...(filtroNomeProfissional ? { usuario: { nome: { contains: filtroNomeProfissional, mode: "insensitive" } } } : {}),
        ...(filtroNomeNegocio ? { nomeNegocio: { contains: filtroNomeNegocio, mode: "insensitive" } } : {}),
        ...(filtroDisponivel !== undefined ? { usuario: { disponivel: filtroDisponivel } } : {}),
      },
      include: {
        usuario: { select: usuarioSelect },
        categoria: true,
        localizacao: true,
        preco: true,
        avaliacao: true,
        portfolio: true,
      },
    });
  }

  async findServicoById(id: number) {
    return prisma.servico.findUnique({
      where: { id },
      include: {
        usuario: { select: usuarioSelect },
        categoria: true,
        localizacao: true,
        preco: true,
        avaliacao: true,
        portfolio: true,
      },
    });
  }

  async getServicosByUsuarioId(usuarioId: number) {
    return prisma.servico.findMany({
      where: { usuarioId },
      include: {
        categoria: true,
        preco: true,
        avaliacao: true,
        localizacao: true,
        portfolio: true,
      },
    });
  }

  async updateServico(id: number, usuarioId: number, data: any) {
    const servico = await prisma.servico.findUnique({ where: { id } });

    if (!servico) {
      throw new Error("Serviço não encontrado.");
    }
    if (servico.usuarioId !== usuarioId) {
      throw new Error("Este serviço não pertence a você.");
    }

    return prisma.servico.update({
      where: { id },
      data,
    });
  }

  async toggleDisponivel(id: number, usuarioId: number, disponivel: boolean) {
    const servico = await prisma.servico.findUnique({ where: { id } });

    if (!servico) {
      throw new Error("Serviço não encontrado.");
    }
    if (servico.usuarioId !== usuarioId) {
      throw new Error("Este serviço não pertence a você.");
    }

    return prisma.servico.update({
      where: { id },
      data: { disponivel },
    });
  }

  async deleteServico(id: number, usuarioId: number) {
    const servico = await prisma.servico.findUnique({ where: { id } });

    if (!servico) {
      throw new Error("Serviço não encontrado.");
    }
    if (servico.usuarioId !== usuarioId) {
      throw new Error("Este serviço não pertence a você.");
    }

    return prisma.$transaction([
      prisma.preco.deleteMany({ where: { servicoId: id } }),
      prisma.avaliacao.deleteMany({ where: { servicoId: id } }),
      prisma.portfolio.deleteMany({ where: { servicoId: id } }),
      prisma.servico.delete({ where: { id } }),
    ]);
  }

  async uploadImagemServico(id: number, usuarioId: number, imageUrl: string) {
  const servico = await prisma.servico.findUnique({ where: { id } });

  if (!servico) throw new Error("Serviço não encontrado.");
  if (servico.usuarioId !== usuarioId) throw new Error("Este serviço não pertence a você.");

  // Se já tinha imagem, deleta do storage antes
  if (servico.imagem) {
  const path = decodeURIComponent(servico.imagem.split("/servicos/")[1]);
  console.log("Path para deletar:", path);
  const { error } = await supabase.storage.from("servicos").remove([path]);
  if (error) console.error("Erro ao deletar imagem antiga:", error);
}

  return prisma.servico.update({
    where: { id },
    data: { imagem: imageUrl },
    include: {
      usuario: { select: usuarioSelect },
      categoria: true,
      localizacao: true,
      preco: true,
      avaliacao: true,
      portfolio: true,
      },
    });
  }
}

export default new CreateServicoModel();