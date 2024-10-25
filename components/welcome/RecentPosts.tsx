"use client";

import { motion } from "framer-motion";

import ArrowCard from "@/components/ArrowCard";
import Link from "@/components/ViewTransitionLink";
import type { PostItem } from "@/lib/db";

export interface RecentPostsProps {
  posts: Array<PostItem>;
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.56, ease: "easeInOut" }}
    >
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="font-semibold text-black dark:text-white">Recent posts</p>
          <Link
            href="/posts"
            className="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"
          >
            <span className="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
              All posts
            </span>
          </Link>
        </div>
        <motion.ul
          variants={{
            hidden: { opacity: 0, y: 20 },
            block: { opacity: 1, y: 0, transition: { staggerChildren: 0.16 } },
          }}
          initial="hidden"
          animate="block"
          className="space-y-4"
        >
          {posts.slice(0, 3).map((post, i) => (
            <motion.li
              key={`post-${i}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                block: { opacity: 1, y: 0, transition: { duration: 0.56 } },
              }}
            >
              <ArrowCard post={post} type="posts" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
