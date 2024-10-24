"use client";

import { motion } from "framer-motion";

import type { PostArticle } from "@/lib/db";

function formatDate(input: number) {
  // if ("Now" === input) return input;

  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "2-digit",
  }).format(new Date(input));
}

export default function CareerItem({ curr }: PostArticle) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 20 },
        block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
      }}
      initial="hidden"
      whileInView="block"
      viewport={{ once: true, amount: 0.4 }}
      className="py-8 first-of-type:mt-0 first-of-type:pt-0 last-of-type:border-none"
    >
      <div className="text-sm uppercase mb-4">
        {curr && formatDate(curr.created)} - {curr && formatDate(curr.updated)}
      </div>
      <div className="text-black dark:text-white font-semibold">{curr?.title}</div>
      {/* <div className="text-sm font-semibold">{metadata.role}</div> */}
      {/* <article className="prose dark:prose-invert">{Component && <Component />}</article> */}
    </motion.li>
  );
}
