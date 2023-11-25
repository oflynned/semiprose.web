import type { FunctionComponent } from "react";
import { Card } from "~/design-system";

export const PromptSkeleton: FunctionComponent = () => {
  return (
    <Card>
      <div className={"bg-blue-50"}>
        <div className={"flex flex-col p-8 gap-4 animate-pulse"}>
          <div className={"rounded-full bg-gray-300 h-3 w-32"} />
          <div className={"rounded-full bg-gray-300 h-3 w-full"} />
          <div className={"rounded-full bg-gray-300 h-3 w-full"} />
          <div className={"rounded-full bg-gray-300 h-3 w-full"} />
        </div>
      </div>
    </Card>
  );
};
