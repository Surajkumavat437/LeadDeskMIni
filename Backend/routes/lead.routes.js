import { Router } from "express";
import {
  createLead,
  getLeads,
  updateLeadStatus,
  deleteLead,
} from "../controllers/lead.controller.js";
import { validateLeadInput } from "../middlewares/lead.middleware.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", validateLeadInput, createLead);
router.get("/", protect, authorizeRoles("admin"), getLeads);
router.patch("/:id/status", protect, authorizeRoles("admin"), updateLeadStatus);
router.delete("/:id", protect, authorizeRoles("admin"), deleteLead);

export default router;
