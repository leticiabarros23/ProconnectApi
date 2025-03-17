import express from "express";
import UploadController from "../useCase/upload/UploadController";
import upload from "../middlewares/upload"; // Middleware para processar a imagem

const router = express.Router();

// Rota para fazer upload de imagens e atualizar o serviço
router.post("/upload", upload.single("image"), UploadController.uploadImage);

export default router;
