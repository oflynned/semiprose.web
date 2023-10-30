import { Layout, Story } from "~/design-system";
import { story } from "~/constants";

export default function StoryDetail() {
  return (
    <Layout>
      <Story {...story} />
    </Layout>
  );
}
