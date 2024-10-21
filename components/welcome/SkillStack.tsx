"use client";

import { motion } from "framer-motion";

import StackCard from "./StackCard";

import Link from "@/components/ViewTransitionLink";
import { stack } from "@/config";

export default function SkillStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.56, ease: "easeInOut" }}
    >
      <div className="space-y-4">
        <p className="font-semibold text-black dark:text-white">Website build with</p>
        <div className="flex flex-wrap items-center gap-2 mt-5">
          {stack.map((item, i) => (
            <StackCard key={`stack-card-${i}`} text={item.text} icon={item.icon} href={item.href} />
          ))}
        </div>
        <div>
          Performing reactivity and statefulness, special guest{" "}
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
    </motion.section>
  );
}
