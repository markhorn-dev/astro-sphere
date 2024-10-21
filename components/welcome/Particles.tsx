"use client";

import { useCallback, useLayoutEffect, useRef } from "react";

import { getTheme } from "@/lib/theme";

function getRandom(max: number) {
  return Math.floor(Math.random() * max);
}

function generateParticles(ilen: number, theme: "light" | "dark") {
  const color = theme === "dark" ? "#fff" : "#000";
  let value = `${getRandom(2560)}px ${getRandom(2560)}px ${color}`;
  for (let i = 2; i <= ilen; i++) value += `, ${getRandom(2560)}px ${getRandom(2560)}px ${color}`;
  return value;
}

export default function Particles() {
  const particles1Ref = useRef<HTMLDivElement>(null);
  const particles2Ref = useRef<HTMLDivElement>(null);
  const particles3Ref = useRef<HTMLDivElement>(null);

  const particles = useCallback(
    (theme: ReturnType<typeof getTheme>) => {
      const particlesSmall = generateParticles(1000, theme);
      const particlesMedium = generateParticles(500, theme);
      const particlesLarge = generateParticles(250, theme);

      const particles1 = particles1Ref.current;
      const particles2 = particles2Ref.current;
      const particles3 = particles3Ref.current;

      if (particles1) {
        particles1.style.cssText = `
          width: 1px;
          height: 1px;
          border-radius: 50%;
          box-shadow: ${particlesSmall};
          animation: animStar 50s linear infinite;
        `;
      }

      if (particles2) {
        particles2.style.cssText = `
          width: 1.5px;
          height: 1.5px;
          border-radius: 50%;
          box-shadow: ${particlesMedium};
          animation: animateParticle 100s linear infinite;
        `;
      }

      if (particles3) {
        particles3.style.cssText = `
          width: 2px;
          height: 2px;
          border-radius: 50%;
          box-shadow: ${particlesLarge};
          animation: animateParticle 150s linear infinite;
        `;
      }
    },
    [particles1Ref, particles2Ref, particles3Ref]
  );

  useLayoutEffect(() => {
    const theme = getTheme();

    particles(theme);
  }, [particles]);

  useLayoutEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = getTheme();

      particles(theme);
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
    <div className="absolute inset-0 block">
      <div ref={particles1Ref} className="fixed inset-0"></div>
      <div ref={particles2Ref} className="fixed inset-0"></div>
      <div ref={particles3Ref} className="fixed inset-0"></div>
    </div>
  );
}
