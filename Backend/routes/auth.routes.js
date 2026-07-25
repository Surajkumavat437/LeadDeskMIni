import { Router } from "express";
import {
  loginController,
  getMeController,
  logoutController,
} from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", loginController);
router.post("/logout", logoutController);
router.get("/me", protect, getMeController);

export default router;
