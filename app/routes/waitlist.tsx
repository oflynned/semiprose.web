import { Waitlist } from "~/features";
import type { MetaFunction } from "@remix-run/node";
import { APP_NAME, TAGLINE } from "~/constants";

export const meta: MetaFunction = () => {
  return [
    { title: `${APP_NAME} | Waitlist` },
    { name: "description", content: TAGLINE },
  ];
};

export default function WaitlistPage() {
  return <Waitlist />;
}
