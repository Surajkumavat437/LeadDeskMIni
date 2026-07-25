import bcrypt from "bcrypt";

export const hashPassword = async (plainPassword) => {
  if (!plainPassword) {
    throw new Error("Password to hash must be provided");
  }
  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRound);
  return hashedPassword;
};

export const verifyPassword = async (plainPassword, hashedPassword) => {
  if (!plainPassword || !hashedPassword) {
    return false;
  }
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    return false;
  }
};
