import { Button, Prompt } from "~/design-system";
import { prompt } from "~/constants";
import type { FunctionComponent } from "react";
import { useState } from "react";
import clsx from "clsx";

type ActionState = "disabled" | "clickable" | "loading" | "completed";

type Props = {
  publish?: (title: string, content: string) => Promise<void>;
  saveDraft?: (title: string, content: string) => Promise<void>;
  hidden?: boolean;
};

export const ComposeStory: FunctionComponent<Props> = ({
  hidden = false,
  publish,
  saveDraft,
}) => {
  const [debouncer, setDebouncer] = useState<NodeJS.Timeout | undefined>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [draftState, setDraftState] = useState<ActionState>("disabled");
  const [publishState, setPublishState] = useState<ActionState>("disabled");

  const debounce = (fn: () => Promise<void>) => {
    clearTimeout(debouncer);

    const newTimer = setTimeout(async () => {
      await fn();
    }, 3000);

    setDebouncer(newTimer);
  };

  const onClickPublish = async () => {
    setPublishState("loading");

    try {
      await publish?.(title, content);
      setPublishState("completed");
    } catch (e) {
      setPublishState("clickable");
    }
  };

  const onClickSaveDraft = async () => {
    setDraftState("loading");

    try {
      await saveDraft?.(title, content);
      setDraftState("completed");
    } catch (e) {
      setDraftState("clickable");
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

    debounce(async () => {
      await onClickSaveDraft();
    });
  };

  const isPublishDisabled =
    publishState === "disabled" || publishState === "completed";

  const isDraftDisabled =
    isPublishDisabled ||
    publishState === "loading" ||
    draftState === "disabled" ||
    draftState === "completed";

  return (
    <>
      <div className={clsx(["flex flex-col gap-8 flex-1", { hidden }])}>
        <input
          className={"text-4xl font-bold focus:outline-none"}
          placeholder={"Title"}
          value={title}
          onChange={(e) => {
            const reference = e.target.value;

            setTitle(reference);
            onTextChange(reference);
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
            const reference = e.target.value;

            setContent(reference);
            onTextChange(reference);
          }}
        />
        <div className={"flex gap-4 justify-end"}>
          <Button
            variant={"outlined"}
            label={draftState === "completed" ? "Draft saved" : "Save draft"}
            disabled={isDraftDisabled}
            loading={draftState === "loading"}
            onClick={onClickSaveDraft}
          />
          <Button
            label={"Publish"}
            disabled={isPublishDisabled}
            loading={publishState === "loading"}
            onClick={onClickPublish}
          />
        </div>
      </div>
    </>
  );
};
