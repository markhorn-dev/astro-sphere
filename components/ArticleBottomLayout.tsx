"use client";

import "prismjs/themes/prism-twilight.css";

import { useMemo } from "react";

import Link from "@/components/ViewTransitionLink";

import { find, next, prev } from "@/lib/find";

export interface ArticleBottomLayoutProps {
  collection: "blog" | "projects" | "legals";
  slug: string;
}

export default function ArticleBottomLayout({ collection, slug }: ArticleBottomLayoutProps) {
  const entry = useMemo(() => find({ collection, slug }), [collection, slug]);

  const prevEntry = useMemo(() => prev({ collection, slug }), [collection, slug]);

  const nextEntry = useMemo(() => next({ collection, slug }), [collection, slug]);

  return (
    <div>
      <article>{entry?.Component && <entry.Component />}</article>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevEntry ? (
          <Link
            href={`/${prevEntry.metadata.collection}/${prevEntry.metadata.slug}`}
            className="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 blend"
          >
            <div className="order-2 w-full h-full group-hover:text-black group-hover:dark:text-white blend">
              <div className="flex flex-wrap gap-2">
                <div className="text-sm uppercase">Prev</div>
              </div>
              <div className="font-semibold mt-3 text-black dark:text-white">
                {prevEntry.metadata.title}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="order-1 stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-180"
            >
              <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                className="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
              />
              <polyline
                points="12 5 19 12 12 19"
                className="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
              />
            </svg>
          </Link>
        ) : (
          <div className="invisible"></div>
        )}

        {nextEntry ? (
          <Link
            href={`/${nextEntry.metadata.collection}/${nextEntry.metadata.slug}`}
            className="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"
          >
            <div className="w-full h-full text-right group-hover:text-black group-hover:dark:text-white blend">
              <div className="text-sm uppercase">Next</div>
              <div className="font-semibold mt-3 text-black dark:text-white">
                {nextEntry.metadata.title}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"
            >
              <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                className="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
              />
              <polyline
                points="12 5 19 12 12 19"
                className="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
              />
            </svg>
          </Link>
        ) : (
          <div className="invisible"></div>
        )}
      </div>
    </div>
  );
}
