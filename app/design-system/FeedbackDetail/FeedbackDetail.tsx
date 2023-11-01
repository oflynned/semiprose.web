import type { FunctionComponent } from "react";
import type { Improvement, Story } from "~/types";
import { Button, Card } from "~/design-system";

type Props = {
  improvement: Improvement;
  story: Story;
  onClearFeedback?: () => void;
};

export const FeedbackDetail: FunctionComponent<Props> = ({
  improvement,
  story,
  onClearFeedback,
}) => {
  return (
    <Card border>
      <div className={"flex flex-col gap-4 p-8"}>
        <h3 className={"font-bold text-2xl"}>{improvement.title}</h3>
        <p>{improvement.description}</p>
        <h4>{"Example"}</h4>
        <div className={"flex flex-col divider-y gap-2 leading-loose"}>
          <p>{story.paragraphs[0]}</p>
        </div>
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
