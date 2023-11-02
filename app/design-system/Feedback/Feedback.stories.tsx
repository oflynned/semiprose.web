import type { Meta, StoryObj } from "@storybook/react";
import { Feedback } from "./Feedback";
import { mockSuggestions } from "~/constants";

const meta = {
  title: "Feedback/Feedback",
  component: Feedback,
  tags: ["autodocs"],
} satisfies Meta<typeof Feedback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    analysis: {
      state: "completed",
      suggestions: mockSuggestions,
    },
  },
};

export const Flawless: Story = {
  args: {
    analysis: {
      state: "completed",
      suggestions: [],
    },
  },
};

export const Loading: Story = {
  args: {
    analysis: {
      state: "loading",
    },
  },
};

export const Empty: Story = {
  args: {
    analysis: {
      state: "empty",
    },
  },
};
