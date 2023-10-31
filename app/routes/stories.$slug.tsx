import { Layout, Story } from "~/design-system";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { pastStories } from "~/constants";

export const loader: LoaderFunction = async ({ params }) => {
  return json({
    story: pastStories.filter((story) => story.id === params.slug)[0],
  });
};

export default function StoryDetail() {
  const { story } = useLoaderData<typeof loader>();

  return (
    <Layout>{story ? <Story {...story} /> : <p>{"Story not found"}</p>}</Layout>
  );
}
