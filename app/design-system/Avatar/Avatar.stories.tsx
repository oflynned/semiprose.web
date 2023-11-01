import { Avatar } from "./Avatar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    initials: "U",
  },
};
