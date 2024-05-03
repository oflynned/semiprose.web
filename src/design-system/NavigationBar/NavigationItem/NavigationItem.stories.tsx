import { NavigationItem } from "./NavigationItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "NavigationItem",
  component: NavigationItem,
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Explore",
  },
};

export const Active: Story = {
  args: {
    label: "Explore",
    active: true,
  },
};
