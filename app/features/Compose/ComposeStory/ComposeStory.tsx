import { Prompt, StoryTitleInput, Paper } from "~/design-system";
import { prompt } from "~/constants";
import type { ComponentProps, FunctionComponent } from "react";
import { useState } from "react";
import clsx from "clsx";
import { SaveDraftButton } from "./SaveDraftButton";
import { PublishButton } from "./PublishButton";

type Props = {
  onType?: (text: string) => void;
  publish?: (title: string, content: string) => Promise<void>;
  saveDraft?: (title: string, content: string) => Promise<void>;
  hidden?: boolean;
};

type ButtonState = ComponentProps<typeof SaveDraftButton>["state"];

export const ComposeStory: FunctionComponent<Props> = ({
  hidden = false,
  onType,
  publish,
  saveDraft,
}) => {
  const [debouncer, setDebouncer] = useState<NodeJS.Timeout | undefined>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [draftState, setDraftState] = useState<ButtonState>("disabled");
  const [publishState, setPublishState] = useState<ButtonState>("disabled");

  const debounce = (fn: () => Promise<void>) => {
    if (debouncer) {
      clearTimeout(debouncer);
    }

    const newTimer = setTimeout(async () => {
      await fn();
    }, 1000);

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
    console.log("saving draft", content);

    setDraftState("loading");

    try {
      await saveDraft?.(title, content);
      setDraftState("completed");
    } catch (e) {
      setDraftState("clickable");
    }
  };

  const onTextChange = (text: string) => {
    onType?.(text);

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

    console.log("text before running debounce", text);
    setContent(text);

    debounce(async () => {
      await onClickSaveDraft();
    });
  };

  return (
    <>
      <div
        className={clsx([
          "flex flex-col gap-8 flex-1 max-w-screen-md",
          { hidden },
        ])}
      >
        <StoryTitleInput
          value={title}
          onChange={(value) => {
            setTitle(value);
            onTextChange(value);
          }}
        />
        <div className={"flex-1"}>
          <Prompt {...prompt} />
        </div>
        <Paper
          value={content}
          onChange={(value) => {
            setContent(value);
            onTextChange(value);
          }}
        />
        <div className={"flex gap-4 justify-end"}>
          <SaveDraftButton
            state={draftState}
            publishState={publishState}
            onClick={onClickSaveDraft}
          />
          <PublishButton state={publishState} onClick={onClickPublish} />
        </div>
      </div>
    </>
  );
};
