import type { User } from "~/types/user";

export type Comment = {
  id: string;
  user: User;
  comment: string;
};
