import VisualizacaoController from "../useCase/visualizacao/create/VisualizacaoController";

// Sem autenticação — qualquer pessoa que abrir o serviço registra
router.post("/servico/:id/visualizacao", (req, res) => {
  return VisualizacaoController.handle(req, res)
})