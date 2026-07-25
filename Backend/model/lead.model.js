import mongoose from "mongoose";
import { LEAD_STATUS, VALID_LEAD_STATUSES } from "../constant/lead-status.js";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Lead name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Lead email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    budget: {
      type: String,
      required: [true, "Budget range is required"],
      trim: true,
    },
    message: {
      type: String, // 👈 Added message field
      required: [true, "Message is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: {
        values: VALID_LEAD_STATUSES,
        message: "{VALUE} is not a valid lead status",
      },
      default: LEAD_STATUS.NEW,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Lead", leadSchema);
