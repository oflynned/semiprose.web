import { useLoaderData } from "@remix-run/react";
import type { Suggestion } from "~/types";
import type { LoaderFunction } from "@remix-run/node";
import type { ComponentProps } from "react";
import { ComposeStory } from "~/features/Compose/ComposeStory";
import { useState } from "react";
import { Layout } from "~/design-system";
import { isDefined } from "~/helpers";
import {
  publishStoryAction,
  requestAnalysisAction,
  saveDraftAction,
} from "~/features/Compose/actions";
import { FeedbackOverview } from "~/features/Compose/FeedbackOverview";

type Prompt = ComponentProps<typeof ComposeStory>["prompt"];

type FeedbackState = "open" | "closed";

type AnalysisState = ComponentProps<typeof FeedbackOverview>["analysisState"];

const getPrompt = async () => {
  const url = new URL("/prompt", process.env.REACT_APP_API_ENDPOINT);
  const response = await fetch(url);

  return response.json();
};

const getFeedback = async () => {
  const url = new URL("/analyser/feedback", process.env.REACT_APP_API_ENDPOINT);
  const response = await fetch(url);

  return response.json();
};

type LoaderData = {
  suggestions: Suggestion[];
  prompt: Prompt;
};

export const loader: LoaderFunction = async () => {
  const [suggestions, prompt] = await Promise.all([getFeedback(), getPrompt()]);

  return { suggestions, prompt };
};

export default function ComposeRoute() {
  const { suggestions, prompt } = useLoaderData<LoaderData>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [analysisState, setAnalysisState] = useState<AnalysisState>("disabled");
  const [feedbackState, setFeedbackState] = useState<FeedbackState>("closed");

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
      </div>
    </Layout>
  );
}
