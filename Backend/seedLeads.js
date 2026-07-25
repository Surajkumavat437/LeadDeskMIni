import dotenv from "dotenv";
import mongoose from "mongoose";
import Lead from "./model/lead.model.js";

dotenv.config();

const sampleLeads = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+91 98765 43210",
    budget: "₹10k - ₹50k",
    message: "Looking for a custom MERN stack dashboard for my SaaS startup.",
    status: "New",
  },
  {
    name: "Priya Patel",
    email: "priya.patel@example.com",
    phone: "+91 91234 56789",
    budget: "₹1L+",
    message: "Need a full e-commerce revamp with high-end minimal design.",
    status: "In Progress",
  },
  {
    name: "Rohan Verma",
    email: "rohan.v@example.com",
    phone: "+91 99887 76655",
    budget: "₹10k - ₹50k",
    message: "Simple landing page for a local cafe reservation system.",
    status: "New",
  },
  {
    name: "Ananya Iyer",
    email: "ananya.iyer@example.com",
    phone: "+91 98111 22334",
    budget: "₹50k - ₹1L",
    message: "Real-time analytics integration required for our mobile web app.",
    status: "Closed",
  },
  {
    name: "Vikram Malhotra",
    email: "vikram.m@example.com",
    phone: "+91 97000 11223",
    budget: "₹1L+",
    message: "Enterprise-grade CRM module architecture consultation.",
    status: "In Progress",
  },
  {
    name: "Neha Gupta",
    email: "neha.gupta@example.com",
    phone: "+91 96543 21098",
    budget: "₹10k - ₹50k",
    message: "Portfolio website overhaul with Tailwind CSS and Framer Motion.",
    status: "New",
  },
  {
    name: "Karan Singh",
    email: "karan.singh@example.com",
    phone: "+91 94321 67890",
    budget: "₹50k - ₹1L",
    message:
      "API optimization and database indexing for faster query responses.",
    status: "New",
  },
  {
    name: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    phone: "+91 93210 54321",
    budget: "₹50k - ₹1L",
    message: "Full-stack booking platform development from scratch.",
    status: "In Progress",
  },
  {
    name: "Aditya Joshi",
    email: "aditya.j@example.com",
    phone: "+91 92109 43210",
    budget: "₹10k - ₹50k",
    message: "Authentication flow security audit (JWT, HttpOnly cookies).",
    status: "Closed",
  },
  {
    name: "Meera Nair",
    email: "meera.nair@example.com",
    phone: "+91 91098 32109",
    budget: "₹1L+",
    message: "Scalable cloud infrastructure setup and CI/CD pipeline writing.",
    status: "New",
  },
  {
    name: "Kabir Das",
    email: "kabir.das@example.com",
    phone: "+91 90123 45678",
    budget: "₹50k - ₹1L",
    message: "Interactive map integration for real estate listings.",
    status: "New",
  },
  {
    name: "Tanvi Rao",
    email: "tanvi.rao@example.com",
    phone: "+91 98989 89898",
    budget: "₹50k - ₹1L",
    message: "UI/UX component library build using React and Tailwind.",
    status: "In Progress",
  },
  {
    name: "Devansh Kulkarni",
    email: "devansh.k@example.com",
    phone: "+91 97878 78787",
    budget: "₹1L+",
    message: "Multi-vendor marketplace backend architecture design.",
    status: "Closed",
  },
  {
    name: "Simran Kaur",
    email: "simran.k@example.com",
    phone: "+91 96767 67676",
    budget: "₹10k - ₹50k",
    message: "Blog platform optimization and SEO meta tag injections.",
    status: "New",
  },
  {
    name: "Akash Mehra",
    email: "akash.mehra@example.com",
    phone: "+91 95656 56565",
    budget: "₹50k - ₹1L",
    message: "Payment gateway integration (Stripe / Razorpay webhooks).",
    status: "In Progress",
  },
  {
    name: "Divya Pillai",
    email: "divya.pillai@example.com",
    phone: "+91 94545 45454",
    budget: "₹10k - ₹50k",
    message: "Quick bug fix session for React state management hooks.",
    status: "New",
  },
  {
    name: "Manish Roy",
    email: "manish.roy@example.com",
    phone: "+91 93434 34343",
    budget: "₹50k - ₹1L",
    message: "Inventory management portal dashboard setup.",
    status: "New",
  },
  {
    name: "Ritu Sen",
    email: "ritu.sen@example.com",
    phone: "+91 92323 23232",
    budget: "₹1L+",
    message: "Automated test suites setup with Jest and Supertest.",
    status: "Closed",
  },
  {
    name: "Yash Chopra",
    email: "yash.chopra@example.com",
    phone: "+91 91212 12121",
    budget: "₹50k - ₹1L",
    message: "Admin control panel for managing user permissions.",
    status: "New",
  },
  {
    name: "Zoya Akhtar",
    email: "zoya.akhtar@example.com",
    phone: "+91 90101 01010",
    budget: "₹1L+",
    message: "Cinematic portfolio concept execution with WebGL elements.",
    status: "In Progress",
  },
];

const seedDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;

    await mongoose.connect(MONGO_URI);
    console.log("📦 Connected to MongoDB for seeding...");

    await Lead.deleteMany({});
    console.log("🗑️ Cleared existing leads.");

    await Lead.insertMany(sampleLeads);
    console.log(
      `✅ Successfully seeded ${sampleLeads.length} leads into the database!`,
    );

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedDB();
