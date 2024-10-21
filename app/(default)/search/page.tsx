"use client";

import { motion } from "framer-motion";

import BottomLayout from "@/components/BottomLayout";
import Search from "@/components/Search";

import TopLayout from "@/components/TopLayout";

import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import { SEARCH } from "@/lib/config";

export default function SearchPage() {
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
          {SEARCH.TITLE}
        </motion.div>
      </TopLayout>
      <BottomLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.56, ease: "easeInOut", delay: 0.15 }}
        >
          <Search data={[...posts, ...projects]} />
        </motion.div>
      </BottomLayout>
    </>
  );
}
