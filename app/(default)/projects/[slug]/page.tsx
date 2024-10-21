"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";

import { useMemo } from "react";

import ArticleBottomLayout from "@/components/ArticleBottomLayout";
import ArticleTopLayout from "@/components/ArticleTopLayout";
import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import type { PostItem } from "@/data/posts";
import projects, { type ProjectItem } from "@/data/projects";

type ContentItem = PostItem | ProjectItem;

export default function ProjectViewer() {
  const { slug } = useParams();

  const project: ContentItem | undefined = useMemo(
    () => projects.find(({ metadata }) => metadata.slug === slug),
    [projects, slug]
  );

  return (
    <>
      <TopLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.56, ease: "easeInOut" }}
        >
          <ArticleTopLayout entry={project} />
        </motion.div>
      </TopLayout>
      <BottomLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.56, ease: "easeInOut", delay: 0.15 }}
        >
          <ArticleBottomLayout entry={project} />
        </motion.div>
      </BottomLayout>
    </>
  );
}
