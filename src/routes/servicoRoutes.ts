import express from "express";
import CreateServicoController from "../useCase/servico/create/CreateServicoController";
import { authenticate } from "../middlewares/authMiddleware";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });
const servicoRoutes = express.Router();

servicoRoutes.get("/servico", CreateServicoController.getAllServico);

servicoRoutes.get("/servico/:id", CreateServicoController.getServicoById);

servicoRoutes.post("/servico", authenticate, CreateServicoController.createServico);

servicoRoutes.put("/servico/:id", authenticate, CreateServicoController.updateServico);

servicoRoutes.delete("/servico/:id", authenticate, CreateServicoController.deleteServico);

servicoRoutes.patch("/servico/:id/disponivel", authenticate, CreateServicoController.toggleDisponivel);

servicoRoutes.patch(
  "/servico/:id/imagem",
  authenticate,
  upload.single("imagem"),
  CreateServicoController.uploadImagem
);

export default servicoRoutes;