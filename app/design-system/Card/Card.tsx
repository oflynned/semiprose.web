import type { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

type Props = {
  border?: boolean;
};

export const Card: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  border = false,
}) => {
  return (
    <div
      className={classNames([
        "rounded-2xl overflow-hidden",
        { "border border-gray-200": border },
      ])}
    >
      {children}
    </div>
  );
};
