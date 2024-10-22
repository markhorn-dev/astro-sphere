"use client";

import { motion } from "framer-motion";

import Container from "@/components/Container";

import { careers } from "@/data/careers";

function formatDate(input: Date | string) {
  if ("Now" === input) return input;

  const date = new Date(input);
  return `${date.getFullYear()} ${date.getMonth() + 1}`;
}

export default function CareerLayout() {
  return (
    <div className="flex-1 py-5">
      <Container size="md">
        <motion.ul
          variants={{
            hidden: { opacity: 0, y: 20 },
            block: { opacity: 1, y: 0, transition: { staggerChildren: 0.16 } },
          }}
          initial="hidden"
          animate="block"
        >
          {careers.map(({ Component, metadata }, i) => (
            <motion.li
              key={`career-${i}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
              }}
              className="border-b border-black/10 dark:border-white/25 mt-4 py-8 first-of-type:mt-0 first-of-type:pt-0 last-of-type:border-none"
            >
              <div className="text-sm uppercase mb-4">
                {formatDate(metadata.started)} - {formatDate(metadata.ended)}
              </div>
              <div className="text-black dark:text-white font-semibold">{metadata.company}</div>
              <div className="text-sm font-semibold">{metadata.role}</div>
              <article className="prose dark:prose-invert">{Component && <Component />}</article>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </div>
  );
}
