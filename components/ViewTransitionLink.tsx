"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { type AnchorHTMLAttributes, forwardRef } from "react";

export type ViewTransitionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

export default forwardRef(function ViewTransitionLink(
  { onClick: handleClick, ...props }: ViewTransitionLinkProps,
  ref: React.Ref<HTMLAnchorElement>
) {
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

  return <Link ref={ref} {...props} onClick={handleTransition} />;
});
