// middleware/lead.middleware.js

export const validateLeadInput = (req, res, next) => {
  const { name, email, phone, budget, message } = req.body;

  if (!name || typeof name !== "string" || !name.trim()) {
    return res
      .status(400)
      .json({ success: false, message: "Valid name is required." });
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res
      .status(400)
      .json({ success: false, message: "Valid email is required." });
  }

  if (!phone || typeof phone !== "string" || !phone.trim()) {
    return res
      .status(400)
      .json({ success: false, message: "Phone number is required." });
  }

  if (!budget || typeof budget !== "string" || !budget.trim()) {
    return res
      .status(400)
      .json({ success: false, message: "Budget range is required." });
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    return res
      .status(400)
      .json({ success: false, message: "Message cannot be empty." });
  }

  next(); // Pass to route handler if validation succeeds
};
