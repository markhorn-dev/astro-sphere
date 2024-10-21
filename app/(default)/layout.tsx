"use client";

import localFont from "next/font/local";
import { useLayoutEffect, useState } from "react";

import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getTheme, setTheme } from "@/lib/theme";

const atkinson = localFont({
  src: [
    {
      path: "../../public/fonts/atkinson/atkinson-regular.woff",
      weight: "400",
    },
    {
      path: "../../public/fonts/atkinson/atkinson-bold.woff",
      weight: "700",
    },
  ],
  display: "swap",
  weight: "45 920",
});

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  const [open, setOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  useLayoutEffect(() => {
    const isDark = getTheme() === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    setIsDark(isDark);
  }, []);

  const handleToggleDrawer = () => setOpen((prev) => !prev);
  const handleToggleTheme = () => {
    const toggle = !isDark;

    document.documentElement.classList.toggle("dark", toggle);

    setTheme(toggle ? "dark" : "light");

    setIsDark(toggle);
  };

  return (
    <body className={`${atkinson.className}`}>
      <Header
        open={open}
        onToggleDrawer={handleToggleDrawer}
        dark={isDark}
        onToggleTheme={handleToggleTheme}
      />
      <Drawer open={open} onToggleDrawer={handleToggleDrawer} />
      <main>{children}</main>
      <Footer />
    </body>
  );
}
