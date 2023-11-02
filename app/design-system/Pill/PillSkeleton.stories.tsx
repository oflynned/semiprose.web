import type { Meta, StoryObj } from "@storybook/react";
import { PillSkeleton } from "~/design-system";

const meta = {
  title: "Pill/PillSkeleton",
  component: PillSkeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof PillSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
