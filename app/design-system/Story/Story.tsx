import type { FunctionComponent } from "react";
import { Card } from "~/design-system";

type Props = {
  title: string;
  author: string;
  publishedAt: Date;
  prompt: string;
  paragraphs: string[];
  duration: number;
  readership: number;
  tags: string[];
  week: number;
};

export const Story: FunctionComponent<Props> = ({
  title,
  author,
  paragraphs,
  prompt,
  publishedAt,
  readership,
  duration,
  tags,
  week,
}) => {
  const formatDate = (date: Date) => {
    return Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const formatDuration = (mins: number) => {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;

    if (hours > 0) {
      return `${hours} hours and ${minutes} minutes to read`;
    }

    return `${minutes} minutes to read`;
  };

  const formatCount = (count: number) => {
    return Intl.NumberFormat("en-US", { notation: "compact" }).format(count);
  };

  return (
    <div className={"flex flex-col gap-4 max-w-screen-md"}>
      <h1 className={"text-3xl font-medium"}>{title}</h1>
      <h5>
        {[
          `${formatDuration(duration)}`,
          `Published ${formatDate(publishedAt)}`,
        ].join(" — ")}
      </h5>
      <Card>
        <div className={"flex flex-col p-8 gap-4 bg-blue-50"}>
          <div className={"flex flex-col"}>
            <div className={"flex flex-row justify-between"}>
              <h3 className={"font-medium"}>{`Week ${week}`}</h3>
              <div className={"flex gap-1"}>
                <span className={"material-symbols-outlined"}>trending_up</span>
                <p>{`${formatCount(readership)} readers`}</p>
              </div>
            </div>
            <p>{`@${author}`}</p>
          </div>
          <div className={"flex flex-row gap-2"}>
            {tags.map((tag) => (
              <p key={tag}>{`#${tag}`}</p>
            ))}
          </div>
          <div>
            {[prompt, ...paragraphs].map((text, index) => (
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
