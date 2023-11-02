import { Layout } from "~/design-system";
import { ComposeStory, FeedbackCentre } from "~/features";
import { useState } from "react";

type DetailedFeedbackState = "open" | "closed";

const networkRequest = () =>
  new Promise((resolve) => setTimeout(resolve, 1000));

export default function Compose() {
  const [detailedFeedbackState, setDetailedFeedbackState] =
    useState<DetailedFeedbackState>("closed");

  return (
    <Layout>
      <div className={"flex gap-4 h-full justify-between"}>
        <ComposeStory
          hidden={detailedFeedbackState === "open"}
          saveDraft={async (title, content) => {
            await networkRequest();

            console.log("Saved draft", title, content);
          }}
          publish={async (title, content) => {
            await networkRequest();

            console.log("Published", title, content);
          }}
        />
        <FeedbackCentre
          onDetailedFeedbackAction={(open) => {
            setDetailedFeedbackState(open ? "open" : "closed");
          }}
        />
      </div>
    </Layout>
  );
}
