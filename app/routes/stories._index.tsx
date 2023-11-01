import { Excerpt, Layout, Search } from "~/design-system";
import { Link } from "@remix-run/react";
import { pastStories } from "~/constants";

export default function Stories() {
  return (
    <Layout>
      <div className={"flex flex-col max-w-screen-md gap-8"}>
        <form>
          <Search onChange={(value) => console.log(value)} />
        </form>
        <div className={"flex flex-col gap-4"}>
          <h3 className={"font-medium text-2xl"}>{"October 2023"}</h3>
          {pastStories.map((story) => (
            <Link to={`/stories/${story.id}`} key={story.id}>
              <Excerpt {...story} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
