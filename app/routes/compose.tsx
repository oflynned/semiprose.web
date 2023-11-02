import {
  Button,
  Feedback,
  FeedbackDetail,
  Layout,
  Prompt,
} from "~/design-system";
import { mockSuggestions, prompt } from "~/constants";
import type { ComponentProps } from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDebounce } from "~/hooks";

type AnalysisState = ComponentProps<typeof Feedback>["analysis"];

type ActionState = "disabled" | "clickable" | "loading" | "completed";

type FeedbackState =
  | { state: "open"; feedbackIndex: number }
  | { state: "closed" };

export default function Compose() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const debouncedTitle = useDebounce(title);
  const debouncedContent = useDebounce(content);

  const [analysisState, setAnalysisState] = useState<AnalysisState>({
    state: "empty",
  });

  const [draftState, setDraftState] = useState<ActionState>("disabled");
  const [publishState, setPublishState] = useState<ActionState>("disabled");
  const [feedbackState, setFeedbackState] = useState<FeedbackState>({
    state: "closed",
  });

  const onPublish = () => {
    if (publishState === "clickable") {
      setPublishState("loading");

      setTimeout(() => {
        setPublishState("completed");
      }, 2000);
    }
  };

  const onSaveDraft = () => {
    if (draftState === "clickable") {
      setDraftState("loading");
      setTimeout(() => {
        setDraftState("completed");
      }, 2000);
    }
  };

  const onTextChange = (text: string) => {
    if (text.length === 0) {
      setDraftState("disabled");
      setPublishState("disabled");

      return;
    }

    if (text === content) {
      setDraftState("disabled");
      setPublishState("clickable");
      return;
    }

    setDraftState("clickable");
    setPublishState("clickable");
  };

  const onRequestAnalysis = () => {
    setAnalysisState({ state: "loading" });

    setTimeout(() => {
      setAnalysisState({ state: "completed", suggestions: mockSuggestions });
    }, 1500);
  };

  useEffect(() => {
    onSaveDraft();
  }, [debouncedTitle, debouncedContent]);

  const isPublishDisabled =
    publishState === "disabled" || publishState === "completed";

  const isDraftDisabled =
    isPublishDisabled ||
    publishState === "loading" ||
    draftState === "disabled" ||
    draftState === "completed";

  return (
    <Layout>
      <div
        className={clsx([
          "flex gap-4 h-full",
          { "justify-between": feedbackState.state === "closed" },
        ])}
      >
        <div
          className={clsx([
            "flex flex-col gap-8 max-w-screen-md",
            { hidden: feedbackState.state === "open" },
          ])}
        >
          <input
            className={"text-4xl font-bold focus:outline-none"}
            placeholder={"Title"}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              onTextChange(title);
            }}
          />
          <div className={"flex-1"}>
            <Prompt {...prompt} />
          </div>
          <textarea
            className={
              "border border-gray-100 focus:outline-gray-200 bg-gray-50 h-full rounded-xl p-8"
            }
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              onTextChange(content);
            }}
          />
          <div className={"flex gap-4 justify-end"}>
            <Button
              variant={"outlined"}
              label={draftState === "completed" ? "Draft saved" : "Save draft"}
              disabled={isDraftDisabled}
              loading={draftState === "loading"}
              onClick={onSaveDraft}
            />
            <Button
              label={"Publish"}
              disabled={isPublishDisabled}
              loading={publishState === "loading"}
              onClick={onPublish}
            />
          </div>
        </div>
        <div className={"max-w-screen-md min-w-[512px]"}>
          <Feedback
            analysis={analysisState}
            selectedIndex={
              feedbackState.state === "open"
                ? feedbackState.feedbackIndex
                : undefined
            }
            onExpandFeedback={(index) => {
              setFeedbackState({ state: "open", feedbackIndex: index });
            }}
            onRequestAnalysis={onRequestAnalysis}
            onResetAnalysis={() => setAnalysisState({ state: "empty" })}
          />
        </div>
        {feedbackState.state === "open" ? (
          <div className={"flex-1 max-w-screen-md"}>
            <FeedbackDetail
              improvement={mockSuggestions[feedbackState.feedbackIndex]}
              onClearFeedback={() => {
                setFeedbackState({ state: "closed" });
              }}
            />
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
