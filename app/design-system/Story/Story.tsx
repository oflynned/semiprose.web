import type { FunctionComponent } from "react";
import { Card } from "~/design-system";
import type { Story as StoryType } from "~/types";
import { toCount, toDate, toDuration } from "~/formatters";

type Props = {
  showWordCount?: boolean;
} & StoryType;

export const Story: FunctionComponent<Props> = ({
  title,
  author,
  prompt,
  paragraphs,
  publishedAt,
  readership,
  tags,
}) => {
  // TODO should both of these be moved to the server? probably
  const wordCount = paragraphs.join(" ").trim().split(" ").length;
  const minsToRead = Math.ceil(wordCount / 200);

  return (
    <div className={"flex flex-col gap-4 max-w-screen-md"}>
      <h1 className={"text-3xl font-medium"}>{title}</h1>
      <h5>
        {[
          `${wordCount} words`,
          toDuration(minsToRead),
          `Published ${toDate(publishedAt)}`,
        ].join(" — ")}
      </h5>
      <Card>
        <div className={"flex flex-col p-8 gap-4 bg-blue-50"}>
          <div className={"flex flex-col"}>
            <div className={"flex justify-between"}>
              <h3 className={"font-medium"}>{`Week ${prompt.week}`}</h3>
              <div className={"flex gap-1"}>
                <span className={"material-symbols-outlined"}>trending_up</span>
                <p>{`${toCount(readership)} readers`}</p>
              </div>
            </div>
            <p>{`@${author.username}`}</p>
          </div>
          <div className={"flex gap-2"}>
            {tags.map((tag) => (
              <p key={tag}>{`#${tag}`}</p>
            ))}
          </div>
          <div className={"flex flex-col gap-2"}>
            {[prompt.text, ...paragraphs].map((text, index) => (
              <p key={`paragraph-${index}`} className={"leading-loose"}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
