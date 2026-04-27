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
      insights
    ] = await Promise.all([
      DashboardModel.totalCliquesWhatsapp(usuarioId, periodo),
      DashboardModel.totalFavoritos(usuarioId, periodo),
      DashboardModel.metricsAvaliacao(usuarioId, periodo),
      DashboardModel.totalServicosRealizados(usuarioId, periodo),
      DashboardModel.gerarInsights(usuarioId),
    ])

    return res.status(200).json({
      periodo,
      metricas: {
        cliquesWhatsapp,
        favoritos,
        avaliacoes: {
          media: avaliacoes.media,
          total: avaliacoes.total
        },
        servicosRealizados,
      },
      insights
    })
  }
}

export default new DashboardController()