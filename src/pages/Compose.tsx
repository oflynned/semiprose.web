import type { Suggestion } from "~/types";
import type { ComponentProps } from "react";
import { ComposeStory, FeedbackOverview, Feature } from "~/features";
import { useState } from "react";
import { Layout } from "~/design-system";
import { isDefined } from "~/helpers";
import {
  publishStoryAction,
  requestAnalysisAction,
  saveDraftAction,
} from "~/features/Compose/actions";

type Prompt = ComponentProps<typeof ComposeStory>["prompt"];

type FeedbackState = "open" | "closed";

type AnalysisState = ComponentProps<typeof FeedbackOverview>["analysisState"];

// const getPrompt = async () => {
//   const url = new URL("/prompts/latest", process.env.REACT_APP_API_ENDPOINT);
//   const response = await fetch(url);
//
//   return response.json();
// };
//
// type LoaderData = {
//   suggestions: Suggestion[];
//   prompt: Prompt;
//   features: Record<string, boolean>;
// };
//
// export const get = async () => {
//   const [suggestions, prompt, features] = await Promise.all([
//     getFeedback(),
//     getPrompt(),
//     getFeatures(),
//   ]);
//
//   return { suggestions, prompt, features };
// };

export const Compose = () => {
  const [prompt] = useState<Prompt | undefined>();
  const [suggestions] = useState<Suggestion[] | undefined>();
  const [features] = useState<Feature[] | undefined>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [analysisState, setAnalysisState] = useState<AnalysisState>("disabled");
  const [feedbackState, setFeedbackState] = useState<FeedbackState>("closed");

  const enableFeedback = false;

  if (!prompt || !suggestions || !features) {
    return null;
  }

  return (
    <Layout>
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
        {enableFeedback ? (
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
    </Layout>
  );
};
