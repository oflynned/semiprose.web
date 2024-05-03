import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { Feature, getFeatures } from "../features";

export type Flag = "ENABLED" | "DISABLED" | "PENDING";

export const FeatureContext = createContext<{
  waitlist: Flag;
  chatGptAnalysis: Flag;
}>({
  waitlist: "PENDING",
  chatGptAnalysis: "PENDING",
});

export const useFeature = () => useContext(FeatureContext);

export const FeatureProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [featureMap, setFeatureMap] = useState<
    Record<Feature, boolean> | undefined
  >();

  useEffect(() => {
    getFeatures().then(setFeatureMap).catch(console.error);
  }, []);

  const isFeatureEnabled = (feature: Feature): Flag =>
    featureMap ? (featureMap[feature] ? "ENABLED" : "DISABLED") : "PENDING";

  return (
    <FeatureContext.Provider
      value={{
        waitlist: isFeatureEnabled("ENABLE_APP"),
        chatGptAnalysis: isFeatureEnabled("ENABLE_ANALYSIS_FEATURE"),
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};
