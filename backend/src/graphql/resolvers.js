import bcrypt from "bcryptjs";
import { User } from "../models/user.js";

export const root = {
  hello: async ()=>{
    return "Hello, World!";
  },
  registerUser: async ({ name, email, password }) => {
    const existing = await User.findOne({ email });
    if (existing) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    return { id: user.id, name: user.name, email: user.email };
  },
};
