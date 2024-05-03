import type { FunctionComponent, PropsWithChildren } from "react";
import { NavigationBar } from "../NavigationBar";
import { useLocation } from "react-router";
import { User } from "../../types";

type Props = {
  user?: User;
};

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  user,
}) => {
  const location = useLocation();
  const [, page] = location.pathname.split("/");

  return (
    <section className={"flex"}>
      {user ? <NavigationBar pageId={page} user={user} /> : null}
      <main className={"p-8 flex-1"}>{children}</main>
    </section>
  );
};
