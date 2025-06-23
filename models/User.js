// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String }, // optional for Google login
  provider: { type: String, default: "local" }, // "google" or "local"
});

export default mongoose.model("User", userSchema);
