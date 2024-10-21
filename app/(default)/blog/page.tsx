"use client";

import { motion } from "framer-motion";

import Blog from "@/components/Blog";
import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import { posts, tags } from "@/data/blog";
import { BLOG } from "@/lib/config";

export default function BlogPage() {
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
          {BLOG.TITLE}
        </motion.div>
      </TopLayout>

      <BottomLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.56, ease: "easeInOut" }}
        >
          <Blog tags={tags} posts={posts} />
        </motion.div>
      </BottomLayout>
    </>
  );
}
