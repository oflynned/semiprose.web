import type { FunctionComponent } from "react";
import type { Improvement as ImprovementType } from "~/types";
import classNames from "classnames";

type Props = {
  selected?: boolean;
  onClick?: () => void;
} & ImprovementType;

export const Improvement: FunctionComponent<Props> = ({
  title,
  shortDescription,
  weight,
  onClick,
  selected,
}) => {
  return (
    <div
      className={classNames([
        "flex rounded-lg gap-2 items-center hover:bg-purple-100 active:bg-purple-200 cursor-pointer clickable px-4 py-2",
        { "bg-purple-200": selected },
      ])}
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
        <p
          className={classNames([
            "text-gray-400 text-sm text-ellipsis",
            { "text-gray-600": selected },
          ])}
        >
          {shortDescription}
        </p>
      </div>
    </div>
  );
};
