import { Config } from "./config.ts";

export const getUser = async (token: string) => {
  const config = new Config();
  const response = await fetch(config.getEndpoint("/users/me"), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};
