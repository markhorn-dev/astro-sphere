"use client";

import { useCallback, useLayoutEffect, useRef } from "react";

import { getTheme } from "@/lib/theme";

function getRandom(max: number) {
  return Math.floor(Math.random() * max);
}

function generateStars(ilen: number, theme: "light" | "dark") {
  const color = theme === "dark" ? "#fff" : "#000";
  let value = `${getRandom(2560)}px ${getRandom(2560)}px ${color}`;
  for (let i = 2; i <= ilen; i++) value += `, ${getRandom(2560)}px ${getRandom(2560)}px ${color}`;

  return value;
}

export default function Stars() {
  const stars1Ref = useRef<HTMLDivElement>(null);
  const stars2Ref = useRef<HTMLDivElement>(null);
  const stars3Ref = useRef<HTMLDivElement>(null);

  const stars = useCallback(
    (theme: ReturnType<typeof getTheme>) => {
      const starsSmall = generateStars(1000, theme);
      const starsMedium = generateStars(500, theme);
      const starsLarge = generateStars(250, theme);

      const stars1 = stars1Ref.current;
      const stars2 = stars2Ref.current;
      const stars3 = stars3Ref.current;

      if (stars1) {
        stars1.style.cssText = `
          width: 1px;
          height: 1px;
          border-radius: 50%;
          box-shadow: ${starsSmall};
        `;
      }

      if (stars2) {
        stars2.style.cssText = `
          width: 1.5px;
          height: 1.5px;
          border-radius: 50%;
          box-shadow: ${starsMedium};
        `;
      }

      if (stars3) {
        stars3.style.cssText = `
          width: 2px;
          height: 2px;
          border-radius: 50%;
          box-shadow: ${starsLarge};
        `;
      }
    },
    [stars1Ref, stars2Ref, stars3Ref]
  );

  useLayoutEffect(() => {
    const theme = getTheme();

    stars(theme);
  }, [stars]);

  useLayoutEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = getTheme();

      stars(theme);
    });

    observer.observe(document.documentElement, {
      childList: false,
      subtree: false,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 hidden bg-white dark:bg-black">
      <div ref={stars1Ref} className="fixed inset-0"></div>
      <div ref={stars2Ref} className="fixed inset-0"></div>
      <div ref={stars3Ref} className="fixed inset-0"></div>
    </div>
  );
}
