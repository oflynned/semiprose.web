import { Config } from "./config.ts";

type Method = "get" | "post" | "put" | "delete";

const config = new Config();

export const request = async <R, T>(
  endpoint: string,
  method: Method,
  token?: string,
  body?: T,
) => {
  const url = config.getEndpoint(endpoint);
  const request = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify(body),
  });

  return (await request.json()) as R;
};
