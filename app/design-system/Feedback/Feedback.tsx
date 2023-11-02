import type { ComponentProps, FunctionComponent } from "react";
import { Button, Card, Pill } from "~/design-system";
import { toPercentage } from "~/formatters";
import { Improvement } from "./Improvement";
import { mockFeedback } from "~/constants";

type AnalysisState = "empty" | "loading" | "completed" | "cancelled";

type Props = {
  state: AnalysisState;
  improvements: ComponentProps<typeof Improvement>[];
  selectedIndex?: number;
  onExpandFeedback?: (index: number) => void;
  onRequestAnalysis?: () => void;
  onResetAnalysis?: () => void;
};

export const Feedback: FunctionComponent<Props> = ({
  improvements,
  state,
  selectedIndex,
  onExpandFeedback,
  onRequestAnalysis,
  onResetAnalysis,
}) => {
  const score = 100 - improvements.reduce((acc, { weight }) => acc + weight, 0);

  const getImpression = () => {
    if (score > 80) {
      return "Excellent";
    }

    if (score > 60) {
      return "Good";
    }

    if (score > 40) {
      return "Average";
    }

    if (score > 20) {
      return "Poor";
    }

    return "Very Poor";
  };

  return (
    <Card border>
      <div className={"flex flex-col divide-y"}>
        <div className={"flex flex-col p-8 gap-2"}>
          <h4 className={"font-bold text-xl"}>{"Feedback"}</h4>
          <div className={"flex justify-between items-center"}>
            <h5 className={"font-medium"}>{"Overall impression"}</h5>
            {state === "loading" ? (
              <div
                className={
                  "animate-pulse rounded-full bg-gray-300 w-[92px] h-3"
                }
              />
            ) : state === "completed" ? (
              <Pill label={getImpression()} />
            ) : (
              <p>{"-"}</p>
            )}
          </div>
          <div className={"flex justify-between items-center"}>
            <h5 className={"font-medium"}>{"Writing score"}</h5>
            <p>
              {state === "loading" ? (
                <div
                  className={
                    "animate-pulse rounded-full bg-gray-300 w-[48px] h-3"
                  }
                />
              ) : state === "completed" ? (
                <Pill label={toPercentage(score)} />
              ) : (
                <p>{"-"}</p>
              )}
            </p>
          </div>
        </div>
        {state === "empty" ? null : (
          <>
            <div className={"flex flex-col p-4 gap-2"}>
              {state === "loading" ? (
                mockFeedback.map((improvement, index) => (
                  <Improvement
                    {...improvement}
                    loading={true}
                    key={`improvement-${index}`}
                  />
                ))
              ) : improvements.length > 0 ? (
                improvements.map((improvement, index) => (
                  <Improvement
                    {...improvement}
                    selected={index === selectedIndex}
                    key={`improvement-${index}`}
                    onClick={() => onExpandFeedback?.(index)}
                  />
                ))
              ) : (
                <div className={"p-4"}>
                  <p>{"It looks like there isn't anything to improve on."}</p>
                </div>
              )}
            </div>
          </>
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
            label={
              state === "loading"
                ? "Analysing"
                : state === "completed"
                ? "Analyse again"
                : "Analyse"
            }
            loading={state === "loading"}
            onClick={onRequestAnalysis}
          />
        </div>
      </div>
    </Card>
  );
};
