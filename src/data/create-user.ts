import { Config } from "./config.ts";

export type CreateUserRequest = {
  username: string;
};

export const createUser = async (dto: CreateUserRequest, token?: string) => {
  const config = new Config();
  const response = await fetch(config.getEndpoint("/users"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dto),
  });

  return response.json();
};
