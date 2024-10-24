"use client";

import { motion } from "framer-motion";

import Fuse from "fuse.js";

import { useMemo } from "react";

import ArrowCard from "@/components/ArrowCard";
import type { PostItem, PostType } from "@/lib/db";

export interface SearchResultProps {
  label: PostType;
  query: string;
  posts: Array<PostItem>;
}

export default function SearchResult({ label, posts, query }: SearchResultProps) {
  const fuse = new Fuse(posts, {
    keys: ["slug", "title", "series"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  });

  const results = useMemo(
    () => (query.length < 2 ? [] : fuse.search(query).map((result) => result.item)),
    [query]
  );

  return results.map((result, i) => (
    <motion.li
      key={`result-${i}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
      }}
    >
      <ArrowCard post={result} type={label} />
    </motion.li>
  ));
}
