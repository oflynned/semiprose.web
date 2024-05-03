import type { FunctionComponent, PropsWithChildren } from "react";
import clsx from "clsx";

type Props = {
  border?: boolean;
};

export const Card: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  border = false,
}) => {
  return (
    <div
      className={clsx([
        "rounded-xl overflow-hidden",
        { "border border-gray-200": border },
      ])}
    >
      {children}
    </div>
  );
};
