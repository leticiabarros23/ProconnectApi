import prisma from "../../../lib/prisma";
import { supabase } from "../../../lib/supabase";

class PortfolioModel {
  async uploadFoto(
    usuarioId: number,
    servicoId: number,
    arquivo: Buffer,
    nomeArquivo: string,
    mimeType: string
  ) {
    // Verifica o limite de 6 fotos por serviço
    const totalFotos = await prisma.portfolio.count({
      where: { servicoId, usuarioId },
    });

    if (totalFotos >= 6) {
      throw new Error("Limite de 6 fotos por portfólio atingido.");
    }

    // Upload para o Supabase Storage
    const { data, error } = await supabase.storage
      .from("portfolio")
      .upload(`${usuarioId}/${servicoId}/${nomeArquivo}`, arquivo, {
        contentType: mimeType,
        upsert: false,
      });

    if (error) throw new Error(`Erro ao fazer upload: ${error.message}`);

    // Pega a URL pública da imagem
    const { data: urlData } = supabase.storage
      .from("portfolio")
      .getPublicUrl(data.path);

    // Salva a URL no banco
    return prisma.portfolio.create({
      data: {
        url: urlData.publicUrl,
        servicoId,
        usuarioId,
      },
    });
  }

  async listarFotos(servicoId: number) {
    return prisma.portfolio.findMany({
      where: { servicoId },
      orderBy: { criadoEm: "desc" },
    });
  }

  async deletarFoto(id: number, usuarioId: number) {
    const foto = await prisma.portfolio.findUnique({ where: { id } });

    if (!foto) throw new Error("Foto não encontrada.");
    if (foto.usuarioId !== usuarioId) throw new Error("Esta foto não pertence a você.");

    // Extrai e decodifica o caminho da imagem da URL
    const path = decodeURIComponent(foto.url.split("/portfolio/")[1]);

    console.log("Path para deletar:", path);

    // Deleta do Supabase Storage
    const { error } = await supabase.storage.from("portfolio").remove([path]);

    if (error) console.error("Erro ao deletar do Storage:", error);

    // Deleta do banco
    return prisma.portfolio.delete({ where: { id } });
  }
}

export default new PortfolioModel();