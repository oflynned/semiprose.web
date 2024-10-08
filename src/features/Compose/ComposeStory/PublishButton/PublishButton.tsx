import type { ComponentProps, FunctionComponent } from "react";
import { Button } from "../../../../design-system";

type Props = Omit<ComponentProps<typeof Button>, "label" | "variant">;

export const PublishButton: FunctionComponent<Props> = ({
  state,
  ...props
}) => {
  const disabled = state === "disabled" || state === "completed";

  return (
    <Button
      {...props}
      state={state}
      disabled={disabled}
      label={
        state === "completed"
          ? "Published"
          : state === "loading"
          ? "Publishing"
          : "Publish"
      }
    />
  );
};
