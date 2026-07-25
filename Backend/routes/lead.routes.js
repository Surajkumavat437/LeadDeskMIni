import express from "express";
import Lead from "../model/lead.model.js";
import { getLeads } from "../controllers/lead.controller.js";
import { validateLeadInput } from "../middlewares/lead.middleware.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// 1. Create Lead (Public landing page form submission)
router.post("/", validateLeadInput, async (req, res) => {
  try {
    const { name, email, phone, budget, message } = req.body;

    const newLead = await Lead.create({
      name,
      email,
      phone,
      budget: budget ? Number(budget) : 0,
      message,
    });

    return res.status(201).json({ success: true, data: newLead });
  } catch (error) {
    console.error("Submission error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
});

// 2. Fetch All Leads (Protected - Dashboard access only)
router.get("/", protect, getLeads);

// 3. Update Lead Status (Protected)
router.patch("/:id/status", protect, async (req, res) => {
  try {
    const { status } = req.body;

    // Fixed Mongoose deprecation warning by replacing `new: true` with `returnDocument: "after"`
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: "after", runValidators: true },
    );

    if (!lead) {
      return res
        .status(404)
        .json({ success: false, message: "Lead not found" });
    }

    return res.status(200).json({ success: true, data: lead });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Update failed", error: error.message });
  }
});

export default router;
