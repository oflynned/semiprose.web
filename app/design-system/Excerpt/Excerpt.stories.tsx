import { Excerpt } from "./Excerpt";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Excerpt",
  component: Excerpt,
  tags: ["autodocs"],
} satisfies Meta<typeof Excerpt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "id",
    title: "Title",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl luctus nunc, vitae luctu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl luctus nunc, vitae luctu.".repeat(
        3
      ),
    ],
    tags: ["tag1", "tag2", "tag3"],
  },
};

export const Short: Story = {
  args: {
    id: "id",
    title: "Title",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl luctus nunc, vitae luctu",
    ],
    tags: ["tag1", "tag2", "tag3"],
  },
};
