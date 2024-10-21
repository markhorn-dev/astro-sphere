"use client";

import { motion } from "framer-motion";

import ArrowCard from "@/components/ArrowCard";
import Link from "@/components/ViewTransitionLink";

import projects from "@/data/projects";

export default function RecentProjects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.56, ease: "easeInOut" }}
    >
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
    </motion.section>
  );
}
