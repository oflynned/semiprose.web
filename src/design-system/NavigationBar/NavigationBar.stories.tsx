import { NavigationBar } from "./NavigationBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "NavigationBar",
  component: NavigationBar,
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    pageId: "explore",
    user: { id: "user-id", username: "username", initials: "u" },
  },
};
