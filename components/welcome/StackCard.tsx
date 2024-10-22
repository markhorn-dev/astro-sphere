import Link from "@/components/ViewTransitionLink";

export interface StackCardProps {
  text: string;
  href: string;
}

export default function StackCard({ text, href }: StackCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-fit px-2 py-1 group rounded border flex gap-2 items-center border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 hover:dark:bg-neutral-800 blend text-sm"
    >
      {text}
    </Link>
  );
}
