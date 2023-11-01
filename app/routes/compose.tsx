import { Button, Layout, Prompt } from "~/design-system";
import { prompt } from "~/constants";
import { useState } from "react";

type ContentState = "disabled" | "clickable" | "loading" | "completed";

export default function Compose() {
  const [content, setContent] = useState("");
  const [draftState, setDraftState] = useState<ContentState>("disabled");
  const [publishState, setPublishState] = useState<ContentState>("disabled");

  const handlePublish = () => {
    if (publishState === "clickable") {
      setPublishState("loading");

      setTimeout(() => {
        setPublishState("completed");
      }, 2000);
    }
  };

  const handleSaveDraft = () => {
    if (draftState === "clickable") {
      setDraftState("loading");
      setTimeout(() => {
        setDraftState("completed");
      }, 2000);
    }
  };

  const handleTextChange = (text: string) => {
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
      <div className={"flex flex-col gap-8 max-w-screen-md"}>
        <input
          className={"text-4xl font-bold focus:outline-none"}
          placeholder={"Title"}
        />
        <Prompt {...prompt} />
        <div className={"flex flex-col gap-2"}>
          <textarea
            className={
              "border border-gray-100 focus:outline-gray-200 bg-gray-50 rounded-xl p-8"
            }
            id="title"
            rows={5}
            onChange={(e) => handleTextChange(e.target.value)}
          />
        </div>
        <div className={"flex gap-4 w-full justify-end"}>
          <Button
            variant={"outlined"}
            label={draftState === "completed" ? "Draft saved" : "Save draft"}
            disabled={isDraftDisabled}
            loading={draftState === "loading"}
            onClick={handleSaveDraft}
          />
          <Button
            label={"Publish"}
            disabled={isPublishDisabled}
            loading={publishState === "loading"}
            onClick={handlePublish}
          />
        </div>
      </div>
    </Layout>
  );
}
