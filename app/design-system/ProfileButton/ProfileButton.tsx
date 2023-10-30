import type { FunctionComponent } from "react";
import { Avatar } from "~/design-system";
import type { User } from "~/types";

type Props = {
  onClick?: () => void;
} & Pick<User, "initials" | "username">;

export const ProfileButton: FunctionComponent<Props> = ({
  initials,
  username,
  onClick,
}) => {
  return (
    <div
      className={
        "flex flex-row items-center gap-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 p-2 clickable"
      }
      onClick={() => onClick?.()}
    >
      <Avatar initials={initials} />
      <div className={"flex items-center"}>
        <p>{username}</p>
      </div>
    </div>
  );
};
