import { Comment, Layout, Story } from "~/design-system";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { pastStories } from "~/constants";
import type { Story as StoryType } from "~/types";
import { json } from "@remix-run/node";

type LoaderData = {
  story: Awaited<StoryType | undefined>;
};

export const loader: LoaderFunction = async ({ params }) => {
  const story = pastStories.find((story) => story.id === params.slug);

  return json<LoaderData>({ story });
};

export default function StoryDetail() {
  const { story } = useLoaderData<LoaderData>();

  return (
    <Layout>
      {story ? (
        <div className={"flex flex-col gap-4 max-w-screen-md"}>
          <Story {...story} />
          <h3 className={"text-2xl font-medium"}>{"Comments"}</h3>
          <div className={"flex flex-col gap-2"}>
            {story.comments.map((comment) => (
              <Comment {...comment} key={comment.id} />
            ))}
          </div>
        </div>
      ) : (
        <p>{"Story not found"}</p>
      )}
    </Layout>
  );
}
