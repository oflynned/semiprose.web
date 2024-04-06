import type { FunctionComponent } from "react";

type Props = {
  value: string;
  onChange?: (value: string) => void;
};

export const Paper: FunctionComponent<Props> = ({ value, onChange }) => {
  return (
    <textarea
      className={
        "border border-gray-100 focus:outline-gray-200 bg-gray-50 rounded-xl p-8"
      }
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
