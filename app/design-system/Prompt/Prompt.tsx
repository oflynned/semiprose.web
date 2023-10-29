import type { FunctionComponent } from "react";
import { Card } from "~/design-system";

type Props = {
  id: string;
  week: number;
  prompt: string;
  onClick?: (id: string) => void;
};

export const Prompt: FunctionComponent<Props> = ({
  id,
  week,
  prompt,
  onClick,
}) => {
  return (
    <Card>
      <div
        className={"flex flex-col p-8 gap-4 bg-blue-50"}
        onClick={() => onClick?.(id)}
      >
        <h3 className={"font-medium"}>{`Week ${week}`}</h3>
        <p className={"leading-loose"}>{prompt}</p>
      </div>
    </Card>
  );
};
