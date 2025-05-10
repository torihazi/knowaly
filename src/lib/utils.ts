import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleEnterKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  callback: () => void
) => {
  if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
    e.preventDefault();
    callback();
  }
};
