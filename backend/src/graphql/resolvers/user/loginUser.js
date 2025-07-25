import { User } from "../../../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const loginUsers = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }
    if (!user.verified) {
      throw new Error("Email not verified");
    }
    const isMatch = bcrypt.compare(
      process.env.BCRYPT_PASSWORD + password,
      user.password
    );

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    user.refreshToken = refreshToken;
    await user.save();
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.error("Error in loginUser:", error);
    throw error;
  }
};
