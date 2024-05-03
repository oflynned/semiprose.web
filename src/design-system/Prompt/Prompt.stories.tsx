import type { Meta, StoryObj } from "@storybook/react";
import { Prompt } from "./Prompt";

const meta = {
  title: "Prompt",
  component: Prompt,
  tags: ["autodocs"],
} satisfies Meta<typeof Prompt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "id",
    week: 23,
    text: "This is a prompt.",
  },
};
