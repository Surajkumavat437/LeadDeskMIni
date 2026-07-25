import { verifyToken } from "../utils/jwt.js";

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const bearerToken = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;
    const cookieToken = req.cookies?.token || null;
    const tokens = [bearerToken, cookieToken].filter(Boolean);

    if (tokens.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token provided",
      });
    }

    let decoded = null;
    for (const token of tokens) {
      decoded = verifyToken(token);
      if (decoded) {
        break;
      }
    }

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

export const authorizeRoles = (...allowedRoles) => (req, res, next) => {
  const role = req.user?.role || "admin";

  if (!allowedRoles.includes(role)) {
    return res.status(403).json({
      success: false,
      message: "Forbidden: insufficient permissions",
    });
  }

  next();
};
