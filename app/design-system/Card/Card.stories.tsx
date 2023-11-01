import { Card } from "./Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  args: { children: <div className={"p-8 bg-blue-50"}>Card</div> },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithBorder: Story = {
  args: {
    border: true,
  },
};
