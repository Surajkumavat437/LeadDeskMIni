import jwt from "jsonwebtoken";

const getSecret = () => process.env.JWT_SECRET_KEY;

export const generateToken = (payload) => {
  if (!payload || typeof payload !== "object") {
    throw new Error("Payload must be valid object");
  }

  const secret = getSecret();
  if (!secret) {
    throw new Error("JWT secret key is not defined in environment variables");
  }

  return jwt.sign(payload, secret, { expiresIn: "1d" });
};

export const verifyToken = (token) => {
  if (!token) {
    return null;
  }

  try {
    const secret = getSecret();
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};
