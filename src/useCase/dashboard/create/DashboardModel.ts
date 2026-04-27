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
    const servicos = await prisma.servico.findMany({
      where: { usuarioId },
      select: { id: true }
    })
    const servicoIds = servicos.map(s => s.id)

    return prisma.contatoWhatsapp.count({
      where: {
        servicoId: { in: servicoIds },
        clicadoEm: { gte: desde }
      }
    })
  }

  async totalFavoritos(usuarioId: number, periodo: string) {
    const desde = this.getPeriodo(periodo)
    const servicos = await prisma.servico.findMany({
      where: { usuarioId },
      select: { id: true }
    })
    const servicoIds = servicos.map(s => s.id)

    return prisma.favorito.count({
      where: {
        servicoId: { in: servicoIds },
        criadoEm: { gte: desde }
      }
    })
  }

  async metricsAvaliacao(usuarioId: number, periodo: string) {
    const desde = this.getPeriodo(periodo)
    const servicos = await prisma.servico.findMany({
      where: { usuarioId },
      select: { id: true }
    })
    const servicoIds = servicos.map(s => s.id)

    const [media, total] = await Promise.all([
      prisma.avaliacao.aggregate({
        where: {
          servicoId: { in: servicoIds },
          criadoEm: { gte: desde }
        },
        _avg: { star: true }
      }),
      prisma.avaliacao.count({
        where: {
          servicoId: { in: servicoIds },
          criadoEm: { gte: desde }
        }
      })
    ])

    return {
      media: media._avg.star ?? 0,
      total
    }
  }

  async totalServicosRealizados(usuarioId: number, periodo: string) {
    const desde = this.getPeriodo(periodo)
    const servicos = await prisma.servico.findMany({
      where: { usuarioId },
      select: { id: true }
    })
    const servicoIds = servicos.map(s => s.id)

    return prisma.servicoRealizado.count({
      where: {
        servicoId: { in: servicoIds },
        realizadoEm: { gte: desde }
      }
    })
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