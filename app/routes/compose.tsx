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

type ContentState = "disabled" | "clickable" | "loading" | "completed";

type FeedbackState =
  | { state: "open"; feedbackIndex: number }
  | { state: "closed" };

export default function Compose() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
          "flex gap-4",
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
          <Prompt {...prompt} />
          <div className={"flex flex-col gap-2"}>
            <textarea
              className={
                "border border-gray-100 focus:outline-gray-200 bg-gray-50 rounded-xl p-8"
              }
              rows={5}
              onChange={(e) => onTextChange(e.target.value)}
            />
          </div>
          <div className={"flex gap-4 w-full justify-end"}>
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
        <div className={"max-w-screen-md"}>
          <Feedback
            state={content.length === 0 ? "empty" : "completed"}
            improvements={content.length > 0 ? mockFeedback : []}
            selectedIndex={
              feedbackState.state === "open"
                ? feedbackState.feedbackIndex
                : undefined
            }
            onExpandFeedback={(index) => {
              setFeedbackState({ state: "open", feedbackIndex: index });
            }}
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
