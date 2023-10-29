import type { MetaFunction } from "@remix-run/node";
import { Card } from "~/design-system";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className={"m-4"}>
      <Card>
        <div className={"flex w-fit m-4"}>
          <h1 className={"text-4xl"}>{"Semiprose"}</h1>
        </div>
      </Card>
    </div>
  );
}
