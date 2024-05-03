import { Excerpt, Layout, Search } from "../../design-system";
import { pastStories } from "../../constants";
import { useFirebase } from "../../hooks";

export const Stories = () => {
  const { user } = useFirebase();

  return (
    <Layout user={user}>
      <div className={"flex flex-col max-w-screen-md gap-8"}>
        <form>
          <Search onChange={(value) => console.log(value)} />
        </form>
        <div className={"flex flex-col gap-4"}>
          <h3 className={"font-medium text-2xl"}>{"October 2023"}</h3>
          {pastStories.map((story) => (
            <a href={`/stories/${story.id}`} key={story.id}>
              <Excerpt {...story} />
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};
