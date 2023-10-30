import type { FunctionComponent } from "react";
import { Avatar } from "~/design-system";
import type { User } from "~/types";
import classNames from "classnames";

type Props = {
  open: boolean;
  options: Option[];
  onClick?: () => void;
} & Pick<User, "initials" | "username">;

type Option = {
  label: string;
  icon: string;
  onClick?: () => void;
};

export const ProfileButton: FunctionComponent<Props> = ({
  options,
  open,
  initials,
  username,
  onClick,
}) => {
  return (
    <div
      className={classNames([
        "rounded-2xl overflow-hidden border-2 border-transparent",
        { "border-gray-100 bg-gray-50": open },
      ])}
    >
      <div
        className={classNames([
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
        className={classNames([
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
