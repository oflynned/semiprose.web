import type { Suggestion } from "~/types";

export const requestAnalysisAction = async (
  title: string,
  story: string
): Promise<Suggestion[]> => {
  const url = new URL("/analyser/feedback", process.env.REACT_APP_API_ENDPOINT);
  const response = await fetch(url, {
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
  const url = new URL("/story/draft", process.env.REACT_APP_API_ENDPOINT);
  const response = await fetch(url, {
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
  const url = new URL("/story", process.env.REACT_APP_API_ENDPOINT);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      paragraphs: story.split("\n"),
    }),
  });

  return response.json();
};
