import type { FunctionComponent } from "react";
import { Button, ProfileButton } from "~/design-system";
import { Link, useNavigate } from "@remix-run/react";
import { NavigationItem } from "./NavigationItem";
import type { User } from "~/types";

type Props = {
  page: string;
  user: User;
};

type Section = { label: string; id: string };

const section: Section[] = [
  { label: "Explore", id: "explore" },
  { label: "My Stories", id: "stories" },
  { label: "Notifications", id: "notifications" },
  { label: "Guilds", id: "guilds" },
];

export const NavigationBar: FunctionComponent<Props> = ({ page, user }) => {
  const navigate = useNavigate();

  return (
    <aside
      className={
        "flex flex-col h-screen sticky top-0 left-0 bg-white justify-between w-[256px] p-4"
      }
    >
      <div className={"flex flex-col gap-8"}>
        <div>
          <h1 className={"text-4xl font-bold"}>{"Semiprose"}</h1>
        </div>
        <div className={"flex justify-center"}>
          <Button
            label={"Compose"}
            visible={page !== "compose"}
            onClick={() => navigate("/compose")}
          />
        </div>
        <div className={"flex flex-col gap-2"}>
          {section.map(({ id, label }) => (
            <Link to={`/${id}`} key={label}>
              <NavigationItem active={page === id} label={label} />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <ProfileButton {...user} />
      </div>
    </aside>
  );
};
