import type { ComponentProps, FunctionComponent } from "react";
import { useState } from "react";
import { Feedback, FeedbackDetail } from "~/design-system";
import { mockSuggestions } from "~/constants";

type AnalysisState = ComponentProps<typeof Feedback>["analysis"];

type Props = {
  onDetailedFeedbackAction?: (open: boolean) => void;
  onAnalysisComplete?: (analysis: AnalysisState) => void;
};

export const FeedbackCentre: FunctionComponent<Props> = ({
  onDetailedFeedbackAction,
  onAnalysisComplete,
}) => {
  const [analysisState, setAnalysisState] = useState<AnalysisState>({
    state: "empty",
  });

  const [open, setOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<number | undefined>(
    undefined
  );

  const onRequestAnalysis = () => {
    setAnalysisState({ state: "loading" });

    setTimeout(() => {
      setAnalysisState({ state: "completed", suggestions: mockSuggestions });
    }, 1500);
  };

  return (
    <>
      <div className={"max-w-screen-sm flex-1"}>
        <Feedback
          analysis={analysisState}
          selectedIndex={selectedFeedback}
          onExpandFeedback={(index) => {
            setOpen(true);
            setSelectedFeedback(index);
            onDetailedFeedbackAction?.(true);
          }}
          onRequestAnalysis={onRequestAnalysis}
          onResetAnalysis={() => setAnalysisState({ state: "empty" })}
        />
      </div>
      {open ? (
        <div className={"flex-1 max-w-screen-md"}>
          <FeedbackDetail
            improvement={mockSuggestions[selectedFeedback ?? 0]}
            onClearFeedback={() => {
              onDetailedFeedbackAction?.(false);
              setSelectedFeedback(undefined);
              setOpen(false);
            }}
          />
        </div>
      ) : null}
    </>
  );
};
