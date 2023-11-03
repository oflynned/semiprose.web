import type { User } from "~/types/user";

export type Comment = {
  id: string;
  postedAt: string;
  user: User;
  comment: string;
};
