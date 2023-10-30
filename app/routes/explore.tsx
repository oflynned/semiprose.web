import { Excerpt, Layout, Prompt } from "~/design-system";
import { Link } from "@remix-run/react";
import { prompt, story } from "~/constants";
import { Search } from "~/design-system/Search";

const stories = [story];

export default function Explore() {
  return (
    <Layout>
      <div className={"flex flex-col gap-8"}>
        <div className={"max-w-screen-md"}>
          <Search />
        </div>
        <div className={"flex flex-col max-w-screen-md gap-4"}>
          <h3 className={"font-medium text-2xl"}>{"This week's prompt"}</h3>
          <p>{"3 days, 1 hour and 5 minutes remaining"}</p>
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
