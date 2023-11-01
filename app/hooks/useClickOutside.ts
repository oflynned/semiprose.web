import type { RefObject } from "react";
import { useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  {
    canTrigger = true,
    onClick,
  }: {
    canTrigger?: boolean;
    onClick?: () => void;
  } = {}
) => {
  useEffect(() => {
    const onClickOutside = (event: any) => {
      if (!ref.current?.contains(event.target) && canTrigger) {
        onClick?.();
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [ref, onClick, canTrigger]);
};
