import {
  Button,
  Feedback,
  FeedbackDetail,
  Layout,
  Prompt,
} from "~/design-system";
import { mockFeedback, prompt } from "~/constants";
import { useState } from "react";
import classNames from "classnames";
import type { Improvement } from "~/types";

type ContentState = "disabled" | "clickable" | "loading" | "completed";

type FeedbackState =
  | { state: "open"; feedbackIndex: number }
  | { state: "closed" };

type AnalysisState =
  | { state: "empty" }
  | { state: "loading" }
  | { state: "completed"; improvements: Improvement[] }
  | { state: "cancelled" };

export default function Compose() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [analysisState, setAnalysisState] = useState<AnalysisState>({
    state: "empty",
  });

  const [draftState, setDraftState] = useState<ContentState>("disabled");
  const [publishState, setPublishState] = useState<ContentState>("disabled");
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
    const updatedContent = text.trim();

    setContent(updatedContent);

    if (updatedContent.length === 0) {
      setDraftState("disabled");
      setPublishState("disabled");

      return;
    }

    if (updatedContent === content) {
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
      setAnalysisState({ state: "completed", improvements: mockFeedback });
    }, 1500);
  };

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
        className={classNames([
          "flex gap-4 h-full",
          { "justify-between": feedbackState.state === "closed" },
        ])}
      >
        <div
          className={classNames([
            "flex flex-col gap-8 max-w-screen-md",
            { hidden: feedbackState.state === "open" },
          ])}
        >
          <input
            className={"text-4xl font-bold focus:outline-none"}
            placeholder={"Title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className={"flex-1"}>
            <Prompt {...prompt} />
          </div>
          <textarea
            className={
              "border border-gray-100 focus:outline-gray-200 bg-gray-50 h-full rounded-xl p-8"
            }
            value={content}
            onChange={(e) => onTextChange(e.target.value)}
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
            state={analysisState.state}
            improvements={
              analysisState.state === "completed"
                ? analysisState.improvements
                : []
            }
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
              improvement={mockFeedback[feedbackState.feedbackIndex]}
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
