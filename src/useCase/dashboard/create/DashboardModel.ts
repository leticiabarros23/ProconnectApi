import prisma from "../../../lib/prisma";

class DashboardModel {
  private getPeriodo(periodo: string): Date {
    const agora = new Date()
    switch (periodo) {
      case "hoje":
        return new Date(agora.setHours(0, 0, 0, 0))
      case "semana":
        const semana = new Date()
        semana.setDate(semana.getDate() - 7)
        return semana
      case "mes":
        const mes = new Date()
        mes.setMonth(mes.getMonth() - 1)
        return mes
      case "ano":
        const ano = new Date()
        ano.setFullYear(ano.getFullYear() - 1)
        return ano
      default:
        const padrao = new Date()
        padrao.setMonth(padrao.getMonth() - 1)
        return padrao
    }
  }

  private getPeriodoAnterior(periodo: string): { inicio: Date; fim: Date } {
    const agora = new Date()
    switch (periodo) {
      case "hoje":
        const ontemFim = new Date(agora.setHours(0, 0, 0, 0))
        const ontemInicio = new Date(ontemFim)
        ontemInicio.setDate(ontemInicio.getDate() - 1)
        return { inicio: ontemInicio, fim: ontemFim }
      case "semana":
        const semanaFim = new Date()
        semanaFim.setDate(semanaFim.getDate() - 7)
        const semanaInicio = new Date(semanaFim)
        semanaInicio.setDate(semanaInicio.getDate() - 7)
        return { inicio: semanaInicio, fim: semanaFim }
      case "mes":
        const mesFim = new Date()
        mesFim.setMonth(mesFim.getMonth() - 1)
        const mesInicio = new Date(mesFim)
        mesInicio.setMonth(mesInicio.getMonth() - 1)
        return { inicio: mesInicio, fim: mesFim }
      case "ano":
        const anoFim = new Date()
        anoFim.setFullYear(anoFim.getFullYear() - 1)
        const anoInicio = new Date(anoFim)
        anoInicio.setFullYear(anoInicio.getFullYear() - 1)
        return { inicio: anoInicio, fim: anoFim }
      default:
        const padFim = new Date()
        padFim.setMonth(padFim.getMonth() - 1)
        const padInicio = new Date(padFim)
        padInicio.setMonth(padInicio.getMonth() - 1)
        return { inicio: padInicio, fim: padFim }
    }
  }

  private calcularVariacao(atual: number, anterior: number): number {
    if (anterior === 0) return atual > 0 ? 100 : 0
    return Math.round(((atual - anterior) / anterior) * 100)
  }

  private async getServicoIds(usuarioId: number): Promise<number[]> {
    const servicos = await prisma.servico.findMany({
      where: { usuarioId },
      select: { id: true }
    })
    return servicos.map(s => s.id)
  }

  async verificarAcesso(usuarioId: number) {
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId },
      select: { plano: true }
    })

    if (!usuario) {
      return { existe: false, isPremium: false, isProfissional: false }
    }

    const totalServicos = await prisma.servico.count({
      where: { usuarioId }
    })

    return {
      existe: true,
      isPremium: usuario.plano === "premium",
      isProfissional: totalServicos > 0
    }
  }

  async totalCliquesWhatsapp(usuarioId: number, periodo: string) {
    const desde = this.getPeriodo(periodo)
    const anterior = this.getPeriodoAnterior(periodo)
    const servicoIds = await this.getServicoIds(usuarioId)

    const [atual, anteriores] = await Promise.all([
      prisma.contatoWhatsapp.count({
        where: { servicoId: { in: servicoIds }, clicadoEm: { gte: desde } }
      }),
      prisma.contatoWhatsapp.count({
        where: { servicoId: { in: servicoIds }, clicadoEm: { gte: anterior.inicio, lt: anterior.fim } }
      })
    ])

    return { atual, variacao: this.calcularVariacao(atual, anteriores) }
  }

  async totalFavoritos(usuarioId: number, periodo: string) {
    const desde = this.getPeriodo(periodo)
    const anterior = this.getPeriodoAnterior(periodo)
    const servicoIds = await this.getServicoIds(usuarioId)

    const [atual, anteriores] = await Promise.all([
      prisma.favorito.count({
        where: { servicoId: { in: servicoIds }, criadoEm: { gte: desde } }
      }),
      prisma.favorito.count({
        where: { servicoId: { in: servicoIds }, criadoEm: { gte: anterior.inicio, lt: anterior.fim } }
      })
    ])

    return { atual, variacao: this.calcularVariacao(atual, anteriores) }
  }

  async metricsAvaliacao(usuarioId: number, periodo: string) {
    const desde = this.getPeriodo(periodo)
    const anterior = this.getPeriodoAnterior(periodo)
    const servicoIds = await this.getServicoIds(usuarioId)

    const [media, total, totalAnterior] = await Promise.all([
      prisma.avaliacao.aggregate({
        where: { servicoId: { in: servicoIds }, criadoEm: { gte: desde } },
        _avg: { star: true }
      }),
      prisma.avaliacao.count({
        where: { servicoId: { in: servicoIds }, criadoEm: { gte: desde } }
      }),
      prisma.avaliacao.count({
        where: { servicoId: { in: servicoIds }, criadoEm: { gte: anterior.inicio, lt: anterior.fim } }
      })
    ])

    return {
      media: media._avg.star ?? 0,
      total,
      variacao: this.calcularVariacao(total, totalAnterior)
    }
  }

  async totalServicosRealizados(usuarioId: number, periodo: string) {
    const desde = this.getPeriodo(periodo)
    const anterior = this.getPeriodoAnterior(periodo)
    const servicoIds = await this.getServicoIds(usuarioId)

    const [atual, anteriores] = await Promise.all([
      prisma.servicoRealizado.count({
        where: { servicoId: { in: servicoIds }, realizadoEm: { gte: desde } }
      }),
      prisma.servicoRealizado.count({
        where: { servicoId: { in: servicoIds }, realizadoEm: { gte: anterior.inicio, lt: anterior.fim } }
      })
    ])

    return { atual, variacao: this.calcularVariacao(atual, anteriores) }
  }

  async totalVisualizacoes(usuarioId: number, periodo: string) {
    const desde = this.getPeriodo(periodo)
    const anterior = this.getPeriodoAnterior(periodo)
    const servicoIds = await this.getServicoIds(usuarioId)

    const [atual, anteriores] = await Promise.all([
      prisma.visualizacaoServico.count({
        where: { servicoId: { in: servicoIds }, criadoEm: { gte: desde } }
      }),
      prisma.visualizacaoServico.count({
        where: { servicoId: { in: servicoIds }, criadoEm: { gte: anterior.inicio, lt: anterior.fim } }
      })
    ])

    return { atual, variacao: this.calcularVariacao(atual, anteriores) }
  }

  async servicosMaisFavoritados(usuarioId: number, periodo: string) {
    const desde = this.getPeriodo(periodo)
    const servicoIds = await this.getServicoIds(usuarioId)

    const favoritos = await prisma.favorito.groupBy({
      by: ["servicoId"],
      where: { servicoId: { in: servicoIds }, criadoEm: { gte: desde } },
      _count: { servicoId: true },
      orderBy: { _count: { servicoId: "desc" } },
      take: 5
    })

    const servicosDetalhes = await prisma.servico.findMany({
      where: { id: { in: favoritos.map(f => f.servicoId) } },
      select: { id: true, nomeNegocio: true, imagem: true }
    })

    return favoritos.map(f => {
      const servico = servicosDetalhes.find(s => s.id === f.servicoId)
      return {
        servicoId: f.servicoId,
        nomeNegocio: servico?.nomeNegocio ?? "",
        imagem: servico?.imagem ?? null,
        totalFavoritos: f._count.servicoId
      }
    })
  }

  async rankingProfissional(usuarioId: number) {
    const todosProfissionais = await prisma.servico.groupBy({
      by: ["usuarioId"],
      _count: { id: true }
    })

    const ids = todosProfissionais.map(p => p.usuarioId)

    const medias = await Promise.all(
      ids.map(async (id) => {
        const servicoIds = await this.getServicoIds(id)
        const media = await prisma.avaliacao.aggregate({
          where: { servicoId: { in: servicoIds } },
          _avg: { star: true }
        })
        return { usuarioId: id, media: media._avg.star ?? 0 }
      })
    )

    const ranking = medias.sort((a, b) => b.media - a.media)
    const posicao = ranking.findIndex(r => r.usuarioId === usuarioId) + 1

    return {
      posicao,
      total: ranking.length,
      percentil: Math.round(((ranking.length - posicao) / ranking.length) * 100)
    }
  }

  async gerarInsights(usuarioId: number) {
    const insights: string[] = []

    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId },
      include: {
        servicos: {
          include: {
            portfolio: true,
            avaliacao: true,
          }
        }
      }
    })

    if (!usuario) return insights

    if (!usuario.imagem) {
      insights.push("Complete seu perfil adicionando uma foto. Perfis completos transmitem mais confiança!")
    }

    for (const servico of usuario.servicos) {
      if (servico.portfolio.length === 0) {
        insights.push(`Adicione fotos ao serviço "${servico.nomeNegocio}" para atrair mais clientes.`)
      }

      if (!servico.imagem) {
        insights.push(`O serviço "${servico.nomeNegocio}" está sem imagem de capa.`)
      }

      const mediaServico = servico.avaliacao.length > 0
        ? servico.avaliacao.reduce((acc, a) => acc + a.star, 0) / servico.avaliacao.length
        : null

      if (mediaServico !== null && mediaServico < 4) {
        insights.push(`Sua avaliação no serviço "${servico.nomeNegocio}" está abaixo de 4 estrelas. Foque na qualidade do atendimento.`)
      }
    }

    return insights
  }
}

export default new DashboardModel()