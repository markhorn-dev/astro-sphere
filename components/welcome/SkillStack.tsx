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
          {stack.map((item, i) => (
            <motion.span
              key={`stack-card-${i}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
              }}
            >
              <StackCard text={item.text} icon={item.icon} href={item.href} />
            </motion.span>
          ))}
        </motion.div>

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
    </section>
  );
}
