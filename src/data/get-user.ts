import { request } from "./request.ts";
import { User, userSchema } from "./schema";

export const getUser = async (token: string): Promise<User> => {
  const response = await request(token, "/users/me", "get");

  return userSchema.parse(response);
};
