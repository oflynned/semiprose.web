import type { FunctionComponent } from "react";
import type { Story } from "~/types";
import { Card } from "../Card";

type Props = Pick<Story, "title" | "author" | "paragraphs" | "tags">;

export const Excerpt: FunctionComponent<Props> = ({
  title,
  author,
  paragraphs,
  tags,
}) => {
  return (
    <div className={"flex flex-col gap-4 max-w-screen-md"}>
      <Card>
        <div
          className={
            "flex flex-col p-8 gap-4 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 clickable"
          }
        >
          <div className={"flex flex-col"}>
            <div className={"flex justify-between"}>
              <h3 className={"font-medium"}>{title}</h3>
            </div>
            <p>{`@${author.username}`}</p>
          </div>
          <div className={"flex gap-2"}>
            {tags.map((tag) => (
              <p key={tag}>{`#${tag}`}</p>
            ))}
          </div>
          <p className={"leading-loose"}>
            {paragraphs[0].slice(0, 256) + "..."}
          </p>
        </div>
      </Card>
    </div>
  );
};
