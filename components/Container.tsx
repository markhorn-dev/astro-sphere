import classnames from "classnames";
import { twMerge } from "tailwind-merge";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function Container({ size, children }: ContainerProps) {
  return (
    <div
      className={twMerge(
        classnames("w-full h-full mx-auto px-5", {
          "max-w-screen-sm": size === "sm",
          "max-w-screen-md": size === "md",
          "max-w-screen-lg": size === "lg",
          "max-w-screen-xl": size === "xl",
          "max-w-screen-2xl": size === "2xl",
        })
      )}
    >
      {children}
    </div>
  );
}
