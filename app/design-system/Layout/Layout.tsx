import { useLocation } from "@remix-run/react";
import type { FunctionComponent, PropsWithChildren } from "react";
import { NavigationBar } from "~/design-system";
import { user } from "~/constants";

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const [, page] = location.pathname.split("/");

  return (
    <section className={"flex"}>
      <NavigationBar page={page} user={user} />
      <main className={"p-8 flex-1"}>{children}</main>
    </section>
  );
};
