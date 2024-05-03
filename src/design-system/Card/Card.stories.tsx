import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div className={"p-8 bg-blue-50"}>Card</div>,
  },
};

export const WithBorder: Story = {
  args: {
    border: true,
    children: <div className={"p-8"}>Card</div>,
  },
};
