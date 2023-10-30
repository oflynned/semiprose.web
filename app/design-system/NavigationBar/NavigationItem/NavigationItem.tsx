import type { FunctionComponent } from "react";
import classNames from "classnames";

type Props = {
  active: boolean;
  label: string;
};

export const NavigationItem: FunctionComponent<Props> = ({ label, active }) => {
  return (
    <h3
      className={classNames([
        "text-2xl p-4 rounded-xl hover:bg-gray-100 active:bg-gray-200 font-bold clickable",
        { "bg-gray-100": active },
      ])}
    >
      {label}
    </h3>
  );
};
