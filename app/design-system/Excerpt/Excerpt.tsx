import type { FunctionComponent } from "react";
import type { Story } from "~/types";
import { Card } from "~/design-system";

type Props = Pick<Story, "title" | "paragraphs" | "tags">;

export const Excerpt: FunctionComponent<Props> = ({
  title,
  paragraphs,
  tags,
}) => {
  const content = paragraphs.join(". ").trim();

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
              <h4 className={"font-medium"}>{title}</h4>
            </div>
          </div>
          <div className={"flex gap-2"}>
            {tags.map((tag) => (
              <p key={tag}>{`#${tag}`}</p>
            ))}
          </div>
          <p className={"leading-loose"}>
            {content.length > 256 ? content.slice(0, 256) + "..." : content}
          </p>
        </div>
      </Card>
    </div>
  );
};
