import type { Meta, StoryObj } from "@storybook/react";
import { SuggestionSkeleton } from "./SuggestionSkeleton.tsx";

const meta = {
  title: "SuggestionSkeleton",
  component: SuggestionSkeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof SuggestionSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
