import type { FunctionComponent } from "react";
import type { Feedback } from "~/types";

type Props = {
  onClick?: () => void;
} & Feedback;

export const Improvement: FunctionComponent<Props> = ({
  title,
  shortDescription,
  weight,
  onClick,
}) => {
  return (
    <div
      className={
        "flex rounded-lg gap-2 items-center hover:bg-purple-100 active:bg-purple-200 cursor-pointer clickable px-4 py-2"
      }
      onClick={onClick}
    >
      <div
        className={
          "flex rounded-lg border border-purple-300 bg-purple-100 items-center justify-center w-12 h-12"
        }
      >
        <span className={"text-purple-500 font-medium"}>{weight}</span>
      </div>
      <div className={"flex flex-col flex-1"}>
        <h5>{title}</h5>
        <p className={"text-gray-400 text-sm text-ellipsis"}>
          {shortDescription}
        </p>
      </div>
    </div>
  );
};
