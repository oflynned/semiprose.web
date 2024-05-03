import type { Meta, StoryObj } from "@storybook/react";
import { Feedback } from "./Feedback";
import { mockSuggestions } from "../../constants";

const meta = {
  title: "Feedback",
  component: Feedback,
  tags: ["autodocs"],
} satisfies Meta<typeof Feedback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    analysisState: "completed",
    suggestions: mockSuggestions,
  },
};

export const NoSuggestions: Story = {
  args: {
    analysisState: "completed",
    suggestions: [],
  },
};

export const Loading: Story = {
  args: {
    analysisState: "loading",
  },
};

export const StartState: Story = {
  args: {
    analysisState: "clickable",
  },
};
