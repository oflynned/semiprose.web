import type { Meta, StoryObj } from "@storybook/react";
import { Story } from "./Story";
import { story } from "~/constants";

const meta = {
  title: "Story",
  component: Story,
  tags: ["autodocs"],
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...story,
  },
};
