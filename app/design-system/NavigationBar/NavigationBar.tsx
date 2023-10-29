import type { FunctionComponent } from "react";

type Props = {
  showCompose: boolean;
  titles: string[];
};

export const NavigationBar: FunctionComponent<Props> = ({
  showCompose,
  titles,
}) => {
  return (
    <div className={"flex flex-col"}>
      <div>
        <h1>{"Semiprose"}</h1>
      </div>
      {showCompose ? <button>{"Compose"}</button> : null}
    </div>
  );
};
