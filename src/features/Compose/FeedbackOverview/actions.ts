import { Config } from "../../../data/config.ts";

export type Feature = "ENABLE_ANALYSIS_FEATURE" | "ENABLE_APP";

export const getFeedback = async () => {
  const config = new Config();
  const response = await fetch(config.getEndpoint("/analyser/feedback"));

  return response.json();
};

export const getFeatures = async () => {
  const config = new Config();
  const response = await fetch(config.getEndpoint("/feature-flags"));

  return response.json();
};
