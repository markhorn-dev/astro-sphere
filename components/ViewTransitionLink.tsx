"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";

export type ViewTransitionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

export default function ViewTransitionLink({
  onClick: handleClick,
  ...props
}: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!document?.startViewTransition) return handleClick?.(e);

    const anchor = e.currentTarget;
    if (anchor.target !== "_blank") {
      e.preventDefault();
      document.startViewTransition(() => {
        handleClick?.(e);

        router.push(anchor.href ?? "/");
      });
    }
  };

  return <Link {...props} onClick={handleTransition} />;
}
