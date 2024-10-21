"use client";

import localFont from "next/font/local";
import { useLayoutEffect } from "react";

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
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", getTheme() === "dark");
  }, []);

  return (
    <body className={`${atkinson.className}`}>
      <Header />
      <Drawer />
      <main>{children}</main>
      <Footer />
    </body>
  );
}
