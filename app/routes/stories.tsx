import { Layout, Prompt } from "~/design-system";
import { PROMPT } from "~/constants";

export default function Index() {
  return (
    <Layout currentUrl={"/stories"}>
      <div className={"flex flex-col max-w-screen-md gap-8"}>
        <h1 className={"font-medium text-2xl"}>{"This week"}</h1>
        <Prompt
          id={"id"}
          week={43}
          prompt={PROMPT}
          onClick={(id) => {
            console.log("woooooooo");
          }}
        />
      </div>
    </Layout>
  );
}
