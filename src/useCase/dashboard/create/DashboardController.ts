import { Request, Response } from "express";
import DashboardModel from "./DashboardModel";

class DashboardController {
  async handle(req: Request, res: Response) {
    if (!req.user) {
      return res.status(401).json({ error: "Não autorizado." })
    }

    const usuarioId = req.user.id
    const periodo = (req.query.periodo as string) ?? "mes"

    if (!["hoje", "semana", "mes", "ano"].includes(periodo)) {
      return res.status(400).json({ error: "Período inválido. Use: hoje, semana, mes ou ano." })
    }

    const verificacao = await DashboardModel.verificarAcesso(usuarioId)

    if (!verificacao.existe) {
      return res.status(404).json({ error: "Usuário não encontrado." })
    }

    if (!verificacao.isPremium) {
      return res.status(403).json({ error: "O dashboard é exclusivo para profissionais Premium." })
    }

    if (!verificacao.isProfissional) {
      return res.status(403).json({ error: "Apenas profissionais podem acessar o dashboard." })
    }

    const [
      cliquesWhatsapp,
      favoritos,
      avaliacoes,
      servicosRealizados,
      visualizacoes,
      servicosMaisFavoritados,
      ranking,
      insights
    ] = await Promise.all([
      DashboardModel.totalCliquesWhatsapp(usuarioId, periodo),
      DashboardModel.totalFavoritos(usuarioId, periodo),
      DashboardModel.metricsAvaliacao(usuarioId, periodo),
      DashboardModel.totalServicosRealizados(usuarioId, periodo),
      DashboardModel.totalVisualizacoes(usuarioId, periodo),
      DashboardModel.servicosMaisFavoritados(usuarioId, periodo),
      DashboardModel.rankingProfissional(usuarioId),
      DashboardModel.gerarInsights(usuarioId),
    ])

    return res.status(200).json({
      periodo,
      metricas: {
        cliquesWhatsapp: {
          atual: cliquesWhatsapp.atual,
          variacao: cliquesWhatsapp.variacao
        },
        favoritos: {
          atual: favoritos.atual,
          variacao: favoritos.variacao
        },
        avaliacoes: {
          media: avaliacoes.media,
          total: avaliacoes.total,
          variacao: avaliacoes.variacao
        },
        servicosRealizados: {
          atual: servicosRealizados.atual,
          variacao: servicosRealizados.variacao
        },
        visualizacoes: {
          atual: visualizacoes.atual,
          variacao: visualizacoes.variacao
        }
      },
      ranking: {
        posicao: ranking.posicao,
        total: ranking.total,
        percentil: ranking.percentil
      },
      servicosMaisFavoritados,
      insights
    })
  }
}

export default new DashboardController()