"use client";

import SearchIcon from "@mui/icons-material/Search";

import { motion } from "framer-motion";

import Fuse from "fuse.js";

import { useMemo, useState } from "react";

import ArrowCard from "@/components/ArrowCard";

import legals from "@/data/legals";
import posts from "@/data/posts";
import projects from "@/data/projects";

export default function Search() {
  const [query, setQuery] = useState<string>("");

  const data = [...posts, ...projects, ...legals];

  const fuse = new Fuse(data, {
    keys: ["metadata.slug", "metadata.title", "metadata.description", "metadata.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  });

  const results = useMemo(
    () => (query.length < 2 ? [] : fuse.search(query).map((result) => result.item)),
    [query]
  );

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

      {query.length >= 2 && results.length >= 1 && (
        <div className="mt-12">
          <div className="text-sm uppercase mb-2">
            Found {results.length} results for {`'${query}'`}
          </div>
          <motion.ul
            variants={{
              hidden: { opacity: 0, y: 20 },
              block: { opacity: 1, y: 0, transition: { staggerChildren: 0.16 } },
            }}
            initial="hidden"
            animate="block"
            className="flex flex-col gap-3"
          >
            {results.map((result, i) => (
              <motion.li
                key={`result-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
                }}
              >
                <ArrowCard entry={result} pill={true} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}
    </div>
  );
}
