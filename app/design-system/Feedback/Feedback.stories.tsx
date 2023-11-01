import type { Meta, StoryObj } from "@storybook/react";
import { Feedback } from "./Feedback";

const meta = {
  title: "Feedback",
  component: Feedback,
  tags: ["autodocs"],
} satisfies Meta<typeof Feedback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    improvements: [
      {
        title: "Sentence structure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        weight: 2,
      },
      {
        title: "Show, don't tell",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        weight: 11,
      },
      {
        title: "Imagery",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        weight: 2,
      },
    ],
  },
};

export const Flawless: Story = {
  args: {
    improvements: [],
  },
};
