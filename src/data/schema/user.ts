import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  lastActiveAt: z.string(),
  username: z.string(),
  biography: z.string(),
  initials: z.string(),
});

export type User = z.infer<typeof userSchema>;
