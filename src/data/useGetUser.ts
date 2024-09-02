import { useAuth } from "../hooks/useAuth.ts";
import { getUser } from "./get-user.ts";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (
  options?: Omit<Parameters<typeof useQuery>[0], "queryFn" | "queryKey">,
) => {
  const {
    state: { token },
  } = useAuth();

  return useQuery({
    queryKey: ["get-user"],
    queryFn: () => getUser(token),
    ...options,
  });
};
