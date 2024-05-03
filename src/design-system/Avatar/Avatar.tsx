import type { FunctionComponent } from "react";
import type { User } from "~/types";

type Props = Pick<User, "initials">;

export const Avatar: FunctionComponent<Props> = ({ initials }) => {
  return (
    <div
      className={
        "rounded-full bg-black text-white w-12 h-12 flex justify-center items-center"
      }
    >
      <p className={"uppercase font-bold"}>{initials}</p>
    </div>
  );
};
