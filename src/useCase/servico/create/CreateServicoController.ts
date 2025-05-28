import { Request, Response } from "express";
import CreateServicoModel from "./CreateServicoModel";
import CreateUsuarioModel from "../../usuario/create/CreateUsuarioModel";

class CreateServicoController {
  async getAllServico(req: Request, res: Response) {
    const filtroCidade = typeof req.query.cidade === "string"
      ? req.query.cidade
      : undefined;

    try {
      const servicos = await CreateServicoModel.getAllServicoModel(filtroCidade);
      if (servicos.length === 0) {
        return res.status(404).json({ error: true, message: "Nenhum serviço encontrado." });
      }
      return res.status(200).json(servicos);
    } catch (err) {
      console.error("Erro ao buscar serviços:", err);
      return res.status(500).json({ error: true, message: "Erro ao buscar serviços." });
    }
  }

  async createServico(req: Request, res: Response) {
    const { nomeNegocio, descricao, preco, categoriaId } = req.body;
    const usuarioId = req.user!.id;

    const usuario = await CreateUsuarioModel.getUsuarioModel(usuarioId);
    if (!usuario) {
      return res
        .status(404)
        .json({ error: true, message: "Usuário não encontrado." });
    }

    const localizacaoPayload = {
      numero: usuario.endereco,
      bairro: "",
      cidade: usuario.cidade,
      estado: usuario.estado,
    };

    try {
      const serv = await CreateServicoModel.createServicoModel(
        nomeNegocio,
        descricao,
        preco,
        categoriaId,
        usuarioId,
        localizacaoPayload
      );
      return res.status(201).json(serv);
    } catch (err: any) {
      console.error("Erro ao criar serviço:", err);
      return res
        .status(500)
        .json({ error: true, message: "Erro ao criar serviço." });
    }
  }

  async updateServico(req: Request, res: Response) {
    const id = Number(req.params.id);
    const usuarioId = req.user!.id;
    const { nomeNegocio, preco, avaliacao, descricao, categoriaId } = req.body;

    const serv = await CreateServicoModel.findServicoById(id);
    if (!serv) {
      return res.status(404).json({ error: true, message: "Serviço não encontrado." });
    }
    if (serv.usuarioId !== usuarioId) {
      return res.status(403).json({ error: true, message: "Permissão negada." });
    }

    try {
      const updated = await CreateServicoModel.updateServicoModel(
        id, nomeNegocio, preco, avaliacao, descricao, categoriaId
      );
      return res.status(200).json(updated);
    } catch (err) {
      console.error("Erro ao atualizar serviço:", err);
      return res.status(500).json({ error: true, message: "Erro ao atualizar serviço." });
    }
  }

  async deleteServico(req: Request, res: Response) {
    const id = Number(req.params.id);
    const usuarioId = req.user!.id;

    const serv = await CreateServicoModel.findServicoById(id);
    if (!serv) {
      return res.status(404).json({ error: true, message: "Serviço não encontrado." });
    }
    if (serv.usuarioId !== usuarioId) {
      return res.status(403).json({ error: true, message: "Permissão negada." });
    }

    try {
      await CreateServicoModel.deleteServicoModel(id);
      return res.status(200).json({ message: "Serviço deletado com sucesso." });
    } catch (err) {
      console.error("Erro ao deletar serviço:", err);
      return res.status(500).json({ error: true, message: "Erro ao deletar serviço." });
    }
  }
}

export default new CreateServicoController();
