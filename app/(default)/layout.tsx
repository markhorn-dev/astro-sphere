"use client";

import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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

const animate = () => {
  document
    .querySelectorAll(".animate")
    .forEach((el, index) => setTimeout(() => el.classList.add("show"), index * 150));
};

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  const pathname = usePathname();

  useEffect(() => {
    animate();
  }, [pathname]);

  useEffect(() => {
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
