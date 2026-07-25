// middleware/lead.middleware.js

export const validateLeadInput = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || typeof name !== "string" || !name.trim()) {
    return res
      .status(400)
      .json({ success: false, message: "Valid name is required." });
  }

  if (!email || !email.includes("@")) {
    return res
      .status(400)
      .json({ success: false, message: "Valid email is required." });
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    return res
      .status(400)
      .json({ success: false, message: "Message cannot be empty." });
  }

  next(); // Pass to route handler if validation succeeds
};
