import type { MetaFunction } from "@remix-run/node";
import { Card, NavigationBar } from "~/design-system";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <NavigationBar showCompose={true} titles={[""]} />
    </div>
  );
}
