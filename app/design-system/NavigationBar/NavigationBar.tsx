import type { FunctionComponent } from "react";
import { Avatar, Button } from "~/design-system";
import { Link } from "@remix-run/react";

type Props = {
  showCompose: boolean;
  titles: string[];
};

export const NavigationBar: FunctionComponent<Props> = ({
  showCompose,
  titles,
}) => {
  return (
    <aside
      className={
        "flex flex-col h-screen sticky top-0 justify-between w-fit p-8"
      }
    >
      <div className={"flex flex-col gap-8"}>
        <div>
          <h1 className={"text-4xl font-bold"}>{"Semiprose"}</h1>
        </div>
        <div className={"flex justify-center"}>
          {showCompose ? <Button label={"Compose"} /> : null}
        </div>
        <div className={"flex flex-col gap-4"}>
          {titles.map((title) => (
            <div key={title}>
              <Link to={"/"}>
                <h3 className={"text-2xl font-bold"}>{title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={"flex flex-row align-middle gap-2"}>
          <Avatar initials={"WD"} />
          <div className={"flex align-middle"}>
            <p>{"@wetdaddy69"}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
