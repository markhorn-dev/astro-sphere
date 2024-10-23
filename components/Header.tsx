"use client";

import Close from "@mui/icons-material/Close";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import Menu from "@mui/icons-material/Menu";
import RssFeed from "@mui/icons-material/RssFeed";
import Search from "@mui/icons-material/Search";

import classnames from "classnames";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { useLayoutEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import Container from "@/components/Container";
import Link from "@/components/ViewTransitionLink";

import { logo, nav, site } from "@/config";

import styles from "@/styles/header.module.css";

export interface HeaderProps {
  dark?: boolean;
  open?: boolean;
  onToggleDrawer?: () => void;
  onToggleTheme?: () => void;
}

export default function Header({
  dark,
  open,
  onToggleDrawer: handleToggleDrawer,
  onToggleTheme: handleToggleTheme,
}: HeaderProps) {
  const pathname = usePathname();

  const headerRef = useRef<HTMLElement>(null);

  const [scrolled, setScrolled] = useState<boolean>(false);

  const subpath = pathname.match(/[^/]+/g);

  const isMatched = (href: string) => pathname === href || "/" + subpath?.[0] === href;

  useLayoutEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);

    document.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef, setScrolled]);

  return (
    <header
      ref={headerRef}
      id="header"
      className={classnames(styles.header, "fixed top-0 w-full h-16 z-50", {
        [styles["not-scrolled"]]: !scrolled,
        [styles["scrolled"]]: scrolled && !dark,
        [styles["scrolled-dark"]]: scrolled && dark,
      })}
    >
      <Container size="md">
        <div className="relative h-full w-full">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold">
            <Link
              href="/"
              className="flex gap-1 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
            >
              {logo.light && (
                <Image
                  width={25}
                  height={32}
                  alt="brand"
                  className="dark:hidden"
                  src={logo.light}
                />
              )}
              {logo.dark && (
                <Image
                  width={25}
                  height={32}
                  alt="brand"
                  className="hidden dark:block"
                  src={logo.dark}
                />
              )}
              <div>{site.name}</div>
            </Link>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <nav className="hidden md:flex items-center justify-center text-sm gap-1">
              {nav.map(({ name, href }, i) => (
                <Link
                  key={`link-${i}`}
                  href={href}
                  className={twMerge(
                    classnames(
                      "h-8 rounded-full px-3 text-current",
                      "flex items-center justify-center",
                      "transition-colors duration-300 ease-in-out",
                      {
                        "bg-black dark:bg-white text-white dark:text-black": isMatched(href),
                        "hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white":
                          !isMatched(href),
                      }
                    )
                  )}
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="buttons absolute right-0 top-1/2 -translate-y-1/2 flex gap-1">
            <Link
              href="/search"
              aria-label={`Search blog posts and projects on ${site.name}`}
              className={twMerge(
                classnames(
                  "hidden md:flex",
                  "size-9 rounded-full p-2 items-center justify-center",
                  "bg-transparent hover:bg-black/5 dark:hover:bg-white/20",
                  "stroke-current hover:stroke-black hover:dark:stroke-white",
                  "border border-black/10 dark:border-white/25",
                  "transition-colors duration-300 ease-in-out",
                  pathname === "/search" || "/" + subpath?.[0] === "/search"
                    ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black"
                    : ""
                )
              )}
            >
              <Search className="block size-full" />
            </Link>

            <Link
              href="/api/feed/rss2"
              target="_blank"
              aria-label={`Rss feed for ${site.name}`}
              className={twMerge(
                classnames(
                  "hidden md:flex",
                  "size-9 rounded-full p-2 items-center justify-center",
                  "bg-transparent hover:bg-black/5 dark:hover:bg-white/20",
                  "stroke-current hover:stroke-black hover:dark:stroke-white",
                  "border border-black/10 dark:border-white/25",
                  "transition-colors duration-300 ease-in-out"
                )
              )}
            >
              <RssFeed className="block size-full" />
            </Link>

            <button
              id="header-theme-button"
              aria-label="Toggle light and dark theme"
              className={twMerge(
                classnames(
                  "hidden md:flex",
                  "size-9 rounded-full p-2 items-center justify-center",
                  "bg-transparent hover:bg-black/5 dark:hover:bg-white/20",
                  "stroke-current hover:stroke-black hover:dark:stroke-white",
                  "border border-black/10 dark:border-white/25",
                  "transition-colors duration-300 ease-in-out"
                )
              )}
              onClick={handleToggleTheme}
            >
              <LightMode className="size-full block dark:hidden" />
              <DarkMode className="size-full hidden dark:block" />
            </button>

            <button
              aria-label="Toggle drawer open and closed"
              className={twMerge(
                classnames(
                  "flex md:hidden",
                  "size-9 rounded-full p-2 items-center justify-center",
                  "bg-transparent hover:bg-black/5 dark:hover:bg-white/20",
                  "stroke-current hover:stroke-black hover:dark:stroke-white",
                  "border border-black/10 dark:border-white/25",
                  "transition-colors duration-300 ease-in-out"
                )
              )}
              onClick={handleToggleDrawer}
            >
              <Menu
                id="drawer-open"
                className={classnames("size-full", { block: !open, hidden: open })}
              />

              <Close
                id="drawer-close"
                className={classnames("size-full", { block: open, hidden: !open })}
              />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
