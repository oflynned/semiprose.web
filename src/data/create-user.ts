export type CreateUserRequest = {
  username: string;
};

export const createUser = async (dto: CreateUserRequest, token?: string) =>
  fetch("http://localhost:3002/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dto),
  });
