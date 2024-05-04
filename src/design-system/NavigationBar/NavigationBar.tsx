import type { ComponentProps, FunctionComponent } from "react";
import { NavigationItem } from "./NavigationItem";
import type { User } from "../../types";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { ProfileButton } from "../ProfileButton";
import { useClickOutside, useTheme } from "../../hooks";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.ts";

type Props = {
  pageId: string;
  user: User;
};

type MenuOption = ComponentProps<typeof ProfileButton>["options"][number];

type Section = { label: string; id: string };

const section: Section[] = [
  { label: "Explore", id: "explore" },
  { label: "My Stories", id: "stories" },
  { label: "Notifications", id: "notifications" },
  { label: "Settings", id: "settings" },
];

export const NavigationBar: FunctionComponent<Props> = ({ pageId, user }) => {
  const { signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, {
    canTrigger: open,
    onClick: () => setOpen(false),
  });

  const options: MenuOption[] = [
    theme === "light"
      ? {
          label: "Dark mode",
          icon: "dark_mode",
          onClick: () => toggleTheme("dark"),
        }
      : {
          label: "Light mode",
          icon: "light_mode",
          onClick: () => toggleTheme("light"),
        },
    {
      label: "Log out",
      icon: "logout",
      onClick: () => signOut(),
    },
  ];

  return (
    <aside
      className={
        "flex flex-col h-screen sticky top-0 left-0 bg-white dark:bg-slate-900 justify-between w-[256px] p-4"
      }
    >
      <div className={"flex flex-col gap-8"}>
        <h1 className={"text-4xl font-bold dark:text-white"}>{"Semiprose"}</h1>
        <div className={"flex justify-center"}>
          <Button
            visibility={pageId === "compose" ? "invisible" : "visible"}
            onClick={() => navigate("/compose")}
            label={"Compose"}
          />
        </div>
        <div className={"flex flex-col gap-2"}>
          {section.map(({ id, label }) => (
            <Link to={`/${id}`} key={label}>
              <NavigationItem active={pageId === id} label={label} />
            </Link>
          ))}
        </div>
      </div>
      <div ref={ref}>
        <ProfileButton
          {...user}
          options={options}
          open={open}
          onClick={() => setOpen((value) => !value)}
        />
      </div>
    </aside>
  );
};
