import Admin from "../model/admin.model.js";
import { verifyPassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";

export const loginAdmin = async (email, password) => {
  const normalizedEmail = email.trim().toLowerCase();

  console.log("Email entered:", normalizedEmail);

  const admin = await Admin.findOne({ email: normalizedEmail }).select(
    "+password",
  );

  console.log("Admin found:", !!admin);

  if (!admin) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await verifyPassword(password, admin.password);

  console.log("Password match:", isMatch);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({
    id: admin._id,
    email: admin.email,
    role: admin.role || "admin",
  });

  const adminObj = admin.toObject();
  delete adminObj.password;

  return { admin: adminObj, token };
};
