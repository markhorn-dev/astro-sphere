"use client";

import "prismjs/themes/prism-twilight.css";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";

import { useMemo } from "react";

import ArticleBottomLayout from "@/components/ArticleBottomLayout";
import ArticleTopLayout from "@/components/ArticleTopLayout";

import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import legals, { type LegalItem } from "@/data/legals";

export default function LegalViewer() {
  const { slug } = useParams();

  const legal: LegalItem | undefined = useMemo(
    () => legals.find(({ metadata }) => metadata.slug === slug),
    [legals, slug]
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
          <ArticleTopLayout entry={legal} />
        </motion.div>
      </TopLayout>

      <BottomLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.56, ease: "easeInOut", delay: 0.15 }}
        >
          <ArticleBottomLayout entry={legal} />
        </motion.div>
      </BottomLayout>
    </>
  );
}
