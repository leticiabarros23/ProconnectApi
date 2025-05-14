import { Router } from "express";
import AuthController from "../useCase/login/AuthController";

const router = Router();

// rota de login
router.post("/login", AuthController.login);

export default router;