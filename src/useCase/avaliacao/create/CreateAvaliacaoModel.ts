import prisma from "../../../lib/prisma"; // ✅ correto

class CreateAvaliacaoModel {
  // Criar avaliação
  async createAvaliacaoModel(
    star: number,
    descricao: string,
    servicoId: number,
    usuarioId: number
  ) {
    const avaliacao = await prisma.avaliacao.create({
      data: {
        star,
        descricao,
        servicoId,
        usuarioId,
      },
      include: {
        usuario: true,
        servico: true,
      },
    });

    return avaliacao;
  }

  // Buscar todas as avaliações de um serviço
  async getAvaliacoesModel(servicoId: number) {
    const avaliacoes = await prisma.avaliacao.findMany({
      where: { servicoId },
      include: {
        usuario: { select: { id: true, nome: true } },
      },
      orderBy: { criadoEm: "desc" },
    });

    return avaliacoes;
  }

  // Calcular média de estrelas de um serviço
  async getMediaEstrelas(servicoId: number) {
    const media = await prisma.avaliacao.aggregate({
      where: { servicoId },
      _avg: { star: true },
    });

    return media._avg.star || 0;
  }

  // Verificar se o usuário realmente realizou o serviço
  async verificarServicoRealizado(usuarioId: number, servicoId: number) {
    const servico = await prisma.servicoRealizado.findFirst({
      where: { usuarioId, servicoId },
    });

    return !!servico;
  }

  // Verificar se o usuário já avaliou o serviço
  async verificarAvaliacaoExistente(usuarioId: number, servicoId: number) {
  const avaliacao = await prisma.avaliacao.findFirst({
    where: { usuarioId, servicoId },
  });
  return !!avaliacao;
  }

  // Contar avaliações por estrela
  async getContagemEstrelas(servicoId: number) {
  const contagem = await prisma.avaliacao.groupBy({
    by: ["star"],
    where: { servicoId },
    _count: { star: true },
    orderBy: { star: "desc" },
  });

  // Garante que todas as estrelas aparecem mesmo sem avaliação
  const resultado: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  contagem.forEach((item) => {
    resultado[item.star] = item._count.star;
  });

  return resultado;
  }
}

export default new CreateAvaliacaoModel();
