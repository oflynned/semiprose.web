import { Excerpt, Layout, Prompt, Story } from "~/design-system";
import { Link } from "@remix-run/react";
import { story } from "~/constants";

const stories = [story, story, story];

export default function Stories() {
  return (
    <Layout>
      <div className={"flex flex-col max-w-screen-md gap-4"}>
        {stories.map((story) => (
          <Link to={`/stories/${story.id}`}>
            <Excerpt {...story} />
          </Link>
        ))}
      </div>
    </Layout>
  );
}
