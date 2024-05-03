import type { Comment, Prompt, User } from "../types";

export type Story = {
  id: string;
  publishedAt: string;
  readership: number;
  tags: string[];
  title: string;
  author: User;
  prompt: Prompt;
  paragraphs: string[];
  comments: Comment[];
};
