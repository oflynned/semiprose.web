import { useContext } from "react";
import { FeatureContext } from "../context/feature.context";

export const useFeature = () => useContext(FeatureContext);
