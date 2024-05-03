import type { ButtonHTMLAttributes, FunctionComponent } from "react";
import clsx from "clsx";
import { Spinner } from "../Spinner";

type Variant = "primary" | "outlined" | "text";

type Visibility = "visible" | "invisible" | "gone";

type ButtonState = "disabled" | "clickable" | "loading" | "completed" | "error";

type Props = {
  label: string;
  state?: ButtonState;
  variant?: Variant;
  visibility?: Visibility;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantMap: Record<Variant, string> = {
  primary: "bg-black text-white",
  outlined: "bg-white text-black border border-black",
  text: "bg-white text-black",
};

const interactionMap: Record<Variant, string> = {
  primary: "hover:bg-gray-800 active:bg-gray-600 hover:shadow active:shadow-md",
  outlined:
    "hover:bg-gray-100 active:bg-gray-200 hover:shadow active:shadow-md",
  text: "hover:bg-gray-100 active:bg-gray-200",
};

export const Button: FunctionComponent<Props> = ({
  onClick,
  state = "clickable",
  label,
  variant = "primary",
  visibility = "visible",
  disabled: overrideDisabled = false,
  ...props
}) => {
  const disabled = overrideDisabled || state === "disabled";
  const loading = state === "loading";

  return (
    <button
      {...props}
      className={clsx([
        "flex flex-row items-center justify-center gap-2 rounded-lg py-2 px-8",
        variantMap[variant],
        { [`${interactionMap[variant]} clickable`]: !(disabled || loading) },
        { "opacity-50 cursor-not-allowed": disabled || loading },
        visibility,
      ])}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? <Spinner /> : null}
      <span className={"uppercase font-bold"}>{label}</span>
    </button>
  );
};
