import { Request, Response } from "express";
import PortfolioModel from "./PortfolioModel";
import multer from "multer";

// Multer em memória para pegar o buffer do arquivo
export const upload = multer({ storage: multer.memoryStorage() });

class PortfolioController {
  async uploadFoto(req: Request, res: Response) {
    try {
      const usuarioId = req.user?.id;
      const { servicoId } = req.body;

      if (!usuarioId) {
        return res.status(401).json({ error: true, message: "Não autenticado." });
      }

      if (!req.file) {
        return res.status(400).json({ error: true, message: "Nenhuma imagem enviada." });
      }

      if (!servicoId) {
        return res.status(400).json({ error: true, message: "servicoId é obrigatório." });
      }

      const nomeArquivo = `${Date.now()}-${req.file.originalname}`;

      const foto = await PortfolioModel.uploadFoto(
        usuarioId,
        Number(servicoId),
        req.file.buffer,
        nomeArquivo,
        req.file.mimetype
      );

      return res.status(201).json(foto);
    } catch (error: any) {
      console.error("Erro ao fazer upload:", error);
      return res.status(500).json({ error: true, message: error.message });
    }
  }

  async listarFotos(req: Request, res: Response) {
    try {
      const { servicoId } = req.params;
      const fotos = await PortfolioModel.listarFotos(Number(servicoId));
      return res.status(200).json(fotos);
    } catch (error) {
      console.error("Erro ao listar fotos:", error);
      return res.status(500).json({ error: true, message: "Erro ao listar fotos." });
    }
  }

  async deletarFoto(req: Request, res: Response) {
    try {
      const usuarioId = req.user?.id;
      const { id } = req.params;

      if (!usuarioId) {
        return res.status(401).json({ error: true, message: "Não autenticado." });
      }

      await PortfolioModel.deletarFoto(Number(id), usuarioId);
      return res.status(204).send();
    } catch (error: any) {
      if (error.message.includes("encontrada") || error.message.includes("pertence")) {
        return res.status(404).json({ error: true, message: error.message });
      }
      console.error("Erro ao deletar foto:", error);
      return res.status(500).json({ error: true, message: "Erro ao deletar foto." });
    }
  }
}

export default new PortfolioController();