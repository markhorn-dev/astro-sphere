"use client";

import "@/styles/header.css";

import classnames from "classnames";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import Container from "@/components/Container";

import { LINKS, SITE } from "@/lib/config";
import getTheme from "@/lib/getTheme";

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const subpath = pathname.match(/[^/]+/g);

  const handleClickChangeTheme = () => {
    const theme = getTheme() === "dark" ? "light" : "dark";

    const css = document.createElement("style");
    css.appendChild(
      document.createTextNode(
        `* {
             -webkit-transition: none !important;
             -moz-transition: none !important;
             -o-transition: none !important;
             -ms-transition: none !important;
             transition: none !important;
          }`
      )
    );

    document.head.appendChild(css);
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.head.removeChild(css);

    localStorage.theme = theme;
  };

  const handleClickDrawerToggler = () => {
    const drawer = document.getElementById("drawer");
    const drawerButton = document.getElementById("header-drawer-button");

    drawer?.classList.toggle("open");
    drawerButton?.classList.toggle("open");
  };

  const isMatched = (href: string) => pathname === href || "/" + subpath?.[0] === href;

  useEffect(() => {
    const handleScroll = () => headerRef.current?.classList.toggle("scrolled", window.scrollY > 0);

    document.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);

  return (
    <header ref={headerRef} id="header" className="fixed top-0 w-full h-16 z-50 ">
      <Container size="md">
        <div className="relative h-full w-full">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold">
            <Link
              href="/"
              className="flex gap-1 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
            >
              <svg className="size-6 fill-current">
                <use href="/brand.svg#brand"></use>
              </svg>
              <div>{SITE.TITLE}</div>
            </Link>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <nav className="hidden md:flex items-center justify-center text-sm gap-1">
              {LINKS.map((LINK, i) => (
                <Link
                  key={`link-${i}`}
                  href={LINK.HREF}
                  className={twMerge(
                    classnames(
                      "h-8 rounded-full px-3 text-current",
                      "flex items-center justify-center",
                      "transition-colors duration-300 ease-in-out",
                      {
                        "bg-black dark:bg-white text-white dark:text-black": isMatched(LINK.HREF),
                        "hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white":
                          !isMatched(LINK.HREF),
                      }
                    )
                  )}
                >
                  {LINK.TEXT}
                </Link>
              ))}
            </nav>
          </div>

          <div className="buttons absolute right-0 top-1/2 -translate-y-1/2 flex gap-1">
            <Link
              href="/search"
              aria-label={`Search blog posts and projects on ${SITE.TITLE}`}
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
              <svg className="size-full">
                <use href="/ui.svg#search"></use>
              </svg>
            </Link>

            <Link
              href="/rss.xml"
              target="_blank"
              aria-label={`Rss feed for ${SITE.TITLE}`}
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
              <svg className="size-full">
                <use href="/ui.svg#rss"></use>
              </svg>
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
              onClick={handleClickChangeTheme}
            >
              <svg className="size-full block dark:hidden">
                <use href="/ui.svg#sun"></use>
              </svg>
              <svg className="size-full hidden dark:block">
                <use href="/ui.svg#moon"></use>
              </svg>
            </button>

            <button
              id="header-drawer-button"
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
              onClick={handleClickDrawerToggler}
            >
              <svg id="drawer-open" className="size-full">
                <use href="/ui.svg#menu"></use>
              </svg>
              <svg id="drawer-close" className="size-full">
                <use href="/ui.svg#x"></use>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
