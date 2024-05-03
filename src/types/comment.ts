import type { User } from "./user.ts";

export type Comment = {
  id: string;
  postedAt: string;
  user: User;
  comment: string;
};
