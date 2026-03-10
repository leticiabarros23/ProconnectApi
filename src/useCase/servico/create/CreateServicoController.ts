// src/useCase/servico/create/CreateServicoController.ts
import { Request, Response } from "express";
import CreateServicoModel from "./CreateServicoModel";
import CreateUsuarioModel from "../../usuario/create/CreateUsuarioModel";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import prisma from "../../../lib/prisma";

class CreateServicoController {
  static async getAllServico(req: Request, res: Response) {
  const filtroCidade = typeof req.query.cidade === "string" ? req.query.cidade : undefined;
  const filtroCategoria = req.query.categoriaId ? Number(req.query.categoriaId) : undefined;
  const filtroNomeCategoria = typeof req.query.categoria === "string" ? req.query.categoria : undefined;
  const filtroSegmento = req.query.segmentoId ? Number(req.query.segmentoId) : undefined;

  try {
    const servicos = await CreateServicoModel.getAllServicoModel(filtroCidade, filtroCategoria, filtroNomeCategoria, filtroSegmento);
    if (!servicos.length) {
      return res.status(404).json({ error: true, message: "Nenhum serviço encontrado." });
    }
    return res.status(200).json(servicos);
  } catch (err) {
    console.error("Erro ao buscar serviços:", err);
    return res.status(500).json({ error: true, message: "Erro ao buscar serviços." });
  }
}

  static async createServico(req: Request, res: Response) {
    if (!req.user || !("id" in req.user)) {
      return res.status(401).json({ error: true, message: "Não autenticado." });
    }

    const { nomeNegocio, descricao, preco, categoriaId } = req.body;
    const usuarioId = Number((req.user as any).id);

    if (!nomeNegocio || typeof nomeNegocio !== "string") {
      return res.status(400).json({ error: true, message: "nomeNegocio inválido." });
    }
    if (!descricao || typeof descricao !== "string") {
      return res.status(400).json({ error: true, message: "descricao inválida." });
    }
    if (!Array.isArray(preco) || preco.some((p: any) => !p?.nomeservico || typeof p?.precificacao !== "number")) {
      return res.status(400).json({ error: true, message: "preco inválido (use {nomeservico, precificacao:number})." });
    }
    const catId = Number(categoriaId);
    if (!catId || Number.isNaN(catId)) {
      return res.status(400).json({ error: true, message: "categoriaId inválido." });
    }

    try {
      const [usuario, categoria] = await Promise.all([
        CreateUsuarioModel.getUsuarioModel(usuarioId),
        prisma.categoria.findUnique({ where: { id: catId } }),
      ]);
      if (!usuario) return res.status(404).json({ error: true, message: "Usuário não encontrado." });
      if (!categoria) return res.status(400).json({ error: true, message: "Categoria inválida." });

      const localizacaoPayload =
        usuario?.cidade && usuario?.estado
          ? { numero: usuario.endereco ?? "", bairro: "", cidade: usuario.cidade, estado: usuario.estado }
          : undefined;

      const serv = await CreateServicoModel.createServicoModel(
        nomeNegocio.trim(),
        descricao.trim(),
        (preco as any[]).map((p) => ({
          nomeservico: String(p.nomeservico).trim(),
          precificacao: Number(p.precificacao) || 0,
        })),
        catId,
        usuarioId,
        localizacaoPayload
      );

      return res.status(201).json(serv);
    } catch (err: any) {
      console.error("Erro ao criar serviço:", err);

      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          return res.status(400).json({ error: true, message: "Registro relacionado não encontrado (categoria/usuário)." });
        }
        if (err.code === "P2003") {
          return res.status(400).json({ error: true, message: "Violação de chave estrangeira (categoriaId/usuarioId)." });
        }
        if (err.code === "P2000") {
          return res.status(400).json({ error: true, message: "Um campo excedeu o tamanho permitido." });
        }
      }

      return res.status(500).json({ error: true, message: "Erro ao criar serviço." });
    }
  }

  static async getServicoById(req: Request, res: Response) {
    const n = Number(req.params.id);
    if (!n || Number.isNaN(n)) return res.status(400).json({ message: "ID inválido." });

    const servico = await CreateServicoModel.findServicoById(n);
    if (!servico) return res.status(404).json({ message: "Serviço não encontrado." });
    return res.json(servico);
  }

  static async updateServico(req: Request, res: Response) {
    const { id } = req.params;
    const servicoData = req.body;
    const usuarioId = req.user!.id;

    try {
      const servico = await CreateServicoModel.updateServico(Number(id), usuarioId, servicoData);
      return res.status(200).json(servico);
    } catch (err: any) {
      if (err.message.includes("encontrado") || err.message.includes("pertence")) {
        return res.status(404).json({ error: true, message: err.message });
      }
      console.error("Erro ao atualizar serviço:", err);
      return res.status(500).json({ error: true, message: "Erro interno do servidor." });
    }
  }

  static async deleteServico(req: Request, res: Response) {
    const { id } = req.params;
    const usuarioId = req.user!.id;

    try {
      await CreateServicoModel.deleteServico(Number(id), usuarioId);
      return res.status(204).send();
    } catch (err: any) {
      if (err.message.includes("encontrado") || err.message.includes("pertence")) {
        return res.status(404).json({ error: true, message: err.message });
      }
      console.error("Erro ao deletar serviço:", err);
      return res.status(500).json({ error: true, message: "Erro interno do servidor." });
    }
  }

  static async getServicosByUsuario(req: Request, res: Response) {
    const usuarioId = req.user!.id;

    try {
      const servicos = await CreateServicoModel.getServicosByUsuarioId(usuarioId);
      if (!servicos.length) {
        return res.status(200).json([]);
      }
      return res.status(200).json(servicos);
    } catch (err) {
      console.error("Erro ao buscar serviços do usuário:", err);
      return res.status(500).json({ error: true, message: "Erro ao buscar serviços." });
    }
  }
}

export default CreateServicoController;