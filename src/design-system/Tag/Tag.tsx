import type { FunctionComponent } from "react";

type Props = {
  tag: string;
};

export const Tag: FunctionComponent<Props> = ({ tag }) => (
  <p key={tag}>{`#${tag}`}</p>
);
