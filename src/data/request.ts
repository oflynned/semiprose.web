import { Config } from "./config.ts";

type Method = "get" | "post" | "put" | "delete";

export const request = async <T>(
  token: string,
  endpoint: string,
  method: Method,
  body?: T
): Promise<unknown> => {
  const config = new Config();
  const url = config.getEndpoint(endpoint);
  const request = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  return request.json();
};
