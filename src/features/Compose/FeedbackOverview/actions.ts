export type Feature = "ENABLE_ANALYSIS_FEATURE" | "ENABLE_APP";

export const getFeedback = async () => {
  const url = new URL("/analyser/feedback", "http://localhost:3002");
  const response = await fetch(url);

  return response.json();
};

export const getFeatures = async () => {
  const url = new URL("/feature-flags", "http://localhost:3002");
  const response = await fetch(url);

  return response.json();
};
