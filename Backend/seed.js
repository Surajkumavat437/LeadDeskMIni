import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connect from "./config/db.js";
import Admin from "./Model/admin.model.js";
import { hashPassword } from "./utils/hash.js";

const seedAdmin = async () => {
  try {
    await connect();

    const adminEmail = "admin@example.com";
    const plainPassword = "AdminPassword123!";

    const existingAdmin = await Admin.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log(
        ` Admin with email '${adminEmail}' already exists. Skipping.`,
      );
      await mongoose.connection.close();
      process.exit(0);
    }

    const hashedPassword = await hashPassword(plainPassword);

    await Admin.create({
      name: "Super Admin",
      email: adminEmail,
      password: hashedPassword,
    });

    console.log(" Default Admin created successfully!");
    console.log(`   Email: ${adminEmail}`);
    console.log(`   Password: ${plainPassword}`);
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error(" Seeding failed:", error.message);
    process.exit(1);
  }
};

seedAdmin();
