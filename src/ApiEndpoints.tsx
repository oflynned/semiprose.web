import { Button } from "./design-system";

export const ApiEndpoints = () => {
  return (
    <div className={"flex flex-col m-8 gap-4"}>
      <div>
        <Button label={"Create user"} />
        <Button label={"Get user"} />
      </div>
    </div>
  );
};
