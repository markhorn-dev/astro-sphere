"use client";

import { motion } from "framer-motion";

import { Fragment } from "react";

import Link from "@/components/ViewTransitionLink";

import { social } from "@/config";

export default function ConnectSocial() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.56, ease: "easeInOut" }}
    >
      <p className="font-semibold text-black dark:text-white">Let's Connect</p>
      <p>Reach out to me via email or on social media.</p>
      <div className="grid grid-cols-4 gap-y-2 mt-4 auto-cols-min">
        {social.map(({ name, href, text }, i) => (
          <Fragment key={`social-${i}`}>
            <div className="col-span-1 flex items-center gap-1">
              <span className="whitespace-nowrap truncate">{name}</span>
            </div>
            <div className="col-span-3 truncate">
              <Link
                href={href}
                target="_blank"
                className="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"
              >
                <span className="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
                  {text}
                </span>
              </Link>
            </div>
          </Fragment>
        ))}
      </div>
    </motion.section>
  );
}
