import type { Meta, StoryObj } from "@storybook/react";
import { Feedback } from "./Feedback";
import { mockFeedback } from "~/constants";

const meta = {
  title: "Feedback",
  component: Feedback,
  tags: ["autodocs"],
} satisfies Meta<typeof Feedback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: "completed",
    improvements: mockFeedback,
  },
};

export const Flawless: Story = {
  args: {
    state: "completed",
    improvements: [],
  },
};
