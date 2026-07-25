import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // MUST BE INSTALLED
import leadRoutes from "./routes/lead.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// 1. CORS Configuration for Credentials/Cookies
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    credentials: true,
  }),
);

// 2. Parsers
app.use(express.json());
app.use(cookieParser()); // REQUIRED to populate req.cookies

// 3. Routes
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

export default app;
