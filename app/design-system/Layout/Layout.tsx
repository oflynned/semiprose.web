import type { FunctionComponent, PropsWithChildren } from "react";
import { NavigationBar } from "~/design-system";

type Props = {
  currentUrl: string;
};

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  currentUrl,
  children,
}) => {
  return (
    <div className={"flex flex-row"}>
      <NavigationBar currentUrl={currentUrl} />
      <div className={"m-8"}>{children}</div>
    </div>
  );
};
