import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  if (!payload || typeof payload !== "object") {
    throw new Error("Payload must be valid object");
  }

  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
};

export const verifyToken = (token) => {
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    return null;
  }
};
