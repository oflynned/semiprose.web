import { request } from "./request.ts";
import { User, userSchema } from "./schema";

export const getUser = async (token?: string): Promise<User> => {
  console.log({ token });

  const response = await request("/users/me", "get", token);

  return userSchema.parse(response) as User;
};
