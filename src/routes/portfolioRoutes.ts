import express from "express";
import PortfolioController, { upload } from "../useCase/portfolio/create/PortfolioController";
import { authenticate } from "../middlewares/authMiddleware";

const portfolioRoutes = express.Router();

// Upload de foto
portfolioRoutes.post(
  "/portfolio",
  authenticate,
  upload.single("imagem"),
  PortfolioController.uploadFoto
);

// Listar fotos de um serviço
portfolioRoutes.get(
  "/portfolio/:servicoId",
  PortfolioController.listarFotos
);

// Deletar foto
portfolioRoutes.delete(
  "/portfolio/:id",
  authenticate,
  PortfolioController.deletarFoto
);

export default portfolioRoutes;