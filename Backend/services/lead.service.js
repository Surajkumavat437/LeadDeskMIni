import Lead from "../model/lead.model.js";

// Fetch all leads with optional filter/search
export const getAllLeads = async (query = {}) => {
  const { status, search } = query;
  const filter = {};

  if (status) {
    filter.status = status;
  }

  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }

  return await Lead.find(filter).sort({ createdAt: -1 });
};

// Get single lead by ID
export const getLeadById = async (leadId) => {
  const lead = await Lead.findById(leadId);
  if (!lead) {
    throw new Error("Lead not found");
  }
  return lead;
};

// Create new lead
export const createLead = async (leadData, userId) => {
  const newLead = new Lead({
    ...leadData,
    createdBy: userId,
  });
  return await newLead.save();
};

// Update lead status or details
export const updateLead = async (leadId, updateData) => {
  const lead = await Lead.findByIdAndUpdate(leadId, updateData, {
    new: true,
    runValidators: true,
  });

  if (!lead) {
    throw new Error("Lead not found");
  }
  return lead;
};

// Delete lead
export const deleteLead = async (leadId) => {
  const lead = await Lead.findByIdAndDelete(leadId);
  if (!lead) {
    throw new Error("Lead not found");
  }
  return lead;
};
