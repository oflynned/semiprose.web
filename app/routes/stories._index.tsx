import { Excerpt, Layout, Search } from "~/design-system";
import { Link } from "@remix-run/react";
import { story } from "~/constants";

const stories = [story];

export default function Stories() {
  return (
    <Layout>
      <div className={"flex flex-col max-w-screen-md gap-8"}>
        <Search onChange={(value) => console.log(value)} />
        <div className={"flex flex-col gap-4"}>
          <h3 className={"font-medium text-2xl"}>{"October 2023"}</h3>
          {stories.map((story) => (
            <Link to={`/stories/${story.id}`} key={story.id}>
              <Excerpt {...story} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
