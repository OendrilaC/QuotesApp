import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  refreshToken: { type: String, default: "" },
  verified: { type: Boolean, default: false },
});

export const User = mongoose.model("User", userSchema);
