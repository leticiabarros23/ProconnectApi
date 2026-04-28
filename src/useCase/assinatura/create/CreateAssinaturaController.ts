import { Request, Response } from "express";
import { MercadoPagoConfig, Preference } from "mercadopago";
import CreateAssinaturaModel from "./CreateAssinaturaModel";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!
});

class CreateAssinaturaController {
  async handle(req: Request, res: Response) {
    if (!req.user) {
      return res.status(401).json({ error: "Não autorizado." })
    }

    const usuarioId = req.user.id;
    const { tipo } = req.body;

    if (!tipo || !["mensal", "anual"].includes(tipo)) {
      return res.status(400).json({ error: "Tipo inválido. Use 'mensal' ou 'anual'." })
    }

    const isProfissional = await CreateAssinaturaModel.verificarSeProfissional(usuarioId)
    if (!isProfissional) {
      return res.status(403).json({ error: "Apenas profissionais podem assinar um plano." })
    }

    const assinaturaAtiva = await CreateAssinaturaModel.buscarAssinaturaAtiva(usuarioId)
    if (assinaturaAtiva) {
      return res.status(409).json({ error: "Você já possui uma assinatura ativa." })
    }

    // const valor = tipo === "anual" ? 269.90 : 29.90
       const valor = tipo === "anual" ? 2.00 : 1.00

    const preference = new Preference(client)
    const response = await preference.create({
      body: {
        items: [
          {
            id: `proconnect-${tipo}`,
            title: `ProConnect Premium — Plano ${tipo === "mensal" ? "Mensal" : "Anual"}`,
            quantity: 1,
            unit_price: valor,
            currency_id: "BRL",
          }
        ],
        external_reference: String(usuarioId),
        back_urls: {
          success: process.env.MP_SUCCESS_URL!,
          failure: process.env.MP_FAILURE_URL!,
          pending: process.env.MP_PENDING_URL!,
        },
        auto_return: "approved",
        metadata: {
          tipo_plano: tipo
        }
      }
    })

    await CreateAssinaturaModel.criar({
      usuarioId,
      tipo,
      mpPreferenceId: response.id!
    })

    return res.status(201).json({
      url: response.init_point,
      preferenceId: response.id
    })
  }
}

export default new CreateAssinaturaController()