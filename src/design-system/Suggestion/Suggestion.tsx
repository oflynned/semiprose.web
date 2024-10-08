import type { FunctionComponent } from "react";
import type { Suggestion as SuggestionType } from "../../types";
import clsx from "clsx";

type Props = {
  selected?: boolean;
  onClick?: () => void;
  suggestion: SuggestionType;
};

export const Suggestion: FunctionComponent<Props> = ({
  suggestion,
  onClick,
  selected,
}) => {
  return (
    <div
      className={clsx([
        "flex rounded-lg gap-2 items-center hover:bg-purple-100 active:bg-purple-200 cursor-pointer clickable p-2",
        { "bg-purple-200": selected },
      ])}
      onClick={onClick}
    >
      <div
        className={
          "flex rounded-lg border-2 items-center justify-center w-12 h-12 border-purple-300 bg-purple-100"
        }
      >
        <span className={"text-purple-500 font-medium"}>
          {suggestion.gradingWeight}
        </span>
      </div>
      <div className={"flex flex-col flex-1"}>
        <h5>{suggestion.title}</h5>
        <p
          className={clsx([
            "text-gray-400 text-sm text-ellipsis",
            { "text-gray-600": selected },
          ])}
        >
          {suggestion.conciseFeedback}
        </p>
      </div>
    </div>
  );
};
