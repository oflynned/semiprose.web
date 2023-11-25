import type { Suggestion } from "~/types";

export const requestAnalysisAction = async (
  title: string,
  story: string
): Promise<Suggestion[]> => {
  const url = new URL("/analyser/feedback", "http://localhost:3002");
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
  const url = new URL("/story/draft", "http://localhost:3002");
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
  const url = new URL("/story", "http://localhost:3002");
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

const fakeRequest = (payload: unknown) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log({ payload });

      resolve();
    }, 2000);
  });
