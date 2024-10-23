"use client";

import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import RssFeed from "@mui/icons-material/RssFeed";
import Search from "@mui/icons-material/Search";

import classnames from "classnames";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Link from "@/components/ViewTransitionLink";

import { nav, site } from "@/config";

export interface DrawerProps {
  open?: boolean;
  onToggleDrawer?: () => void;
  onToggleTheme?: () => void;
}

export default function Drawer({
  open,
  onToggleDrawer: handleToggleDrawer,
  onToggleTheme: handleToggleTheme,
}: DrawerProps) {
  const pathname = usePathname();
  const subpath = pathname.match(/[^/]+/g);

  return (
    <div
      className={classnames(
        "fixed inset-0 h-0 z-40 overflow-hidden flex flex-col items-center justify-center md:hidden bg-neutral-100 dark:bg-neutral-900 transition-[height] duration-300 ease-in-out",
        {
          "h-full": open,
        }
      )}
    >
      <nav className="flex flex-col items-center space-y-2">
        {nav.map(({ name, href }, i) => (
          <Link
            key={`link-${i}`}
            href={href}
            className={twMerge(
              classnames(
                "flex items-center justify-center px-3 py-1 rounded-full",
                "text-current hover:text-black dark:hover:text-white",
                "hover:bg-black/5 dark:hover:bg-white/20",
                "transition-colors duration-300 ease-in-out",
                {
                  "pointer-events-none bg-black dark:bg-white text-white dark:text-black":
                    pathname === href || "/" + subpath?.[0] === href,
                }
              )
            )}
            onClick={() => handleToggleDrawer?.()}
          >
            {name}
          </Link>
        ))}
      </nav>

      <div className="flex gap-1 mt-5">
        <Link
          href="/search"
          aria-label={`Search blog posts and projects on ${site.name}`}
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
          <Search className="block size-full" />
        </Link>

        <Link
          href="/rss.xml"
          target="_blank"
          aria-label={`Rss feed for ${site.name}`}
          className="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out"
        >
          <RssFeed className="block size-full" />
        </Link>

        <button
          id="drawer-theme-button"
          aria-label={`Toggle light and dark theme`}
          className="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out"
          onClick={handleToggleTheme}
        >
          <LightMode className="block dark:hidden size-full" />
          <DarkMode className="hidden dark:block size-full" />
        </button>
      </div>
    </div>
  );
}
