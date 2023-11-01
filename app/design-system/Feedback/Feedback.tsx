import type { ComponentProps, FunctionComponent } from "react";
import { Card } from "~/design-system";
import { toPercentage } from "~/formatters";
import { Improvement } from "./Improvement";

type FeedbackState = "empty" | "loading" | "completed";

type Props = {
  state: FeedbackState;
  improvements: ComponentProps<typeof Improvement>[];
};

export const Feedback: FunctionComponent<Props> = ({ improvements, state }) => {
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
                  key={`improvement-${index}`}
                  onClick={() => {
                    console.log(improvement);
                  }}
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
