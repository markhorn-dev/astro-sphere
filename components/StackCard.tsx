import Link from "next/link";

export interface StackCardProps {
  text: string;
  icon: string;
  href: string;
}

export default function StackCard({ text, icon, href }: StackCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-fit px-3 py-2 group rounded border flex gap-2 items-center border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 hover:dark:bg-neutral-800 blend"
    >
      <svg height={20} width={20}>
        <use href={`/stack.svg#${icon}`}></use>
      </svg>
      <span className="text-sm capitalize text-neutral-500 dark:text-neutral-400 group-hover:text-black group-hover:dark:text-white blend">
        {text}
      </span>
    </Link>
  );
}
