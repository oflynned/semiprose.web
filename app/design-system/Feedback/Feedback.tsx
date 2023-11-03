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
import { isDefined } from "~/helpers";

type AnalysisState =
  | "disabled"
  | "clickable"
  | "loading"
  | "completed"
  | "error";

type Props = {
  suggestions?: ComponentProps<typeof Suggestion>["suggestion"][];
  state?: AnalysisState;
  selectedIndex?: number;
  onExpandFeedback?: (index: number) => void;
  onRequestAnalysis?: () => void;
  onResetAnalysis?: () => void;
};

export const Feedback: FunctionComponent<Props> = ({
  suggestions,
  state,
  selectedIndex,
  onExpandFeedback,
  onRequestAnalysis,
  onResetAnalysis,
}) => {
  const getScore = (suggestions: Props["suggestions"] = []) => {
    return (
      100 -
      suggestions.reduce((acc, { gradingWeight }) => acc + gradingWeight, 0)
    );
  };

  const hideSuggestionList =
    state === "disabled" || (state === "clickable" && !isDefined(suggestions));
  const showSuggestions = isDefined(suggestions) && suggestions.length > 0;
  const showNoSuggestionsPossible =
    isDefined(suggestions) && suggestions.length === 0;

  return (
    <Card border>
      <div className={"flex flex-col divide-y"}>
        <div className={"flex flex-col p-8 gap-2"}>
          <h4 className={"font-bold text-2xl"}>{"Feedback"}</h4>
          <div className={"flex justify-between items-center gap-2"}>
            <h5 className={"font-medium"}>{"Impression"}</h5>
            {state === "loading" ? (
              <PillSkeleton />
            ) : state === "completed" ? (
              <Pill label={"Excellent"} />
            ) : (
              <p>{"-"}</p>
            )}
          </div>
          <div className={"flex justify-between items-center"}>
            <h5 className={"font-medium"}>{"Writing score"}</h5>
            {state === "loading" ? (
              <PillSkeleton />
            ) : state === "completed" ? (
              <Pill label={toPercentage(getScore(suggestions))} />
            ) : (
              <p>{"-"}</p>
            )}
          </div>
        </div>
        {hideSuggestionList ? null : (
          <div className={"flex flex-col p-6 gap-2"}>
            {state === "loading" ? (
              mockSuggestions
                .slice(0, 3)
                .map((_suggestion, index) => (
                  <SuggestionSkeleton key={`suggestion-${index}`} />
                ))
            ) : showSuggestions ? (
              suggestions.map((suggestion, index) => (
                <Suggestion
                  suggestion={suggestion}
                  selected={index === selectedIndex}
                  key={`suggestion-${index}`}
                  onClick={() => onExpandFeedback?.(index)}
                />
              ))
            ) : showNoSuggestionsPossible ? (
              <div className={"p-2"}>
                <p>{"Nothing to improve on yet. Congrats!"}</p>
              </div>
            ) : null}
          </div>
        )}
        <div className={"p-4 gap-2 flex justify-end"}>
          {state === "completed" ? (
            <Button
              label={"Reset"}
              variant="outlined"
              onClick={onResetAnalysis}
            />
          ) : null}
          <Button
            disabled={state === "disabled"}
            label={
              state === "loading"
                ? "Analysing"
                : state === "completed"
                ? "Analyse again"
                : "Analyse"
            }
            onClick={onRequestAnalysis}
          />
        </div>
      </div>
    </Card>
  );
};
