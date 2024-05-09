import { request } from "./request.ts";
import { User, userSchema } from "./schema";

export type CreateUserRequest = {
  username: string;
};

export const createUser = async (
  dto: CreateUserRequest,
  token: string
): Promise<User> => {
  const response = await request(token, "/users", "post", dto);

  return userSchema.parse(response);
};
