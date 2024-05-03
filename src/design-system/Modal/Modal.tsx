import type { FunctionComponent, PropsWithChildren } from "react";
import { Card } from "~/design-system";
import { useRef } from "react";
import { useClickOutside } from "~/hooks";

type Props = {
  open?: boolean;
  onClose?: () => void;
};

export const Modal: FunctionComponent<PropsWithChildren<Props>> = ({
  open = false,
  onClose,
  children,
}) => {
  const ref = useRef(null);

  useClickOutside(ref, { canTrigger: open, onClick: () => onClose?.() });

  return (
    <>
      {open ? (
        <div
          className={
            "flex w-screen h-screen bg-gray-500 bg-transparent z-20 items-center justify-center"
          }
        >
          <div ref={ref} className={"bg-red-500"}>
            <Card border>
              <div className={"p-8 w-[512px] h-[512px]"}>
                <h3 className={"font-bold text-xl"}>{"Publish"}</h3>
              </div>
            </Card>
          </div>
        </div>
      ) : null}
      {children}
    </>
  );
};
