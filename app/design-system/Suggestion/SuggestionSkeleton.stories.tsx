import type { Meta, StoryObj } from "@storybook/react";
import { SuggestionSkeleton } from "~/design-system";

const meta = {
  title: "Suggestion/Skeleton",
  component: SuggestionSkeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof SuggestionSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
