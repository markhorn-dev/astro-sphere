"use client";

import Fuse from "fuse.js";

import { useMemo, useState } from "react";

import ArrowCard from "@/components/ArrowCard";

import type { PostItem } from "@/lib/data/blog";
import type { ProjectItem } from "@/lib/data/projects";

type ContentItem = PostItem | ProjectItem;

export interface SearchProps {
  data: Array<ContentItem>;
}

export default function Search({ data }: SearchProps) {
  const [query, setQuery] = useState<string>("");

  const fuse = new Fuse(data, {
    keys: ["metadata.slug", "metadata.title", "metadata.summary", "metadata.tags"],
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
        <svg className="absolute size-6 left-1.5 top-1/2 -translate-y-1/2 stroke-current">
          <use href={`/ui.svg#search`} />
        </svg>
      </div>

      {query.length >= 2 && results.length >= 1 && (
        <div className="mt-12">
          <div className="text-sm uppercase mb-2">
            Found {results.length} results for {`'${query}'`}
          </div>
          <ul className="flex flex-col gap-3">
            {results.map((result, i) => (
              <li key={`result-${i}`}>
                <ArrowCard entry={result} pill={true} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
