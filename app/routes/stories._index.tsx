import { Layout, Prompt } from "~/design-system";
import { PROMPT } from "~/constants";
import { Link, useNavigation } from "@remix-run/react";

export default function Stories() {
  return (
    <Layout>
      <div className={"flex flex-col max-w-screen-md gap-8"}>
        <h1 className={"font-medium text-2xl"}>{"This week"}</h1>
        <Link to={`/stories/id`}>
          <Prompt week={43} prompt={PROMPT} />
        </Link>
      </div>
    </Layout>
  );
}
