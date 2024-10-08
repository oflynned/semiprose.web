import type { Suggestion } from "../types";
import { ComponentProps, useEffect, useState } from "react";
import { ComposeStory, FeedbackOverview } from "../features";
import { isDefined } from "../helpers";
import {
  publishStoryAction,
  requestAnalysisAction,
  saveDraftAction,
} from "../features/Compose/actions";
import { useFeature } from "../hooks";
import { Config } from "../data/config.ts";

type Prompt = ComponentProps<typeof ComposeStory>["prompt"];

type FeedbackState = "open" | "closed";

type AnalysisState = ComponentProps<typeof FeedbackOverview>["analysisState"];

export const Compose = () => {
  const [prompt, setPrompt] = useState<Prompt | undefined>();
  const [suggestions] = useState<Suggestion[] | undefined>();
  const { chatGptAnalysis } = useFeature();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [analysisState, setAnalysisState] = useState<AnalysisState>("disabled");
  const [feedbackState, setFeedbackState] = useState<FeedbackState>("closed");

  const getPrompt = async () => {
    const config = new Config();
    const response = await fetch(config.getEndpoint("/prompts/latest"));

    return response.json();
  };

  useEffect(() => {
    getPrompt().then(setPrompt);
  }, []);

  return (
    <div className={"flex gap-4 h-full justify-between"}>
      <ComposeStory
        prompt={prompt}
        hidden={feedbackState === "open"}
        onType={(title, content) => {
          setTitle(title);
          setContent(content);
          setAnalysisState(
            content.length < 100
              ? "disabled"
              : isDefined(suggestions)
              ? "completed"
              : "clickable"
          );
        }}
        saveDraft={async (title, content) => {
          try {
            await saveDraftAction(title, content);
          } catch (e) {
            console.error(e);
          }
        }}
        publish={async (title, content) => {
          try {
            await publishStoryAction(title, content);
          } catch (e) {
            console.error(e);
          }
        }}
      />
      {chatGptAnalysis === "ENABLED" ? (
        <FeedbackOverview
          analysisState={analysisState}
          suggestions={suggestions}
          onOpenPanel={() => setFeedbackState("open")}
          onClosePanel={() => setFeedbackState("closed")}
          onResetAnalysis={() => {
            setFeedbackState("closed");
            setAnalysisState("disabled");
          }}
          onRequestAnalysis={async () => {
            setAnalysisState("loading");

            try {
              await requestAnalysisAction(title, content);

              setAnalysisState("completed");
            } catch (e) {
              setAnalysisState("error");
            }
          }}
        />
      ) : null}
    </div>
  );
};
