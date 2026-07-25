import { loginAdmin } from "../services/auth.service.js";

const getCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const { admin, token } = await loginAdmin(email, password);

    res.cookie("token", token, getCookieOptions());

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: admin,
      data: admin,
      token,
    });
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: err.message || "Authentication Failed",
    });
  }
};

export const logoutController = async (req, res) => {
  try {
    res.clearCookie("token", getCookieOptions());

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Logout Failed",
    });
  }
};

export const getMeController = async (req, res) => {
  try {
    // Return both `user` and `data` so frontend hooks pick it up regardless of key name
    return res.status(200).json({
      success: true,
      user: req.user,
      data: req.user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user profile",
    });
  }
};
