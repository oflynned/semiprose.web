import type { FunctionComponent } from "react";
import type { Story } from "~/types";
import { Card } from "~/design-system";
import { Tag } from "~/design-system/Tag";

type Props = Pick<Story, "id" | "title" | "paragraphs" | "tags">;

export const Excerpt: FunctionComponent<Props> = ({
  id,
  title,
  paragraphs,
  tags,
}) => (
  <div className={"flex flex-col gap-4"}>
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
            <Tag tag={tag} key={[id, tag].join("-")} />
          ))}
        </div>
        <p className={"leading-loose line-clamp-4"}>
          {paragraphs.join(" ").trim()}
        </p>
      </div>
    </Card>
  </div>
);
