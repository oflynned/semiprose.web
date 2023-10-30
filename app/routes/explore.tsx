import { Excerpt, Layout, Prompt } from "~/design-system";
import { Link } from "@remix-run/react";
import { prompt, story } from "~/constants";

const stories = [story, story, story];

export default function Explore() {
  return (
    <Layout>
      <div className={"flex flex-col gap-8"}>
        <div className={"flex flex-col max-w-screen-md gap-4"}>
          <h1 className={"font-medium text-2xl"}>{"This week"}</h1>
          <Link to={"/compose"}>
            <Prompt {...prompt} />
          </Link>
        </div>
        <div className={"flex flex-col gap-4"}>
          <h1 className={"font-medium text-2xl"}>{"Others wrote"}</h1>
          <div className={"flex gap-4 overflow-scroll"}>
            {stories.map((story) => (
              <Link to={`/stories/${story.id}`}>
                <Excerpt {...story} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
