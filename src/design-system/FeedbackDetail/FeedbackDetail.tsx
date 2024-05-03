import type { FunctionComponent } from "react";
import { Suggestion } from "../../types";
import { Card } from "../Card";
import { Button } from "../Button";

type Props = {
  improvement: Suggestion;
  onClosePanel?: () => void;
};

export const FeedbackDetail: FunctionComponent<Props> = ({
  improvement,
  onClosePanel,
}) => {
  return (
    <Card border>
      <div className={"flex flex-col gap-4 p-8"}>
        <h3 className={"font-bold text-2xl"}>{improvement.title}</h3>
        <p className={"leading-relaxed"}>{improvement.indepthFeedback}</p>
        <p className={"leading-relaxed"}>{improvement.example}</p>
        <div className={"flex justify-end"}>
          <Button label={"Close"} variant={"text"} onClick={onClosePanel} />
        </div>
      </div>
    </Card>
  );
};
