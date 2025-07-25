import { loginUsers } from "./resolvers/user/loginUser.js";
import { registerUsers } from "./resolvers/user/registerUser.js";
import { verifyEmailUser } from "./resolvers/user/verifyUser.js";

export const root = {
  hello: async () => {
    return "Hello, World!";
  },
  registerUser: registerUsers,
  verifyEmail: verifyEmailUser,
  loginUser: loginUsers,
};
