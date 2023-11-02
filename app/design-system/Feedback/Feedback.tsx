import type { ComponentProps, FunctionComponent } from "react";
import {
  Suggestion,
  Button,
  Card,
  Pill,
  PillSkeleton,
  SuggestionSkeleton,
} from "~/design-system";
import { toPercentage } from "~/formatters";
import { mockSuggestions } from "~/constants";

type AnalysisState =
  | { state: "empty" }
  | { state: "loading" }
  | { state: "completed"; suggestions: ComponentProps<typeof Suggestion>[] }
  | { state: "cancelled" };

type Props = {
  analysis: AnalysisState;
  selectedIndex?: number;
  onExpandFeedback?: (index: number) => void;
  onRequestAnalysis?: () => void;
  onResetAnalysis?: () => void;
};

export const Feedback: FunctionComponent<Props> = ({
  analysis,
  selectedIndex,
  onExpandFeedback,
  onRequestAnalysis,
  onResetAnalysis,
}) => {
  const getScore = (suggestions: ComponentProps<typeof Suggestion>[]) => {
    return (
      100 -
      suggestions.reduce((acc, { gradingWeight }) => acc + gradingWeight, 0)
    );
  };

  return (
    <Card border>
      <div className={"flex flex-col divide-y"}>
        <div className={"flex flex-col p-8 gap-2"}>
          <h4 className={"font-bold text-xl"}>{"Feedback"}</h4>
          <div className={"flex justify-between items-center"}>
            <h5 className={"font-medium"}>{"Overall impression"}</h5>
            {analysis.state === "loading" ? (
              <PillSkeleton />
            ) : analysis.state === "completed" ? (
              <Pill label={"Excellent"} />
            ) : (
              <p>{"-"}</p>
            )}
          </div>
          <div className={"flex justify-between items-center"}>
            <h5 className={"font-medium"}>{"Writing score"}</h5>
            <p>
              {analysis.state === "loading" ? (
                <PillSkeleton />
              ) : analysis.state === "completed" ? (
                <Pill label={toPercentage(getScore(analysis.suggestions))} />
              ) : (
                <p>{"-"}</p>
              )}
            </p>
          </div>
        </div>
        {analysis.state === "empty" ? null : (
          <>
            <div className={"flex flex-col p-4 gap-2"}>
              {analysis.state === "loading" ? (
                mockSuggestions
                  .slice(0, 3)
                  .map((_suggestion, index) => (
                    <SuggestionSkeleton key={`suggestion-${index}`} />
                  ))
              ) : analysis.state === "completed" &&
                analysis.suggestions.length > 0 ? (
                analysis.suggestions.map((suggestion, index) => (
                  <Suggestion
                    {...suggestion}
                    selected={index === selectedIndex}
                    key={`suggestion-${index}`}
                    onClick={() => onExpandFeedback?.(index)}
                  />
                ))
              ) : (
                <div className={"p-4"}>
                  <p>
                    {
                      "It looks like there isn't anything to improve on yet. Congrats!"
                    }
                  </p>
                </div>
              )}
            </div>
          </>
        )}
        <div className={"p-4 gap-2 flex justify-end"}>
          {analysis.state === "completed" ? (
            <Button
              label={"Reset"}
              variant="outlined"
              onClick={onResetAnalysis}
            />
          ) : null}
          <Button
            label={
              analysis.state === "loading"
                ? "Analysing"
                : analysis.state === "completed"
                ? "Analyse again"
                : "Analyse"
            }
            loading={analysis.state === "loading"}
            onClick={onRequestAnalysis}
          />
        </div>
      </div>
    </Card>
  );
};
