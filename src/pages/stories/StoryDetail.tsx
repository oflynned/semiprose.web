import { Comment, Story } from "../../design-system";
import { pastStories } from "../../constants";
import { ComponentProps, useState } from "react";

export const StoryDetail = () => {
  const [comment, setComment] = useState("");
  const [story] = useState<ComponentProps<typeof Story>>(pastStories[0]);

  return (
    <div className={"flex flex-col gap-4 max-w-screen-md"}>
      <Story {...story} />
      <div className={"flex flex-col gap-4"}>
        <h3 className={"text-2xl font-medium"}>{"Comments"}</h3>
        <input
          className={"border border-gray-200 rounded-xl p-4"}
          placeholder={"Add a comment"}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className={"flex flex-col gap-2"}>
          {story.comments.map((comment) => (
            <Comment {...comment} key={comment.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
