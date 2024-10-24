"use client";

import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";

import { useState } from "react";

import SearchResult from "./SearchResult";

import type { PostItem } from "@/lib/db";

export interface SearchProps {
  posts: Array<PostItem>;
  projects: Array<PostItem>;
  legals: Array<PostItem>;
}

export default function Search({ posts, projects, legals }: SearchProps) {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          name="search"
          type="text"
          value={query}
          onInput={(e: React.FormEvent<HTMLInputElement>) => setQuery(e.currentTarget.value)}
          autoComplete="off"
          spellCheck={false}
          placeholder="What are you looking for?"
          className="w-full px-2.5 py-1.5 pl-10 rounded outline-none text-black dark:text-white bg-black/5 dark:bg-white/15 border border-black/10 dark:border-white/20 focus:border-black focus:dark:border-white"
        />
        <SearchIcon className="absolute size-6 left-1.5 top-1/2 -translate-y-1/2 stroke-current" />
      </div>

      {query.length > 1 && (
        <div className="mt-12">
          <div className="text-sm uppercase mb-2">Results for {`"${query}"`}</div>
          <motion.ul
            variants={{
              hidden: { opacity: 0, y: 20 },
              block: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
            }}
            initial="hidden"
            animate="block"
            className="flex flex-col gap-3"
          >
            <>
              <SearchResult label="posts" posts={posts} query={query} />
              <SearchResult label="projects" posts={projects} query={query} />
              <SearchResult label="legals" posts={legals} query={query} />
            </>
          </motion.ul>
        </div>
      )}
    </div>
  );
}
