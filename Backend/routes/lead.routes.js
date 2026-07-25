import { Router } from "express";
import {
  createLead,
  getLeads,
  updateLeadStatus,
  deleteLead,
} from "../controllers/lead.controller.js";
import { validateLeadInput } from "../middlewares/lead.middleware.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", validateLeadInput, createLead);
router.get("/", protect, getLeads);
router.patch("/:id/status", protect, updateLeadStatus);
router.delete("/:id", protect, deleteLead);

export default router;
