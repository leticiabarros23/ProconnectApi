import { Router } from "express";
import { authenticate } from "../middlewares/authMiddleware";
import DashboardController from "../useCase/dashboard/create/DashboardController";

const router = Router();

router.get(
  "/dashboard",
  authenticate,
  (req, res) => DashboardController.handle(req, res)
);

export default router;