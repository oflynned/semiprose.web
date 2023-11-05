import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Save",
  },
};

export const Outlined: Story = {
  args: {
    label: "Save",
    variant: "outlined",
  },
};

export const TextButton: Story = {
  args: {
    label: "Save",
    variant: "text",
  },
};

export const Disabled: Story = {
  args: {
    label: "Save",
    state: "disabled",
  },
};

export const ForceDisabledOverride: Story = {
  args: {
    label: "Save",
    disabled: true,
    state: "clickable",
  },
};

export const Loading: Story = {
  args: {
    label: "Save",
    state: "loading",
  },
};
