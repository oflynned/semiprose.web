import type { FunctionComponent } from "react";
import clsx from "clsx";

type Props = {
  active?: boolean;
  label: string;
};

export const NavigationItem: FunctionComponent<Props> = ({
  label,
  active = false,
}) => (
  <h2
    className={clsx([
      "text-2xl p-4 rounded-xl hover:bg-gray-100 active:bg-gray-200 font-bold clickable",
      { "bg-gray-100": active },
    ])}
  >
    {label}
  </h2>
);
