"use client";

import "@/styles/meteors.css";

import { useEffect, useRef } from "react";

const interval = 1500;

export default function MeteorShower() {
  const showUrRef = useRef<HTMLDivElement>(null);
  const showDrRef = useRef<HTMLDivElement>(null);
  const showDlRef = useRef<HTMLDivElement>(null);
  const showUlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout = setTimeout(function createMeteor() {
      // create a meteor
      const meteor = document.createElement("div");

      meteor.style.setProperty("left", `${Math.round(Math.random() * window.innerWidth)}px`);
      meteor.style.setProperty("top", `${Math.round(Math.random() * window.innerHeight)}px`);
      meteor.classList.add("meteor");

      // append the meteor to a random meteor shower (direction)
      const showers = [
        showUrRef.current,
        showDrRef.current,
        showDlRef.current,
        showUlRef.current,
      ].filter(Boolean);

      if (showers.length > 0) showers[Math.floor(Math.random() * showers.length)]?.append(meteor);

      // remove the meteor after the animation duration
      setTimeout(() => {
        meteor.remove();
      }, interval * 2.5);

      timeout = setTimeout(createMeteor, interval);
    }, interval);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="meteors">
      <div ref={showUrRef} className="shower ur" />
      <div ref={showDrRef} className="shower dr" />
      <div ref={showDlRef} className="shower dl" />
      <div ref={showUlRef} className="shower ul" />
    </div>
  );
}
