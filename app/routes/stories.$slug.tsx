import { Layout, Story } from "~/design-system";
import { PARAGRAPHS, PROMPT } from "~/constants";

export default function StoryDetail() {
  return (
    <Layout>
      <Story
        week={44}
        author={"exiled_druid"}
        publishedAt={new Date()}
        title={"The Door in the Forest"}
        prompt={PROMPT}
        paragraphs={PARAGRAPHS}
        duration={4}
        readership={1200}
        tags={["fantasy", "awe", "solitude", "escapism"]}
      />
    </Layout>
  );
}
