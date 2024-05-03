import type { FunctionComponent } from "react";
import { Card } from "../Card";
import type { Prompt as PromptType } from "../../types";

export const Prompt: FunctionComponent<PromptType> = ({ week, text }) => {
  return (
    <Card>
      <div className={"flex flex-col p-8 gap-4 bg-blue-50"}>
        <h4 className={"font-medium"}>{`Week ${week}`}</h4>
        <p className={"leading-loose"}>{text}</p>
      </div>
    </Card>
  );
};
