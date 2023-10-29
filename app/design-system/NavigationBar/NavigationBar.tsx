import type { FunctionComponent } from "react";
import { Avatar, Button } from "~/design-system";
import { Link } from "@remix-run/react";
import classNames from "classnames";

type Props = {
  currentUrl: string;
};

type Section = { label: string; url: string };

const section: Section[] = [
  { label: "Explore", url: "/explore" },
  { label: "Stories", url: "/stories" },
  { label: "Notifications", url: "/notifications" },
  { label: "Guilds", url: "/guilds" },
];

export const NavigationBar: FunctionComponent<Props> = ({ currentUrl }) => {
  return (
    <aside
      className={
        "flex flex-col h-screen sticky top-0 justify-between w-[256px] p-4"
      }
    >
      <div className={"flex flex-col gap-8"}>
        <div>
          <h1 className={"text-4xl font-bold"}>{"Semiprose"}</h1>
        </div>
        <div className={"flex justify-center"}>
          <Button label={"Compose"} />
        </div>
        <div className={"flex flex-col gap-2"}>
          {section.map(({ url, label }) => (
            <div key={label}>
              <Link to={url}>
                <h3
                  className={classNames([
                    "text-2xl p-4 rounded-xl hover:bg-gray-100 active:bg-gray-200 font-bold transition duration-150",
                    {
                      "bg-gray-100": currentUrl === url,
                    },
                  ])}
                >
                  {label}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div
          className={
            "flex flex-row items-center gap-2 rounded-xl hover:bg-gray-200 transition duration-150 cursor-pointer p-2"
          }
        >
          <Avatar initials={"WD"} />
          <div className={"flex items-center"}>
            <p>{"@wetdaddy69"}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
