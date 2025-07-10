import { Request, Response } from "express";
import CreatePrecoModel from "./CreatePrecoModel";
import CreateServicoModel from "../../servico/create/CreateServicoModel";

class CreatePrecoController {
  async getAllPreco(req: Request, res: Response) {
    try {
      const precos = await CreatePrecoModel.getAllPrecoModel();
      if (!precos.length) {
        return res.status(404).json({
          error: true,
          message: "Nenhum preço encontrado.",
        });
      }
      return res.status(200).json(precos);
    } catch (error) {
      console.error("Erro ao buscar todos os preços:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao buscar os preços. Tente novamente mais tarde.",
      });
    }
  }

  async createPreco(req: Request, res: Response) {
    const { nomeservico, precificacao, servicoId } = req.body;
    const usuarioId = req.user!.id;

    const serv = await CreateServicoModel.findServicoById(servicoId);
    if (!serv) {
      return res.status(404).json({ error: true, message: "Serviço não encontrado." });
    }
    if (serv.usuarioId !== usuarioId) {
      return res.status(403).json({
        error: true,
        message: "Você não tem permissão para adicionar preço a este serviço.",
      });
    }

    try {
      const preco = await CreatePrecoModel.createPrecoModel(
        nomeservico,
        precificacao,
        servicoId
      );
      return res.status(201).json(preco);
    } catch (error) {
      console.error("Erro ao criar o preco:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao criar o preco. Verifique os dados enviados.",
      });
    }
  }

  async updatePreco(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { nomeservico, precificacao } = req.body;
    const usuarioId = req.user!.id;

    const existing = await CreatePrecoModel.findPrecoById(id);
    if (!existing) {
      return res.status(404).json({ error: true, message: "Preço não encontrado." });
    }
    const serv = await CreateServicoModel.findServicoById(existing.servicoId);
    if (!serv || serv.usuarioId !== usuarioId) {
      return res.status(403).json({ error: true, message: "Permissão negada." });
    }

    try {
      const updated = await CreatePrecoModel.updatePrecoModel(id, {
        nomeservico,
        precificacao,
      });
      return res.status(200).json(updated);
    } catch (error) {
      console.error("Erro ao atualizar o preco:", error);
      return res.status(500).json({
        error: true,
        message: "Erro ao atualizar o preco. Verifique os dados enviados.",
      });
    }
  }

  async deletePreco(req: Request, res: Response) {
    const id = Number(req.params.id);
    const usuarioId = req.user!.id;

    const existing = await CreatePrecoModel.findPrecoById(id);
    if (!existing) {
      return res.status(404).json({ error: true, message: "Preço não encontrado." });
    }
    const serv = await CreateServicoModel.findServicoById(existing.servicoId);
    if (!serv || serv.usuarioId !== usuarioId) {
      return res.status(403).json({ error: true, message: "Permissão negada." });
    }

    try {
      await CreatePrecoModel.deletePrecoModel(id);
      return res.status(200).json({ message: "Preço deletado com sucesso." });
    } catch (error) {
      console.error("Erro ao deletar o preco:", error);
      return res.status(500).json({ error: true, message: "Erro ao deletar o preco." });
    }
  }
}

export default new CreatePrecoController();
