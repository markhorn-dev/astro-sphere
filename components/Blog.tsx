"use client";

import CheckBox from "@mui/icons-material/CheckBox";
import Square from "@mui/icons-material/Square";

import classnames from "classnames";

import { motion } from "framer-motion";

import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import ArrowCard from "@/components/ArrowCard";
import posts, { tags } from "@/data/posts";

export default function Blog() {
  const [selecteds, setSelecteds] = useState(new Set<string>());

  const filteredPosts = useMemo(
    () =>
      Boolean(selecteds?.size)
        ? posts.filter(({ metadata }) => metadata.tags.some((tag) => selecteds.has(tag)))
        : posts,
    [posts, selecteds]
  );

  const handleClickTagToggle = (tag: string) => {
    setSelecteds((prev) => {
      const prevTags = Array.from(prev);

      return new Set(
        prevTags.includes(tag) ? prevTags.filter((p) => p !== tag) : prevTags.concat(tag)
      );
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="col-span-3 sm:col-span-1">
        <div className="sticky top-24 sm:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[80vh] sm:overflow-y-auto px-2">
          <div className="text-sm font-semibold uppercase mb-2 text-black dark:text-white">
            Filter
          </div>
          <motion.ul
            variants={{
              hidden: { opacity: 0, y: 20 },
              block: { opacity: 1, y: 0, transition: { staggerChildren: 0.02 } },
            }}
            initial="hidden"
            animate="block"
            className="flex flex-wrap sm:flex-col gap-1.5"
          >
            {tags.map((tag, i) => (
              <motion.li
                key={`tag-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
                }}
                className="sm:w-full"
              >
                <button
                  onClick={() => handleClickTagToggle(tag)}
                  title={tag}
                  className={twMerge(
                    classnames(
                      "w-full px-2 py-1 rounded flex items-center gap-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 hover:dark:bg-white/15 transition-colors duration-300 ease-in-out",
                      { "text-black dark:text-white": selecteds.has(tag) }
                    )
                  )}
                >
                  <Square
                    className={twMerge(
                      classnames(
                        "size-5 stroke-black dark:stroke-none fill-black/50 dark:fill-white/50 transition-colors duration-300 ease-in-out",
                        {
                          "!hidden": selecteds.has(tag),
                          "fill-white !block": !selecteds.has(tag),
                        }
                      )
                    )}
                  />
                  <CheckBox
                    className={twMerge(
                      classnames(
                        "size-5 fill-black/50 dark:fill-white/50 transition-colors duration-300 ease-in-out",
                        {
                          "!hidden": !selecteds.has(tag),
                          "fill-black dark:fill-white !block": selecteds.has(tag),
                        }
                      )
                    )}
                  />
                  <span className="truncate">{tag}</span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="col-span-3 sm:col-span-2">
        <div className="flex flex-col">
          <div className="text-sm uppercase mb-2">
            SHOWING {filteredPosts.length} OF {posts.length} POSTS
          </div>
          <motion.ul
            variants={{
              hidden: { opacity: 0, y: 20 },
              block: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
            }}
            initial="hidden"
            animate="block"
            className="flex flex-col gap-3"
          >
            {filteredPosts.map((post, i) => (
              <motion.li
                key={`post-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
                }}
              >
                <ArrowCard entry={post} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
