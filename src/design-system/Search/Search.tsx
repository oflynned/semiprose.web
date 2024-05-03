import type { FunctionComponent } from "react";

type Props = {
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const Search: FunctionComponent<Props> = ({
  placeholder = "Search...",
  onChange,
}) => {
  return (
    <input
      className={
        "bg-gray-50 rounded-lg text-sm border border-gray-200 overflow-hidden block w-full py-2 px-4 focus:border-blue-500"
      }
      placeholder={placeholder}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
};
