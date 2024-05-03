import type { Meta, StoryObj } from "@storybook/react";
import { PillSkeleton } from "./PillSkeleton.tsx";

const meta = {
  title: "PillSkeleton",
  component: PillSkeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof PillSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
