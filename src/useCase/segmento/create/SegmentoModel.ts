import prisma from "../../../lib/prisma";

class SegmentoModel {
  async createSegmento(nome: string, icone?: string) {
    return prisma.segmento.create({
      data: { nome, icone },
    });
  }

  async getAllSegmentos() {
    return prisma.segmento.findMany({
      include: {
        categorias: true,
      },
      orderBy: { nome: "asc" },
    });
  }

  async getSegmentoById(id: number) {
    return prisma.segmento.findUnique({
      where: { id },
      include: { categorias: true },
    });
  }

  async vincularCategoria(segmentoId: number, categoriaId: number) {
    return prisma.categoria.update({
      where: { id: categoriaId },
      data: { segmentoId },
    });
  }

  async deleteSegmento(id: number) {
    return prisma.segmento.delete({ where: { id } });
  }
}

export default new SegmentoModel();