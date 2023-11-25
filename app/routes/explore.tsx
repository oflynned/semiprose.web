import { Button, Excerpt, Layout, Prompt, Search } from "~/design-system";
import { Link, useNavigate } from "@remix-run/react";
import { pastStories, prompt } from "~/constants";
import { toCount } from "~/formatters";

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
          <p>
            {
              "It inspires wonder, awe, and a little magic. Next prompt in 3 days, 1 hour and 5 minutes."
            }
          </p>
          <Prompt {...prompt} />
          <div className={"flex justify-end"}>
            <Button
              variant={"outlined"}
              label={"Compose"}
              onClick={() => navigate("/compose")}
            />
          </div>
        </div>
        <div className={"flex flex-col gap-4"}>
          <h3 className={"font-medium text-2xl"}>{"Others wrote"}</h3>
          <div
            className={"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"}
          >
            {pastStories.map((story) => (
              <div className={"flex flex-col max-w-screen-md"} key={story.id}>
                <Link to={`/stories/${story.id}`}>
                  <Excerpt {...story} />
                </Link>
                <div className={"flex justify-between mx-8 my-4"}>
                  <div>
                    <p>{`@${story.author.username}`}</p>
                  </div>
                  <div className={"flex gap-2"}>
                    <div className={"flex gap-1"}>
                      <span className={"material-symbols-outlined"}>
                        trending_up
                      </span>
                      <p>{toCount(story.readership)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
