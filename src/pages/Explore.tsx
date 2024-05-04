import { Button, Excerpt, Prompt, Search } from "../design-system";
import { pastStories, prompt } from "../constants";
import { toCount } from "../formatters";
import { useNavigate } from "react-router";

export const Explore = () => {
  const navigate = useNavigate();

  return (
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
        <div className={"gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
          {pastStories.map((story) => (
            <div
              className={"flex flex-col min-w-[400px] max-w-screen-md"}
              key={story.id}
            >
              <a href={`/stories/${story.id}`}>
                <Excerpt {...story} />
              </a>
              <div className={"flex justify-between mx-8 my-4"}>
                <div>
                  <p>{`@${story.author.username}`}</p>
                </div>
                <div className={"flex gap-1"}>
                  <span className={"material-symbols-outlined"}>
                    trending_up
                  </span>
                  <p>{toCount(story.readership)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
