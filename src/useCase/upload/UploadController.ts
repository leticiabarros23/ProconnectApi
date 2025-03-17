import { Request, Response } from "express";
import supabase from "../../lib/supabase"; 
import { prisma } from "../../lib/prisma"; // Importa o Prisma

class UploadController {
  async uploadImage(req: Request, res: Response) {
    try {
      const { servicoId } = req.body; // ID do serviço que vai receber a imagem

      if (!req.file) {
        return res.status(400).json({ error: "Nenhuma imagem enviada." });
      }

      // Captura a imagem enviada
      const imageBuffer = req.file.buffer;
      const imageName = req.file.originalname;
      const filePath = `servicos/${servicoId}-${Date.now()}-${imageName}`;

      // Faz o upload para o Supabase Storage
      const { data, error } = await supabase.storage
        .from(process.env.SUPABASE_BUCKET_NAME!)
        .upload(filePath, imageBuffer, { contentType: req.file.mimetype });

      if (error) {
        throw error;
      }

      // Obtém a URL pública da imagem
      const imageUrl = supabase.storage.from(process.env.SUPABASE_BUCKET_NAME!).getPublicUrl(filePath).data.publicUrl;

      // Atualiza o serviço no banco de dados com a URL da imagem
      const servicoAtualizado = await prisma.servico.update({
        where: { id: Number(servicoId) },
        data: { negUrl: imageUrl },
      });

      return res.status(201).json({ message: "Upload realizado com sucesso!", servico: servicoAtualizado });
    } catch (error) {
      console.error("Erro ao fazer upload:", error);
      return res.status(500).json({ error: "Erro ao enviar a imagem." });
    }
  }
}

export default new UploadController();
