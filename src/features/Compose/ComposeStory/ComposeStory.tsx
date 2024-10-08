import type { ComponentProps, FunctionComponent } from "react";
import { useState } from "react";
import clsx from "clsx";
import { SaveDraftButton } from "./SaveDraftButton";
import { PublishButton } from "./PublishButton";
import {
  Paper,
  Prompt,
  PromptSkeleton,
  StoryTitleInput,
} from "../../../design-system";

type Props = {
  prompt?: ComponentProps<typeof Prompt>;
  onType?: (title: string, content: string) => void;
  publish?: (title: string, content: string) => Promise<void>;
  saveDraft?: (title: string, content: string) => Promise<void>;
  hidden?: boolean;
};

type ButtonState = ComponentProps<typeof SaveDraftButton>["state"];

export const ComposeStory: FunctionComponent<Props> = ({
  prompt,
  hidden = false,
  onType,
  publish,
  saveDraft,
}) => {
  const [debouncer, setDebouncer] = useState<NodeJS.Timeout>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [draftState, setDraftState] = useState<ButtonState>("disabled");
  const [publishState, setPublishState] = useState<ButtonState>("disabled");

  const debounce = (fn: () => Promise<void>) => {
    if (debouncer) {
      clearTimeout(debouncer);
    }

    const newTimer = setTimeout(() => fn(), 1000);

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

  const onTextChange = (storyTitle: string, storyContent: string) => {
    onType?.(storyTitle, storyContent);

    if (storyContent.length === 0) {
      setDraftState("disabled");
      setPublishState("disabled");

      return;
    }

    if (storyContent === content) {
      setDraftState("disabled");
      setPublishState("clickable");
      return;
    }

    setDraftState("clickable");
    setPublishState("clickable");

    setContent(storyContent);

    debounce(async () => {
      await onClickSaveDraft();
    });
  };

  return (
    <>
      <div
        className={clsx([
          "flex flex-col gap-8 flex-1 max-w-screen-lg",
          { hidden },
        ])}
      >
        <StoryTitleInput
          value={title}
          onChange={(value) => {
            onTextChange(value, content);
            setTitle(value);
          }}
        />
        <div className={"flex flex-col flex-1 gap-8"}>
          {prompt ? <Prompt {...prompt} /> : <PromptSkeleton />}
          <Paper
            value={content}
            onChange={(value) => {
              onTextChange(title, value);
              setContent(value);
            }}
          />
        </div>
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
