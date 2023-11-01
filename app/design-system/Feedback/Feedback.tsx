import type { ComponentProps, FunctionComponent } from "react";
import { Card } from "~/design-system";
import { toPercentage } from "~/formatters";
import { Improvement } from "./Improvement";

type FeedbackState = "empty" | "loading" | "completed";

type Props = {
  state: FeedbackState;
  selectedIndex?: number;
  improvements: ComponentProps<typeof Improvement>[];
  onExpandFeedback?: (index: number) => void;
};

export const Feedback: FunctionComponent<Props> = ({
  improvements,
  selectedIndex,
  state,
  onExpandFeedback,
}) => {
  const score = 100 - improvements.reduce((acc, { weight }) => acc + weight, 0);

  return (
    <Card border>
      <div className={"flex flex-col divide-y"}>
        <div className={"flex flex-col p-8 gap-2"}>
          <h4 className={"font-bold text-xl"}>{"Feedback"}</h4>
          <div className={"flex justify-between"}>
            <h5 className={"font-medium"}>{"Overall impression"}</h5>
            <p>{"Excellent"}</p>
          </div>
          <div className={"flex justify-between"}>
            <h5 className={"font-medium"}>{"Writing score"}</h5>
            <p>{state === "empty" ? "-" : toPercentage(score)}</p>
          </div>
        </div>
        <>
          <div className={"flex flex-col p-4 gap-2"}>
            {improvements.length > 0 ? (
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
      </div>
    </Card>
  );
};
