import type { FunctionComponent } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const StoryTitleInput: FunctionComponent<Props> = ({
  value,
  onChange,
}) => {
  return (
    <input
      className={"text-4xl font-bold focus:outline-none"}
      placeholder={"Title"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
