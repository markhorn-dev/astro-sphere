"use client";

import { usePathname } from "next/navigation";
import { Fragment, useCallback, useEffect, useRef } from "react";

import ArrowCard from "@/components/ArrowCard";
import MeteorShower from "@/components/MeteorShower";
import StackCard from "@/components/StackCard";
import TwinklingStars from "@/components/TwinklingStars";
import Link from "@/components/ViewTransitionLink";
import { SOCIALS } from "@/lib/config";

import { posts } from "@/lib/data/blog";
import { projects } from "@/lib/data/projects";
import getTheme from "@/lib/getTheme";

const stack = [
  {
    text: "Astro",
    icon: "astro",
    href: "https://astro.build",
  },
  {
    text: "Javascript",
    icon: "javascript",
    href: "https://www.javascript.com",
  },
  {
    text: "Typescript",
    icon: "typescript",
    href: "https://www.typescriptlang.org",
  },
  {
    text: "Tailwind",
    icon: "tailwind",
    href: "https://tailwindcss.com",
  },
];

function getRandom(max: number) {
  return Math.floor(Math.random() * max);
}

function generateParticles(ilen: number, theme: "light" | "dark") {
  const color = theme === "dark" ? "#fff" : "#000";
  let value = `${getRandom(2560)}px ${getRandom(2560)}px ${color}`;
  for (let i = 2; i <= ilen; i++) value += `, ${getRandom(2560)}px ${getRandom(2560)}px ${color}`;
  return value;
}

function generateStars(ilen: number, theme: "light" | "dark") {
  const color = theme === "dark" ? "#fff" : "#000";
  let value = `${getRandom(2560)}px ${getRandom(2560)}px ${color}`;
  for (let i = 2; i <= ilen; i++) value += `, ${getRandom(2560)}px ${getRandom(2560)}px ${color}`;

  return value;
}

export default function HomePage() {
  const pathname = usePathname();

  const stars1Ref = useRef<HTMLDivElement>(null);
  const stars2Ref = useRef<HTMLDivElement>(null);
  const stars3Ref = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const theme = getTheme();

    particles(theme);
    stars(theme);
  }, [particles, stars]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = getTheme();

      particles(theme);
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
  }, [pathname]);

  return (
    <>
      <div className="absolute inset-0 block">
        <div ref={particles1Ref} className="fixed inset-0"></div>
        <div ref={particles2Ref} className="fixed inset-0"></div>
        <div ref={particles3Ref} className="fixed inset-0"></div>
      </div>

      <div className="absolute inset-0 hidden bg-white dark:bg-black">
        <div ref={stars1Ref} className="fixed inset-0"></div>
        <div ref={stars2Ref} className="fixed inset-0"></div>
        <div ref={stars3Ref} className="fixed inset-0"></div>
      </div>

      <div id="galaxy" className="fixed inset-0">
        <div className="invisible">
          <TwinklingStars />
        </div>
        <MeteorShower />
      </div>

      <section className="relative h-screen w-full">
        <div id="planetcont" className="animate absolute inset-0 top-1/4 overflow-hidden">
          <div
            id="crescent"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[250vw] min-h-[100vh] aspect-square rounded-full p-[1px] bg-gradient-to-b from-black/25 dark:from-white/75 from-0% to-transparent to-5%"
          >
            <div
              id="planet"
              className="w-full h-full bg-white dark:bg-black rounded-full p-[1px] overflow-hidden flex justify-center"
            >
              <div
                id="blur"
                className="w-full h-20 rounded-full bg-neutral-900/25 dark:bg-white/25 blur-3xl"
              />
            </div>
          </div>
        </div>
        <div className="animate absolute h-full w-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="p-5 text-center">
              <p className="animated text-lg md:text-xl lg:text-2xl font-semibold opacity-75">
                Hello, I am ...
              </p>
              <p className="animated text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black dark:text-white">
                Next.js Astro Sphere
              </p>
              <p className="animated text-sm md:text-base lg:text-lg opacity-75">
                Currently designing products for humans.
              </p>
              <div id="ctaButtons" className="animated flex flex-wrap gap-4 justify-center mt-5">
                <Link
                  href="/blog"
                  className="py-2 px-4 rounded truncate text-xs md:text-sm lg:text-base bg-black dark:bg-white text-white dark:text-black hover:opacity-75 blend"
                >
                  Read my blog
                </Link>
                <Link
                  href="/work"
                  className="py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"
                >
                  View my work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-white dark:bg-black">
        <div className="mx-auto max-w-screen-sm p-5 space-y-24 pb-16">
          <section className="animate">
            <article>
              <p>
                I am a{" "}
                <b>
                  <i>software engineer</i>
                </b>
                ,{" "}
                <b>
                  <i>ui/ux designer</i>
                </b>
                ,{" "}
                <b>
                  <i>product planner</i>
                </b>
                ,{" "}
                <b>
                  <i>mentor</i>
                </b>
                ,{" "}
                <b>
                  <i>student</i>
                </b>
                ,{" "}
                <b>
                  <i>minimalist</i>
                </b>
                ,{" "}
                <b>
                  <i>eternal optimist</i>
                </b>
                ,{" "}
                <b>
                  <i>crypto enthusiast</i>
                </b>{" "}
                and{" "}
                <b>
                  <i>sarcasm connoisseur</i>
                </b>
                .
              </p>
              <p>
                I love to both build and break things. I am motivated by challenging projects with
                self-guided research and dynamic problem solving. My true passion is crafting
                creative front end designs with unique takes on color, typography and motion.
              </p>
              <p>During my career</p>
              <p>
                I have built products ranging from marketing and ecommerce websites to complex
                enterprise apps with focus on delivering fast, elegant code along with delightful
                user interfaces.
              </p>
              <p>Now</p>
              <p>
                I currently work as a software engineer at StreamlineFS, where I do product
                planning, design and development.
              </p>
            </article>
          </section>

          <section className="animate">
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="font-semibold text-black dark:text-white">Recent posts</p>
                <Link
                  href="/blog"
                  className="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"
                >
                  <span className="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
                    All posts
                  </span>
                </Link>
              </div>
              <ul className="space-y-4">
                {posts.slice(0, 3).map((post, i) => (
                  <li key={`post-${i}`}>
                    <ArrowCard entry={post} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="animate">
            <div className="space-y-4">
              <p className="font-semibold text-black dark:text-white">Website build with</p>
              <div className="flex flex-wrap items-center gap-2 mt-5">
                {stack.map((item, i) => (
                  <StackCard
                    key={`stack-card-${i}`}
                    text={item.text}
                    icon={item.icon}
                    href={item.href}
                  />
                ))}
              </div>
              <div>
                Performing reactivity and statefulness, special guest
                <Link
                  href="https://www.solidjs.com/"
                  target="_blank"
                  className="w-fit group underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"
                >
                  <span className="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
                    SolidJS
                  </span>
                </Link>
              </div>
            </div>
          </section>

          <section className="animate">
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="font-semibold text-black dark:text-white">Recent projects</p>
                <Link
                  href="/projects"
                  className="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"
                >
                  <span className="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
                    All projects
                  </span>
                </Link>
              </div>
              <ul className="space-y-4">
                {projects.slice(0, 3).map((project, i) => (
                  <li key={`project-${i}`}>
                    <ArrowCard entry={project} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="animate">
            <div>
              <p className="font-semibold text-black dark:text-white">Let's Connect</p>
              <p>Reach out to me via email or on social media.</p>
              <div className="grid grid-cols-4 gap-y-2 mt-4 auto-cols-min">
                {SOCIALS.map((social, i) => (
                  <Fragment key={`social-${i}`}>
                    <div className="col-span-1 flex items-center gap-1">
                      <span className="whitespace-nowrap truncate">{social.NAME}</span>
                    </div>
                    <div className="col-span-3 truncate">
                      <Link
                        href={social.HREF}
                        target="_blank"
                        className="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"
                      >
                        <span className="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
                          {social.TEXT}
                        </span>
                      </Link>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
