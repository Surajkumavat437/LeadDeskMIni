import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import leadRoutes from "./routes/lead.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// List allowed origins for both local development and production
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://lead-desk-frontend-five.vercel.app",
  process.env.CLIENT_ORIGIN,
].filter(Boolean); // Removes undefined values

// 1. CORS Configuration for Credentials/Cookies
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow tools like Postman or server-to-server requests with no origin
      if (!origin) return callback(null, true);

      // Check if origin is allowed or if it's a Vercel deployment preview
      if (allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

// 2. Parsers
app.use(express.json());
app.use(cookieParser());

// 3. Routes
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

export default app;
