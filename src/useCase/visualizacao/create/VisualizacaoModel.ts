import prisma from "../../../lib/prisma";

class VisualizacaoModel {
  async registrar(servicoId: number) {
    const servico = await prisma.servico.findUnique({
      where: { id: servicoId }
    })

    if (!servico) return null

    return prisma.visualizacaoServico.create({
      data: { servicoId }
    })
  }
}

export default new VisualizacaoModel()