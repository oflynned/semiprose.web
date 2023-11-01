import type { FunctionComponent } from "react";
import type { Improvement } from "~/types";
import { Button, Card } from "~/design-system";

type Props = {
  improvement: Improvement;
  onClearFeedback?: () => void;
};

export const FeedbackDetail: FunctionComponent<Props> = ({
  improvement,
  onClearFeedback,
}) => {
  return (
    <Card border>
      <div className={"flex flex-col gap-4 p-8"}>
        <h3 className={"font-bold text-2xl"}>{improvement.title}</h3>
        <p className={"leading-relaxed"}>{improvement.description}</p>
        <p className={"leading-relaxed"}>{improvement.example}</p>
        <div className={"flex justify-end"}>
          <Button
            label={"Return"}
            variant={"outlined"}
            onClick={onClearFeedback}
          />
        </div>
      </div>
    </Card>
  );
};
