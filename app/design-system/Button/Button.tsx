import type { FunctionComponent } from "react";
import classNames from "classnames";

type Props = {
  onClick?: () => void;
  visible?: boolean;
  label: string;
};

export const Button: FunctionComponent<Props> = ({
  onClick,
  label,
  visible = true,
}) => {
  return (
    <button
      className={classNames([
        "bg-black text-white rounded-xl py-2 px-8",
        visible ? "visible" : "invisible",
      ])}
      onClick={onClick}
    >
      <span className={"uppercase font-bold"}>{label}</span>
    </button>
  );
};
