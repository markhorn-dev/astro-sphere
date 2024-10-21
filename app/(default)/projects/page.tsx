"use client";

import { motion } from "framer-motion";

import BottomLayout from "@/components/BottomLayout";
import Projects from "@/components/Projects";
import TopLayout from "@/components/TopLayout";

import projects, { tags } from "@/data/projects";
import { PROJECTS } from "@/lib/config";

export default function ProjectsPage() {
  return (
    <>
      <TopLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.56, ease: "easeInOut" }}
          className="page-heading"
        >
          {PROJECTS.TITLE}
        </motion.div>
      </TopLayout>

      <BottomLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.56, ease: "easeInOut" }}
        >
          <Projects tags={tags} projects={projects} />
        </motion.div>
      </BottomLayout>
    </>
  );
}
