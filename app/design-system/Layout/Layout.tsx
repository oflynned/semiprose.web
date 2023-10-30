import { useLocation } from "@remix-run/react";
import type { FunctionComponent, PropsWithChildren } from "react";
import { NavigationBar } from "~/design-system";
import type { User } from "~/types";

const user: User = {
  id: "1",
  username: "wetdaddy69",
  initials: "WD",
};

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const [, page] = location.pathname.split("/");

  return (
    <div className={"flex flex-row"}>
      <NavigationBar page={page} user={user} />
      <div className={"m-8"}>{children}</div>
    </div>
  );
};
