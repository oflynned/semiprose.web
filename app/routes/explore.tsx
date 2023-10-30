import { Excerpt, Layout, Prompt } from "~/design-system";
import { Link } from "@remix-run/react";
import { prompt, story } from "~/constants";

const stories = [story];

export default function Explore() {
  return (
    <Layout>
      <div className={"flex flex-col gap-8"}>
        <div className={"max-w-screen-md"}>
          <input
            className={
              "bg-gray-50 rounded-lg text-sm border border-gray-200 overflow-hidden block w-full py-2 px-4 focus:border-blue-500"
            }
            placeholder={"Search..."}
          />
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
