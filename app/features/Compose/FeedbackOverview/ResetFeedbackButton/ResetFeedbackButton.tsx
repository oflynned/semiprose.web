import type { FunctionComponent, ComponentProps } from "react";
import { Button } from "~/design-system";

type Props = Omit<ComponentProps<typeof Button>, "label" | "variant">;

export const ResetFeedbackButton: FunctionComponent<Props> = ({
  state,
  ...props
}) => {
  return (
    <Button {...props} state={state} variant={"outlined"} label={"Reset"} />
  );
};
