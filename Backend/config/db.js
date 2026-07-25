import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" Connected to MongoDB successfully");
  } catch (err) {
    console.error(" MongoDB connection error:", err.message);
    throw err;
  }
};

export default connect;
