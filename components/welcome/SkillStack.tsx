"use client";

import { motion } from "framer-motion";

import StackCard from "./StackCard";

import Link from "@/components/ViewTransitionLink";
import { stack } from "@/config";

export default function SkillStack() {
  return (
    <section>
      <div className="space-y-4">
        <p className="font-semibold text-black dark:text-white">Website build with</p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            block: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="block"
          viewport={{ once: true, amount: "all" }}
          className="flex flex-wrap items-center gap-2 mt-5"
        >
          {stack?.map(({ text, href }, i) => (
            <motion.span
              key={`stack-card-${i}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
              }}
            >
              <StackCard text={text} href={href} />
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
