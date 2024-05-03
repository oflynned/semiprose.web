import type { FunctionComponent, PropsWithChildren } from "react";
import { NavigationBar } from "~/design-system";
import { user } from "~/constants";
import { useLocation } from "react-router";

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const [, page] = location.pathname.split("/");

  return (
    <section className={"flex"}>
      <NavigationBar pageId={page} user={user} />
      <main className={"p-8 flex-1"}>{children}</main>
    </section>
  );
};
