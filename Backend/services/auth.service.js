import { hashPassword, verifyPassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";
import Admin from "../model/admin.model.js";

// 1. Create Admin
export const createAdmin = async (name, email, plainPassword) => {
  const normalizedEmail = email.trim().toLowerCase();
  const existAdmin = await Admin.findOne({ email: normalizedEmail });
  if (existAdmin) {
    throw new Error("This Email already Exists");
  }

  const hashedPassword = await hashPassword(plainPassword);
  if (!hashedPassword) {
    throw new Error("Failed to hash password");
  }

  const admin = await Admin.create({
    name,
    email: normalizedEmail,
    role: "admin",
    password: hashedPassword,
  });

  const adminObj = admin.toObject();
  delete adminObj.password;
  return adminObj;
};

// 2. Login Admin
export const loginAdmin = async (email, password) => {
  const normalizedEmail = email.trim().toLowerCase();
  const admin = await Admin.findOne({ email: normalizedEmail }).select(
    "+password",
  );
  if (!admin) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await verifyPassword(password, admin.password);
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
