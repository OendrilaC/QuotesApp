import bcrypt from "bcryptjs";
import { User } from "../../../models/user.js";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "../../../helper/mailSender.js";

export const registerUsers = async ({ name, email, password }) => {
  try {
    const existing = await User.findOne({ email });

    if (existing) {
      if (!existing.verified) {
        throw new Error("Email not verified");
      }
      throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(
      process.env.BCRYPT_PASSWORD + password,
      parseInt(process.env.SALT_ROUNDS)
    );

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    try {
      await sendVerificationEmail(user.email, token);
      console.log("Verification email sent");
    } catch (error) {
      console.error("Error sending verification email:", error);
    }

    return { id: user.id, name: user.name, email: user.email };
  } catch (error) {
    console.error("Error in registerUser:", error);
    throw error;
  }
};
