import { User } from "../../../models/user.js";
import jwt from "jsonwebtoken";

export const verifyEmailUser = async ({ token }) => {
  try {
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error("User not found");
    }

    user.verified = true;
    await user.save();

    return "Email verified successfully";
  } catch (error) {
    console.error("Error in verifyEmail:", error);
    throw error;
  }
};
