"use client";

import CheckBox from "@mui/icons-material/CheckBox";
import Square from "@mui/icons-material/Square";

import classnames from "classnames";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import Pagination from "./Pagination";

import ArrowCard from "@/components/ArrowCard";
import { pagination } from "@/config";
import type { PostItem, PostType } from "@/lib/db";

export interface PostListProps {
  posts: Array<PostItem>;
  series: Array<string>;
  page: number;
  type: PostType;
}

export default function PostList({ posts: allPosts, series, page, type }: PostListProps) {
  const [selecteds, setSelecteds] = useState(new Set<string>());

  const {
    from,
    to,
    posts: seriesedPosts,
  } = useMemo(() => {
    const seriesedPosts =
      selecteds.size === 0
        ? allPosts
        : allPosts.filter((post) => (!post.series ? false : selecteds.has(post.series)));

    const from = (page - 1) * pagination.pageSize;
    const to = pagination.pageSize * page;

    return {
      from,
      to: seriesedPosts.length > to ? to : seriesedPosts.length,
      posts: seriesedPosts,
    };
  }, [allPosts, pagination, page, selecteds]);

  const posts = useMemo(() => seriesedPosts.slice(from, to), [seriesedPosts, from, to]);

  const handleClickSeriesToggle = (series: string) => {
    setSelecteds((prev) => {
      const prevTags = Array.from(prev);

      return new Set(
        prevTags.includes(series) ? prevTags.filter((p) => p !== series) : prevTags.concat(series)
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
            {series.map((name, i) => (
              <motion.li
                key={`series-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
                }}
                className="sm:w-full"
              >
                <button
                  onClick={() => handleClickSeriesToggle(name)}
                  title={name}
                  className={twMerge(
                    classnames(
                      "w-full px-2 py-1 rounded flex items-center gap-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 hover:dark:bg-white/15 transition-colors duration-300 ease-in-out",
                      { "text-black dark:text-white": selecteds.has(name) }
                    )
                  )}
                >
                  <Square
                    className={twMerge(
                      classnames(
                        "size-5 stroke-black dark:stroke-none fill-black/50 dark:fill-white/50 transition-colors duration-300 ease-in-out",
                        {
                          hidden: selecteds.has(name),
                          "fill-white block": !selecteds.has(name),
                        }
                      )
                    )}
                  />
                  <CheckBox
                    className={twMerge(
                      classnames(
                        "size-5 fill-black/50 dark:fill-white/50 transition-colors duration-300 ease-in-out",
                        {
                          hidden: !selecteds.has(name),
                          "fill-black dark:fill-white block": selecteds.has(name),
                        }
                      )
                    )}
                  />
                  <span className="truncate">{name}</span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="col-span-3 sm:col-span-2">
        <div className="flex flex-col">
          <div className="text-sm uppercase mb-2">
            SHOWING {from + 1} TO {to} OF {seriesedPosts.length} POSTS
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
            {posts.map((post, i) => (
              <motion.li
                key={`post-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
                }}
              >
                <ArrowCard post={post} type={type} />
              </motion.li>
            ))}
          </motion.ul>

          {/* Pagination... */}
          <Pagination total={seriesedPosts.length} page={page} />
        </div>
      </div>
    </div>
  );
}
