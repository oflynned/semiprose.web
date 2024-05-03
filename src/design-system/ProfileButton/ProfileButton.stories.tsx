import { ProfileButton } from "./ProfileButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ProfileButton",
  component: ProfileButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      {
        label: "Profile",
        icon: "visibility",
      },
    ],
    initials: "U",
    username: "@username",
  },
};

export const Open: Story = {
  args: {
    open: true,
    options: [
      {
        label: "Profile",
        icon: "visibility",
      },
    ],
    initials: "U",
    username: "@username",
  },
};
