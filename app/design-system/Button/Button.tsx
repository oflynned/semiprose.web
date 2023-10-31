import type { ButtonHTMLAttributes, FunctionComponent } from "react";
import classNames from "classnames";

type Props = {
  label: string;
  visibility?: "visible" | "invisible" | "gone";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<Props> = ({
  onClick,
  label,
  disabled,
  visibility = "visible",
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames([
        "bg-black text-white rounded-xl py-2 px-8 hover:shadow-lg clickable",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "opacity-100 cursor-pointer",
        visibility,
      ])}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={"uppercase font-bold"}>{label}</span>
    </button>
  );
};
