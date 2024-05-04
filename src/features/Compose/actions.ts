import { Suggestion } from "../../types";
import { Config } from "../../data/config.ts";

export const requestAnalysisAction = async (
  title: string,
  story: string
): Promise<Suggestion[]> => {
  const config = new Config();
  const response = await fetch(config.getEndpoint("/analyser/feedback"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      paragraphs: story.split("\n"),
    }),
  });

  return response.json();
};

export const saveDraftAction = async (title: string, story: string) => {
  const config = new Config();
  const response = await fetch(config.getEndpoint("/story/draft"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      paragraphs: story.split("\n"),
    }),
  });

  return response.json();
};

export const publishStoryAction = async (title: string, story: string) => {
  const config = new Config();
  const response = await fetch(config.getEndpoint("/story"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      paragraphs: story.split("\n"),
    }),
  });

  return response.json();
};
