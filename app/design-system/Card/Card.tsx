import type { FunctionComponent, PropsWithChildren } from "react";

export const Card: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className={"rounded-2xl overflow-hidden"}>{children}</div>;
};
