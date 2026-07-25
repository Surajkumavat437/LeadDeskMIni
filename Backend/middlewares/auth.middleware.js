import { verifyToken } from "../utils/jwt.js";

export const protect = async (req, res, next) => {
  try {
    // Check cookie first, fallback to Authorization header
    const token =
      req.cookies?.token ||
      (req.headers.authorization?.startsWith("Bearer ")
        ? req.headers.authorization.split(" ")[1]
        : null);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token provided",
      });
    }

    const decoded = verifyToken(token);

    // Guard against null/invalid tokens returned by verifyToken
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, token verification failed",
      });
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
    });
  }
};
