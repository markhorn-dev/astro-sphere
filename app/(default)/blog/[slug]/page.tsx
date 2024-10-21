"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";

import { useMemo } from "react";

import ArticleBottomLayout from "@/components/ArticleBottomLayout";
import ArticleTopLayout from "@/components/ArticleTopLayout";

import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import { type PostItem, posts } from "@/data/blog";
import type { ProjectItem } from "@/data/projects";

type ContentItem = PostItem | ProjectItem;

export default function BlogViewer() {
  const { slug } = useParams();

  const post: ContentItem | undefined = useMemo(
    () => posts.find(({ metadata }) => metadata.slug === slug),
    [posts, slug]
  );

  return (
    <>
      <TopLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.56, ease: "easeInOut" }}
        >
          <ArticleTopLayout entry={post} />
        </motion.div>
      </TopLayout>

      <BottomLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.56, ease: "easeInOut", delay: 0.15 }}
        >
          <ArticleBottomLayout entry={post} />
        </motion.div>
      </BottomLayout>
    </>
  );
}
