import type { RefObject } from "react";
import { useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  options?: {
    canTrigger: boolean;
    onClick: () => void;
  }
) => {
  useEffect(() => {
    const onClickOutside = (event: any) => {
      if (!ref.current?.contains(event.target) && options?.canTrigger) {
        options.onClick();
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [ref, options?.onClick, options?.canTrigger]);
};
