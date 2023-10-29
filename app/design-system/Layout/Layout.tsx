import { useLocation } from "@remix-run/react";
import type { FunctionComponent, PropsWithChildren } from "react";
import { NavigationBar } from "~/design-system";

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const [, page] = location.pathname.split("/");

  return (
    <div className={"flex flex-row"}>
      <NavigationBar page={page} />
      <div className={"m-8"}>{children}</div>
    </div>
  );
};
