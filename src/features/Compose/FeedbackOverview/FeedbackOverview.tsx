import type { ComponentProps, FunctionComponent } from "react";
import { useState } from "react";
import { Feedback, FeedbackDetail } from "../../../design-system";
import { isDefined } from "../../../helpers";

type Props = {
  onOpenPanel?: () => void;
} & Pick<
  ComponentProps<typeof Feedback>,
  "onRequestAnalysis" | "analysisState" | "suggestions" | "onResetAnalysis"
> &
  Pick<ComponentProps<typeof FeedbackDetail>, "onClosePanel">;

export const FeedbackOverview: FunctionComponent<Props> = ({
  onOpenPanel,
  onClosePanel,
  suggestions,
  ...props
}) => {
  const [index, setIndex] = useState<number>();

  const showDetailPanel = isDefined(suggestions) && isDefined(index);

  return (
    <>
      <div className={"max-w-[420px] flex-1"}>
        <Feedback
          suggestions={suggestions}
          selectedIndex={index}
          onExpandFeedback={(index) => {
            setIndex(index);
            onOpenPanel?.();
          }}
          {...props}
        />
      </div>
      {showDetailPanel ? (
        <div className={"flex-1 max-w-screen-md"}>
          <FeedbackDetail
            improvement={suggestions[index]}
            onClosePanel={() => {
              setIndex(undefined);
              onClosePanel?.();
            }}
          />
        </div>
      ) : null}
    </>
  );
};
