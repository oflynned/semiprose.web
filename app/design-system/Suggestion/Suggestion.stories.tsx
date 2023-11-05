import type { Meta, StoryObj } from "@storybook/react";
import { Suggestion } from "~/design-system";
import { mockSuggestions } from "~/constants";

const meta = {
  title: "Suggestion",
  component: Suggestion,
  tags: ["autodocs"],
} satisfies Meta<typeof Suggestion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    suggestion: mockSuggestions[0],
  },
};

export const Selected: Story = {
  args: {
    suggestion: mockSuggestions[0],
    selected: true,
  },
};
