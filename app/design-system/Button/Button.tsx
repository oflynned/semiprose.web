import type { ButtonHTMLAttributes, FunctionComponent } from "react";
import classNames from "classnames";
import { Spinner } from "~/design-system";

type Variant = "primary" | "outlined" | "text";

type Visibility = "visible" | "invisible" | "gone";

type Props = {
  label: string;
  loading?: boolean;
  variant?: Variant;
  visibility?: Visibility;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<Variant, string> = {
  primary: "bg-black text-white",
  outlined: "bg-white text-black border border-black",
  text: "bg-white text-black",
};

const interactivity: Record<Variant, string> = {
  primary: "hover:bg-gray-800 active:bg-gray-600 hover:shadow active:shadow-md",
  outlined:
    "hover:bg-gray-100 active:bg-gray-200 hover:shadow active:shadow-md",
  text: "hover:bg-gray-100 active:bg-gray-200",
};

export const Button: FunctionComponent<Props> = ({
  onClick,
  label,
  variant = "primary",
  disabled = false,
  loading = false,
  visibility = "visible",
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames([
        variants[variant],
        "rounded-lg py-2 px-8",
        { [`${interactivity[variant]} clickable`]: !disabled && !loading },
        { "opacity-50 cursor-not-allowed": disabled },
        { "cursor-not-allowed": loading },
        visibility,
      ])}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? (
        <Spinner />
      ) : (
        <span className={"uppercase font-bold"}>{label}</span>
      )}
    </button>
  );
};
