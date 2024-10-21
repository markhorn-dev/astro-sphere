"use client";

import { motion } from "framer-motion";

import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import { works } from "@/data/works";
import { WORK } from "@/lib/config";

function formatWorkDate(input: Date | string) {
  if (typeof input === "string") return input;

  const month = input.toLocaleDateString("en-US", {
    month: "short",
  });

  const year = new Date(input).getFullYear();
  return `${month} ${year}`;
}

export default function WorkPage() {
  return (
    <>
      <TopLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.56, ease: "easeInOut" }}
          className="page-heading"
        >
          {WORK.TITLE}
        </motion.div>
      </TopLayout>
      <BottomLayout>
        <ul>
          {works.map(({ Component, metadata }, i) => (
            <motion.li
              key={`work-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{ duration: 0.56, ease: "easeInOut", delay: 0.15 * i }}
              className="border-b border-black/10 dark:border-white/25 mt-4 py-8 first-of-type:mt-0 first-of-type:pt-0 last-of-type:border-none"
            >
              <div className="text-sm uppercase mb-4">
                {formatWorkDate(metadata.started)} - {formatWorkDate(metadata.ended)}
              </div>
              <div className="text-black dark:text-white font-semibold">{metadata.company}</div>
              <div className="text-sm font-semibold">{metadata.role}</div>
              <article className="prose dark:prose-invert">{Component && <Component />}</article>
            </motion.li>
          ))}
        </ul>
      </BottomLayout>
    </>
  );
}
