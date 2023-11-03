import { Button } from "~/design-system";
import type { ComponentProps, FunctionComponent } from "react";

type Props = { publishState: ComponentProps<typeof Button>["state"] } & Omit<
  ComponentProps<typeof Button>,
  "label" | "variant"
>;

export const SaveDraftButton: FunctionComponent<Props> = ({
  state,
  publishState,
  ...props
}) => {
  const disabled =
    publishState === "disabled" ||
    publishState === "loading" ||
    state === "disabled" ||
    state === "completed";

  return (
    <Button
      {...props}
      state={state}
      disabled={disabled}
      variant={"outlined"}
      label={
        state === "completed"
          ? "Draft saved"
          : state === "loading"
          ? "Saving draft"
          : "Save draft"
      }
    />
  );
};
