import { Router } from "express";
import AuthController from "../useCase/login/AuthController";

const router = Router();


router.post(
    "/login", 
    AuthController.login
);

export default router;