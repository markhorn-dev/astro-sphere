"use client";

import "@/styles/drawer.css";

import classnames from "classnames";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Link from "@/components/ViewTransitionLink";

import { LINKS, SITE } from "@/lib/config";

export default function Drawer() {
  const pathname = usePathname();
  const subpath = pathname.match(/[^/]+/g);

  return (
    <div
      id="drawer"
      className="fixed inset-0 h-0 z-40 overflow-hidden flex flex-col items-center justify-center md:hidden bg-neutral-100 dark:bg-neutral-900 transition-[height] duration-300 ease-in-out"
    >
      <nav className="flex flex-col items-center space-y-2">
        {LINKS.map((LINK, i) => (
          <Link
            key={`link-${i}`}
            href={LINK.HREF}
            className={twMerge(
              classnames(
                "flex items-center justify-center px-3 py-1 rounded-full",
                "text-current hover:text-black dark:hover:text-white",
                "hover:bg-black/5 dark:hover:bg-white/20",
                "transition-colors duration-300 ease-in-out",
                {
                  "pointer-events-none bg-black dark:bg-white text-white dark:text-black":
                    pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF,
                }
              )
            )}
          >
            {LINK.TEXT}
          </Link>
        ))}
      </nav>

      <div className="flex gap-1 mt-5">
        <Link
          href="/search"
          aria-label={`Search blog posts and projects on ${SITE.TITLE}`}
          className={twMerge(
            classnames(
              "size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out",
              {
                "pointer-events-none bg-black dark:bg-white text-white dark:text-black":
                  pathname === "/search" || "/" + subpath?.[0] === "search",
              }
            )
          )}
        >
          <svg className="size-full">
            <use href="/ui.svg#search"></use>
          </svg>
        </Link>

        <Link
          href="/rss.xml"
          target="_blank"
          aria-label={`Rss feed for ${SITE.TITLE}`}
          className="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out"
        >
          <svg className="size-full">
            <use href="/ui.svg#rss"></use>
          </svg>
        </Link>

        <button
          id="drawer-theme-button"
          aria-label={`Toggle light and dark theme`}
          className="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out"
        >
          <svg className="block dark:hidden size-full">
            <use href="/ui.svg#sun"></use>
          </svg>
          <svg className="hidden dark:block size-full">
            <use href="/ui.svg#moon"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
