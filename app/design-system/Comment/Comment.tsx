import { Avatar, Card } from "~/design-system";
import type { FunctionComponent } from "react";
import type { Comment as CommentType } from "~/types";
import { toApproximateTime } from "~/formatters";

type Props = CommentType;

export const Comment: FunctionComponent<Props> = ({
  user,
  comment,
  postedAt,
}) => {
  const handle = `@${user.username}`;

  return (
    <Card border>
      <div className={"flex gap-2 p-4"}>
        <Avatar {...user} />
        <div className={"flex flex-col"}>
          <p>{[handle, toApproximateTime(postedAt)].join(" — ")}</p>
          <p>{comment}</p>
        </div>
      </div>
    </Card>
  );
};
