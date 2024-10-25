import type { HTMLAttributes } from "react";

export interface ComponentProps extends HTMLAttributes<HTMLButtonElement> {
  name: string;
}

export default function MyComponent({ name, children }: ComponentProps) {
  return (
    <div className="border p-4 dark:bg-white dark:text-black">
      <div>
        Hello,
        <span className="font-semibold">{name}!!!</span>
      </div>

      {children}
    </div>
  );
}
