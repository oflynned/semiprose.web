import type { FunctionComponent } from "react";
import type { Improvement as ImprovementType } from "~/types";
import classNames from "classnames";

type Props = {
  loading?: boolean;
  selected?: boolean;
  onClick?: () => void;
} & ImprovementType;

export const Improvement: FunctionComponent<Props> = ({
  title,
  shortDescription,
  loading,
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
        className={classNames([
          "flex rounded-lg border-2 items-center justify-center w-12 h-12",
          { "border-gray-300 bg-gray-100": loading },
          { "border-purple-300 bg-purple-100": !loading },
        ])}
      >
        {loading ? (
          <div className={"animate-pulse rounded-full bg-gray-300 h-3 w-6"} />
        ) : (
          <span className={"text-purple-500 font-medium"}>{weight}</span>
        )}
      </div>
      <div
        className={classNames(["flex flex-col flex-1", { "gap-2": loading }])}
      >
        {loading ? (
          <div className={"animate-pulse rounded-full bg-gray-300 h-3 w-32"} />
        ) : (
          <h5>{title}</h5>
        )}
        {loading ? (
          <div
            className={"animate-pulse rounded-full bg-gray-300 h-3 w-full"}
          />
        ) : (
          <p
            className={classNames([
              "text-gray-400 text-sm text-ellipsis",
              { "text-gray-600": selected },
            ])}
          >
            {shortDescription}
          </p>
        )}
      </div>
    </div>
  );
};
