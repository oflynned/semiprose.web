import { Layout } from "~/design-system";
import { ComposeStory, FeedbackOverview } from "~/features";
import type { ComponentProps } from "react";
import { useState } from "react";
import { mockSuggestions } from "~/constants";
import type { Suggestion } from "~/types";
import { isDefined } from "~/helpers";

type FeedbackState = "open" | "closed";

const fakeRequest = (payload: unknown) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log({ payload });

      resolve();
    }, 1000);
  });

export default function Compose() {
  const [feedbackState, setFeedbackState] = useState<FeedbackState>("closed");

  const [content, setContent] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>();
  const [analysisState, setAnalysisState] =
    useState<ComponentProps<typeof FeedbackOverview>["analysisState"]>(
      "disabled"
    );

  return (
    <Layout>
      <div className={"flex gap-4 h-full justify-between"}>
        <ComposeStory
          hidden={feedbackState === "open"}
          onType={(text) => {
            setContent(text);
            setAnalysisState(
              text.length === 0
                ? "disabled"
                : isDefined(suggestions)
                ? "completed"
                : "clickable"
            );
          }}
          saveDraft={async (title, content) => {
            await fakeRequest({ title, content });
          }}
          publish={async (title, content) => {
            await fakeRequest({ title, content });
          }}
        />
        <FeedbackOverview
          analysisState={analysisState}
          text={content}
          suggestions={suggestions}
          onOpenFeedback={() => setFeedbackState("open")}
          onCloseFeedback={() => setFeedbackState("closed")}
          onResetAnalysis={() => {
            setSuggestions(undefined);
            setAnalysisState("disabled");
          }}
          onRequestAnalysis={async (text) => {
            setAnalysisState("loading");

            await fakeRequest({ text });

            setAnalysisState("completed");
            setSuggestions(mockSuggestions);
          }}
        />
      </div>
    </Layout>
  );
}
