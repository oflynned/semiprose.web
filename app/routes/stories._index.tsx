import { Excerpt, Layout, Prompt, Story } from "~/design-system";
import { Link } from "@remix-run/react";
import { story } from "~/constants";
import { Search } from "~/design-system/Search";

const stories = [story, story, story];

export default function Stories() {
  return (
    <Layout>
      <div className={"flex flex-col max-w-screen-md gap-8"}>
        <Search onChange={(value) => console.log(value)} />
        <div className={"flex flex-col gap-4"}>
          <h3 className={"font-medium text-2xl"}>{"October 2023"}</h3>
          {stories.map((story) => (
            <Link to={`/stories/${story.id}`}>
              <Excerpt {...story} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
