"use client";

import "@/styles/stars.css";

import { useEffect, useRef } from "react";

const interval = 5000;

export default function TwinklingStars() {
  const twinkleStarRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const twinkleStarTemplate = twinkleStarRef.current;
    if (!twinkleStarTemplate) return;

    let timeout = setTimeout(function generateTwinkleStar() {
      // Clone the twinkle star template and set its attributes.
      const twinkleStar = twinkleStarTemplate.cloneNode(true) as SVGSVGElement;

      const width =
        window.innerWidth < 768
          ? `${Math.floor(Math.random() * (15 - 7.5 + 1) + 7.5)}`
          : `${Math.floor(Math.random() * (30 - 15 + 1) + 15)}`;

      twinkleStar.style.setProperty("left", `${Math.floor(Math.random() * window.innerWidth)}px`);
      twinkleStar.style.setProperty(
        "top",
        `${Math.floor(Math.random() * (window.innerHeight / 3))}px`
      );

      twinkleStar.style.setProperty("width", `${width}px`);
      twinkleStar.style.setProperty("height", `${width}px`);

      twinkleStar.classList.add("absolute");
      twinkleStar.classList.add("animate-twinkle");

      document.querySelector("#galaxy")?.appendChild(twinkleStar);

      // Remove the twinkle star after the animation is completed.
      setTimeout(() => twinkleStar.remove(), interval / 2);
      timeout = setTimeout(generateTwinkleStar, interval);
    }, interval);

    return () => {
      clearTimeout(timeout);
    };
  }, [twinkleStarRef]);

  return (
    <svg
      ref={twinkleStarRef}
      width="149"
      height="149"
      viewBox="0 0 149 149"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="twinkle-star"
    >
      <circle cx="74" cy="74" r="11" fill="white" />
      <rect
        y="141.421"
        width="200"
        height="10"
        transform="rotate(-45 0 141.421)"
        fill="url(#paint0_linear_4_2)"
      />
      <rect
        x="7.07107"
        width="200"
        height="10"
        transform="rotate(45 7.07107 0)"
        fill="url(#paint1_linear_4_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4_2"
          x1="0"
          y1="146.421"
          x2="200"
          y2="146.421"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E1E1E" />
          <stop offset="0.445" stopColor="white" />
          <stop offset="0.58721" stopColor="white" />
          <stop offset="1" stopColor="#1E1E1E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4_2"
          x1="7.07107"
          y1="5"
          x2="207.071"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E1E1E" />
          <stop offset="0.42" stopColor="white" />
          <stop offset="0.555" stopColor="white" />
          <stop offset="1" stopColor="#1E1E1E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
