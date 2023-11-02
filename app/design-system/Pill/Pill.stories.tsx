import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "./Pill";

const meta = {
  title: "Pill/Pill",
  component: Pill,
  tags: ["autodocs"],
} satisfies Meta<typeof Pill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Pill",
  },
};

export const Error: Story = {
  args: {
    label: "Pill",
    variant: "error",
  },
};

export const Warning: Story = {
  args: {
    label: "Pill",
    variant: "warning",
  },
};

export const Info: Story = {
  args: {
    label: "Pill",
    variant: "info",
  },
};
