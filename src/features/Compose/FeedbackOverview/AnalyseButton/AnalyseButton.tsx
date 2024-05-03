import type { FunctionComponent, ComponentProps } from "react";
import { Button } from "../../../../design-system";

type Props = Omit<ComponentProps<typeof Button>, "label" | "variant">;

export const AnalyseButton: FunctionComponent<Props> = ({
  state,
  ...props
}) => {
  return (
    <Button
      {...props}
      state={state}
      label={
        state === "loading"
          ? "Analysing"
          : state === "completed"
          ? "Analyse again"
          : "Analyse"
      }
    />
  );
};
