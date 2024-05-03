import type { Suggestion, Prompt, Story, User, Comment } from "~/types";

export const APP_NAME = "Semiprose";
export const TAGLINE = "Ignite your writing superpowers!";

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

const comment: Comment = {
  id: "comment-1",
  postedAt: new Date().toISOString(),
  comment: "My dog could write better than this",
  user: {
    id: "another-user",
    initials: "PB",
    username: "power_bottom",
  },
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
  publishedAt: new Date().toISOString(),
  readership: 53,
  tags: ["fantasy", "adventure", "mystery"],
  comments: [comment],
};

export const pastStories: Story[] = [
  story,
  {
    id: "story-2",
    title: "Echoes of Eternity",
    prompt: {
      id: "prompt-2",
      text: "A mysterious antique shop appears in town overnight, offering items that seem to hold echoes of people's past lives. One curious shopper stumbles upon an item that reveals a lifetime they never lived, unearthing memories and emotions from another time. What do they discover, and how does it change their perspective on the present?",
      week: 44,
    },
    paragraphs: [
      "In the heart of our quiet town, a new presence arrived overnight - The Antique Alcove. The townsfolk whispered of its enigmatic owner, Ms. Agatha, a woman whose age seemed impossible to discern. As stories spread about the peculiar items within, curiosity gripped the community, and one fateful day, Samantha, a young woman known for her inquisitiveness, entered the shop.",
      "Among the myriad of curios, an ornate locket, adorned with sapphires, caught Samantha's eye. She hesitantly fastened it around her neck. Instantly, a flood of sensations overwhelmed her - sights, sounds, and emotions foreign to her own life. She stood by a cobblestone bridge, watching a horse-drawn carriage pass. A mysterious man, his eyes filled with longing, extended his hand. Samantha gasped as she recognized the landscape, not from her time but another era. The locket had unveiled the echoes of a lifetime she never lived.",
      "Over the next few days, Samantha delved into the locket's memories, uncovering a love story, a time of struggle, and the pain of parting. These echoes of another life reshaped her perspective, making her appreciate the simplicity of her own time and the fleeting moments that truly mattered.",
    ],
    author: {
      id: "user-2",
      username: "EternalDreamer",
      initials: "ED",
    },
    publishedAt: new Date(2023, 10, 15).toISOString(),
    readership: 62,
    tags: ["time-travel", "mystery", "romance"],
    comments: [comment],
  },
  {
    id: "story-3",
    title: "The Melody of Shadows",
    prompt: {
      id: "prompt-3",
      text: "In the heart of a bustling city, a street musician plays a hauntingly beautiful melody on an old violin. Passersby notice that those who stop to listen experience vivid, emotionally charged visions of their past and future. What happens when a young woman, lost in the crowd, becomes entranced by the music? How do the melodies of her past and future intertwine?",
      week: 45,
    },
    paragraphs: [
      "Amidst the chaos of the city, there stood a street musician, his weathered hands coaxing a hauntingly beautiful melody from an old violin. The music, filled with sorrow and hope, enveloped the bustling streets. Those who paused to listen found themselves transported through time and emotion.",
      "As the young woman, Clara, got lost in the throng of people, she stumbled upon the mesmerizing melody. With each note, she saw glimpses of her past, her childhood, and dreams yet to be realized. The music painted a vivid tapestry of her life. Tears welled in her eyes as she realized the power of the musician's gift. Her past and future intertwined in the enchanting notes, inspiring her to embrace her own melody and dreams.",
    ],
    author: {
      id: "user-3",
      username: "MelodyMuse",
      initials: "MM",
    },
    publishedAt: new Date(2023, 11, 5).toISOString(),
    readership: 48,
    tags: ["music", "inspiration", "time-travel"],
    comments: [comment],
  },
  {
    id: "story-4",
    title: "The Book of Whispers",
    prompt: {
      id: "prompt-4",
      text: "In an ancient library hidden beneath the city, a scholar discovers a mystical book that allows them to converse with long-dead authors. The writers share their untold stories, regrets, and wisdom. What lessons do they impart, and how does the scholar's understanding of literature and life change?",
      week: 46,
    },
    paragraphs: [
      "Deep beneath the city, in an ancient and forgotten library, a dedicated scholar named Julian stumbled upon a mystical book, the 'Book of Whispers.' With each turn of its pages, the words of long-dead authors came to life, allowing Julian to converse with literary legends of the past.",
      "As the days turned into weeks, Julian spoke with Shakespeare, Austen, and Poe, among others. They shared their untold stories, regrets, and wisdom. From Shakespeare, Julian learned about the essence of tragic love; from Austen, the subtleties of human nature; and from Poe, the beauty in darkness. The conversations transformed Julian's understanding of literature and life, making him a guardian of the whispers of literary history.",
    ],
    author: {
      id: "user-4",
      username: "james1037402",
      initials: "J",
    },
    publishedAt: new Date(2023, 11, 20).toISOString(),
    readership: 55,
    tags: ["literature", "wisdom", "history"],
    comments: [comment],
  },
];

export const mockSuggestions: Suggestion[] = [
  {
    title: "Sentence Structure",
    indepthFeedback:
      "The paragraph could benefit from some variation in sentence length to maintain readability and make the narrative more engaging.",
    conciseFeedback: "Varied sentence structure for engagement",
    example:
      "For example, the sentence 'The forest she thought she knew had transformed into a surreal landscape, where gravity could shift, and reality wavered.' could be split into shorter sentences for a more dynamic flow.",
    gradingWeight: 2,
  },
  {
    title: "Show, Don't Tell",
    indepthFeedback:
      "To make the character, Lila, more relatable and the situation more immersive, providing deeper insight into her emotions and reactions would be an improvement.",
    conciseFeedback: "Enhance character relatability",
    example:
      "In the sentence 'She now faced a series of enigmatic challenges,' you could describe her emotions and physical reactions to these challenges to let readers feel her experience.",
    gradingWeight: 2,
  },
  {
    title: "Imagery",
    indepthFeedback:
      "While the imagery is vivid, further use of metaphors and similes could elevate the descriptions and make the narrative even more captivating.",
    conciseFeedback: "Enhance metaphoric descriptions",
    example:
      "In the sentence 'a rush of cool air, scented with the essence of pine and mystery, greeted her,' you could use metaphors like 'cool air, like a phantom's whisper, scented with the essence of pine and enigma.'",
    gradingWeight: 2,
  },
  {
    title: "Word Choice",
    indepthFeedback:
      "Enhancing the choice of words and phrases, particularly in key moments, would add more impact to the narrative.",
    conciseFeedback: "Enhance word choice for impact",
    example:
      "In the sentence 'The countdown had begun,' consider using a more impactful word like 'The ominous countdown had commenced,' to heighten the tension.",
    gradingWeight: 1,
  },
  {
    title: "Pacing",
    indepthFeedback:
      "Creating a sense of rhythm and tension through sentence structure and pacing would help maintain the reader's interest and anticipation.",
    conciseFeedback: "Enhance pacing for engagement",
    example:
      "To improve pacing, you could vary sentence length and structure in sentences like 'She now faced a series of enigmatic challenges, each more confounding than the last.' to maintain reader engagement.",
    gradingWeight: 2,
  },
  {
    title: "Character Development",
    indepthFeedback:
      "Providing a bit more insight into Lila's character and her motivation would make her more relatable, and readers would become more invested in her journey.",
    conciseFeedback: "Develop character for relatability",
    example:
      "In the sentence 'Lila's quest to uncover the greatest secret of her life had taken an unexpected turn,' provide a glimpse into her thoughts and emotions, like 'Lila's heart raced as her quest to unveil the forest's deepest enigma took an unforeseen twist.'",
    gradingWeight: 1,
  },
];
