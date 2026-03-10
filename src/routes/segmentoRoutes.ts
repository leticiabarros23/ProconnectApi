import express from "express";
import SegmentoController from "../useCase/segmento/create/SegmentoController";
import { authenticate } from "../middlewares/authMiddleware";

const segmentoRoutes = express.Router();

// Listar todos os segmentos com suas categorias
segmentoRoutes.get(
  "/segmento",
  SegmentoController.getAllSegmentos
);

// Criar segmento (protegido)
segmentoRoutes.post(
  "/segmento",
  authenticate,
  SegmentoController.createSegmento
);

// Vincular categoria a segmento (protegido)
segmentoRoutes.post(
  "/segmento/vincular",
  authenticate,
  SegmentoController.vincularCategoria
);

// Deletar segmento (protegido)
segmentoRoutes.delete(
  "/segmento/:id",
  authenticate,
  SegmentoController.deleteSegmento
);

export default segmentoRoutes;