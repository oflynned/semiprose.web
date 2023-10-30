import { Excerpt, Layout, Prompt } from "~/design-system";
import { Link } from "@remix-run/react";
import { prompt, story } from "~/constants";

const stories = [story];

export default function Explore() {
  return (
    <Layout>
      <div className={"flex flex-col gap-8"}>
        <div className={"flex flex-col max-w-screen-md gap-4"}>
          <h3 className={"font-medium text-2xl"}>{"This week"}</h3>
          <Link to={"/compose"}>
            <Prompt {...prompt} />
          </Link>
        </div>
        <div className={"flex flex-col gap-4"}>
          <h3 className={"font-medium text-2xl"}>{"Others wrote"}</h3>
          <div className={"flex gap-4 overflow-scroll"}>
            {stories.map((story) => (
              <Link to={`/stories/${story.id}`} key={story.id}>
                <Excerpt {...story} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
