import type { ComponentProps, FunctionComponent } from "react";
import { Suggestion, SuggestionSkeleton } from "../Suggestion";
import { Button } from "../Button";
import { isDefined } from "../../helpers";
import { Card } from "../Card";
import { Pill, PillSkeleton } from "../Pill";
import { toPercentage } from "../../formatters";
import { mockSuggestions } from "../../constants";
import { ResetFeedbackButton } from "../../features/Compose/FeedbackOverview/ResetFeedbackButton";
import { AnalyseButton } from "../../features/Compose/FeedbackOverview/AnalyseButton";

type Props = {
  suggestions?: ComponentProps<typeof Suggestion>["suggestion"][];
  analysisState?: ComponentProps<typeof Button>["state"];
  selectedIndex?: number;
  onExpandFeedback?: (index: number) => void;
  onRequestAnalysis?: () => void;
  onResetAnalysis?: () => void;
};

export const Feedback: FunctionComponent<Props> = ({
  suggestions,
  analysisState,
  selectedIndex,
  onExpandFeedback,
  onRequestAnalysis,
  onResetAnalysis,
}) => {
  const getScore = (suggestions: Props["suggestions"]) => {
    return (
      100 -
      (suggestions ?? []).reduce(
        (acc, { gradingWeight }) => acc + gradingWeight,
        0
      )
    );
  };

  const hideSuggestionList =
    analysisState === "disabled" ||
    (analysisState === "clickable" && !isDefined(suggestions));
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
            {analysisState === "loading" ? (
              <PillSkeleton />
            ) : analysisState === "completed" ? (
              <Pill label={"Excellent"} />
            ) : (
              <p>{"-"}</p>
            )}
          </div>
          <div className={"flex justify-between items-center"}>
            <h5 className={"font-medium"}>{"Writing score"}</h5>
            {analysisState === "loading" ? (
              <PillSkeleton />
            ) : analysisState === "completed" ? (
              <Pill label={toPercentage(getScore(suggestions))} />
            ) : (
              <p>{"-"}</p>
            )}
          </div>
        </div>
        {hideSuggestionList ? null : (
          <div className={"flex flex-col p-6 gap-2"}>
            {analysisState === "loading" ? (
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
          {analysisState === "completed" ? (
            <ResetFeedbackButton
              onClick={onResetAnalysis}
              state={"clickable"}
            />
          ) : null}
          <AnalyseButton onClick={onRequestAnalysis} state={analysisState} />
        </div>
      </div>
    </Card>
  );
};
