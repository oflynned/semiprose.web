import { Button, Layout, Prompt } from "~/design-system";
import { prompt } from "~/constants";

export default function Compose() {
  return (
    <Layout>
      <div className={"flex flex-col gap-4 max-w-screen-md"}>
        <h3 className={"text-4xl font-bold"}>{"Compose"}</h3>
        <Prompt {...prompt} />
        <div className={"flex flex-col gap-2"}>
          <label htmlFor="title">{"Title"}</label>
          <textarea
            className={"border-2 border-gray-100 bg-gray-50 rounded-xl p-8"}
            id="title"
            rows={5}
          />
        </div>
        <div className={"flex gap-4 w-full justify-end"}>
          <Button label={"Save"} />
          <Button label={"Publish"} />
        </div>
      </div>
    </Layout>
  );
}
