import type { FunctionComponent } from "react";
import { Card } from "~/design-system";

type Props = {
  week: number;
  prompt: string;
  onClick?: (id: string) => void;
};

export const Prompt: FunctionComponent<Props> = ({ week, prompt }) => {
  return (
    <Card>
      <div
        className={
          "flex flex-col p-8 gap-4 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 clickable"
        }
      >
        <h3 className={"font-medium"}>{`Week ${week}`}</h3>
        <p className={"leading-loose"}>{prompt}</p>
      </div>
    </Card>
  );
};
