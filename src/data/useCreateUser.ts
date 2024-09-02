import { useMutation } from "@tanstack/react-query";
import { createUser, CreateUserRequest } from "./create-user.ts";
import { useAuth } from "../hooks/useAuth.ts";

export const useCreateUser = (dto: CreateUserRequest) => {
  const {
    state: { token },
  } = useAuth();

  return useMutation({
    mutationKey: ["create-user"],
    mutationFn: () => {
      if (!token) {
        throw new Error("No token available");
      }

      return createUser(dto, token);
    },
  });
};
