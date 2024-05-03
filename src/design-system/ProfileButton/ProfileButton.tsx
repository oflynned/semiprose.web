import type { FunctionComponent } from "react";
import { Avatar } from "~/design-system";
import type { User } from "~/types";
import clsx from "clsx";

type Props = {
  options: Option[];
  open?: boolean;
  onClick?: () => void;
} & Pick<User, "initials" | "username">;

type Option = {
  label: string;
  icon: string;
  onClick?: () => void;
};

export const ProfileButton: FunctionComponent<Props> = ({
  options,
  initials,
  username,
  onClick,
  open = false,
}) => {
  return (
    <div
      className={clsx([
        "rounded-2xl overflow-hidden border border-transparent",
        { "border-gray-100 bg-gray-50": open },
      ])}
    >
      <div
        className={clsx([
          "flex flex-col align-middle divide-y",
          { hidden: !open },
        ])}
      >
        {options.map(({ label, icon, onClick }) => (
          <div
            key={label}
            onClick={() => onClick?.()}
            className={
              "flex flex-row gap-2 p-4 hover:bg-gray-100 active:bg-gray-200 clickable"
            }
          >
            <span className={"material-symbols-outlined"}>{icon}</span>
            <p>{label}</p>
          </div>
        ))}
      </div>
      <div
        className={clsx([
          "flex items-center gap-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 p-2 clickable",
          { "bg-gray-200": open },
        ])}
        onClick={onClick}
      >
        <Avatar initials={initials} />
        <div className={"flex items-center"}>
          <p>{username}</p>
        </div>
      </div>
    </div>
  );
};
