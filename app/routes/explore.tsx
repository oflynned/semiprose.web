import { Button, Excerpt, Layout, Prompt, Search } from "~/design-system";
import { Link, useNavigate } from "@remix-run/react";
import { prompt, story } from "~/constants";

const stories = [story];

export default function Explore() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className={"flex flex-col gap-8"}>
        <div className={"max-w-screen-md"}>
          <Search />
        </div>
        <div className={"flex flex-col max-w-screen-md gap-4"}>
          <h3 className={"font-medium text-2xl"}>{"This week's prompt"}</h3>
          <p>{"3 days, 1 hour and 5 minutes until the next challenge."}</p>
          <Prompt {...prompt} />
          <div className={"flex justify-end"}>
            <Button label={"Compose"} onClick={() => navigate("/compose")} />
          </div>
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
