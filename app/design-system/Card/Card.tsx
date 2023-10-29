import type { FunctionComponent, PropsWithChildren } from "react";

export const Card: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className={"rounded-xl border"}>{children}</div>;
};
