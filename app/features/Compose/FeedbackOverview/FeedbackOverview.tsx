import type { ComponentProps, FunctionComponent } from "react";
import { useState } from "react";
import { Feedback, FeedbackDetail } from "~/design-system";
import type { Suggestion } from "~/types";
import { isDefined } from "~/helpers";

type AnalysisState = ComponentProps<typeof Feedback>["state"];

type Props = {
  text?: string;
  analysisState?: AnalysisState;
  suggestions?: Suggestion[];
  onRequestAnalysis?: (text: string) => void;
  onResetAnalysis?: () => void;
  onOpenFeedback?: () => void;
  onCloseFeedback?: () => void;
};

export const FeedbackOverview: FunctionComponent<Props> = ({
  analysisState,
  onOpenFeedback,
  onCloseFeedback,
  suggestions,
  onRequestAnalysis,
  onResetAnalysis,
  text = "",
}) => {
  const [index, setIndex] = useState<number>();

  return (
    <>
      <div className={"max-w-[420px] flex-1"}>
        <Feedback
          suggestions={suggestions}
          state={analysisState}
          selectedIndex={index}
          onExpandFeedback={(index) => {
            setIndex(index);
            onOpenFeedback?.();
          }}
          onRequestAnalysis={() => onRequestAnalysis?.(text)}
          onResetAnalysis={onResetAnalysis}
        />
      </div>
      {isDefined(suggestions) && isDefined(index) ? (
        <div className={"flex-1 max-w-screen-md"}>
          <FeedbackDetail
            improvement={suggestions[index]}
            onCloseFeedback={() => {
              setIndex(undefined);
              onCloseFeedback?.();
            }}
          />
        </div>
      ) : null}
    </>
  );
};
