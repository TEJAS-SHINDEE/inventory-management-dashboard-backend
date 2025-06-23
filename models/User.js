import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String }, 
  provider: { type: String, default: "local" }, 
});

export default mongoose.model("User", userSchema);
