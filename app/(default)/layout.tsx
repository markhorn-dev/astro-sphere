"use client";

import localFont from "next/font/local";
import { useLayoutEffect, useState } from "react";

import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import getTheme from "@/lib/getTheme";

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

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", getTheme() === "dark");
  }, []);

  const handleToggleDrawer = () => setOpen((prev) => !prev);

  return (
    <body className={`${atkinson.className}`}>
      <Header open={open} onToggleDrawer={handleToggleDrawer} />
      <Drawer open={open} onToggleDrawer={handleToggleDrawer} />
      <main>{children}</main>
      <Footer />
    </body>
  );
}
