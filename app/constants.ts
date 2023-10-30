import type { Prompt, Story, User } from "~/types";

export const APP_NAME = "Semiprose";
export const TAGLINE = "A writing app for the rest of us";

export const user: User = {
  id: "user-1",
  username: "wetdaddy69",
  initials: "WD",
};

export const prompt: Prompt = {
  id: "prompt-1",
  text: "Amidst the whispers of a forgotten forest, a curious wanderer stumbles upon a hidden door that promises to reveal the greatest secret of their life. Little do they know, this door leads to a realm where time flows differently, and they must navigate a series of surreal challenges to uncover the truth before the forest claims them forever.",
  week: 43,
};

export const story: Story = {
  id: "story-1",
  title: "The Door in the Forest",
  prompt,
  paragraphs: [
    "In the heart of the forgotten forest, where ancient trees stood tall and their leaves whispered secrets of a bygone era, a curious wanderer named Lila stumbled upon a door unlike any other. Covered in ivy and concealed by time, this door beckoned with an irresistible allure. As Lila pushed it open, a rush of cool air, scented with the essence of pine and mystery, greeted her. Beyond the threshold lay a realm where time seemed to have a will of its own, flowing in erratic currents. The forest she thought she knew had transformed into a surreal landscape, where gravity could shift, and reality wavered.",
    "Lila's quest to uncover the greatest secret of her life had taken an unexpected turn. She now faced a series of enigmatic challenges, each more confounding than the last. With each step deeper into this bewildering world, she realized that the door held not just her secret but the very essence of the forest itself. To escape the clutches of time's capricious dance and the encroaching forest, she would need all her wit, courage, and the guidance of the forest's ancient spirits. The countdown had begun, and Lila knew she had to uncover the truth before the forest claimed her forever.",
  ],
  author: user,
  publishedAt: new Date(),
  duration: 5,
  readership: 53,
  tags: ["fantasy", "adventure", "mystery"],
};
