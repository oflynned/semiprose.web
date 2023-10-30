import type { User } from "~/types/user";
import type { Prompt } from "~/types/prompt";

export type Story = {
  id: string;
  publishedAt: Date;
  duration: number;
  readership: number;
  tags: string[];
  title: string;
  author: User;
  prompt: Prompt;
  paragraphs: string[];
};
