export type Feature = "ENABLE_ANALYSIS_FEATURE" | "ENABLE_APP";

export const getFeedback = async () => {
  const url = new URL("/analyser/feedback", process.env.REACT_APP_API_ENDPOINT);
  const response = await fetch(url);

  return response.json();
};

export const getFeatures = async () => {
  const url = new URL("/feature-flags", process.env.REACT_APP_API_ENDPOINT);
  const response = await fetch(url);

  return response.json();
};
