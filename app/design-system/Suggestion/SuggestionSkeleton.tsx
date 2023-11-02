import type { FunctionComponent } from "react";
import classNames from "classnames";

export const SuggestionSkeleton: FunctionComponent = () => {
  return (
    <div
      className={classNames(["flex rounded-lg gap-2 items-center px-4 py-2"])}
    >
      <div
        className={
          "flex rounded-lg border-2 items-center justify-center w-12 h-12 border-gray-300 bg-gray-100"
        }
      >
        <div className={"animate-pulse rounded-full bg-gray-300 h-3 w-6"} />
      </div>
      <div className={"flex flex-col flex-1 gap-2"}>
        <div className={"animate-pulse rounded-full bg-gray-300 h-3 w-32"} />
        <div className={"animate-pulse rounded-full bg-gray-300 h-3 w-full"} />
      </div>
    </div>
  );
};
