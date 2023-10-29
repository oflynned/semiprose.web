import type { FunctionComponent } from "react";

type Props = {
  onClick?: () => void;
  label: string;
};

export const Button: FunctionComponent<Props> = ({ onClick, label }) => {
  return (
    <button
      className={"bg-black text-white rounded-xl py-2 px-8"}
      onClick={onClick}
    >
      <span className={"uppercase font-bold"}>{label}</span>
    </button>
  );
};
