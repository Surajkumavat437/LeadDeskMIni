import Lead from "../model/lead.model.js";
import { VALID_LEAD_STATUSES } from "../constant/lead-status.js";

// 1. Create Lead
export const createLead = async (req, res) => {
  try {
    const { name, email, phone, budget, message } = req.body;

    const newLead = await Lead.create({
      name,
      email,
      phone,
      budget: budget.trim(),
      message,
    });

    return res.status(201).json({ success: true, data: newLead });
  } catch (error) {
    console.error("Submission error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

// 2. Get All Leads
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    console.error("Error in getLeads:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch leads",
      error: error.message,
    });
  }
};

// 3. Update Lead Status
export const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!VALID_LEAD_STATUSES.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid lead status",
      });
    }

    const lead = await Lead.findByIdAndUpdate(
      id,
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
};

// 4. Delete Lead
export const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedLead = await Lead.findByIdAndDelete(id);

    if (!deletedLead) {
      return res
        .status(404)
        .json({ success: false, message: "Lead not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Lead deleted successfully" });
  } catch (error) {
    console.error("Error in deleteLead:", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Failed to delete lead",
        error: error.message,
      });
  }
};
