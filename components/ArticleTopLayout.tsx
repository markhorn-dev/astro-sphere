"use client";

import CalendarToday from "@mui/icons-material/CalendarToday";
import LinkIcon from "@mui/icons-material/Link";
import MenuBook from "@mui/icons-material/MenuBook";
import Public from "@mui/icons-material/Public";
import classnames from "classnames";

import { useRouter } from "next/navigation";

import Link, { withTransitionTo } from "@/components/ViewTransitionLink";
import type { PostItem, PostType } from "@/lib/db";

export interface ArticleTopLayoutProps {
  curr: PostItem;
  type: PostType;
}

// const getReadingTime = (html: string) => {
//   const textOnly = html.replace(/<[^>]+>/g, "");
//   const wordCount = textOnly.split(/\s+/).length;
//   const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
//   return `${readingTimeMinutes} min read`;
// };

export default function ArticleTopLayout({ curr, type }: ArticleTopLayoutProps) {
  const router = useRouter();

  return (
    curr && (
      <div>
        <button
          className={classnames(
            "group w-fit p-1.5 gap-1.5 text-sm flex items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out",
            {
              hidden: type === "legals",
            }
          )}
          onClick={() => withTransitionTo(router, `/${type}`)}
        >
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
              x1="19"
              y1="12"
              x2="5"
              y2="12"
              className="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            />
            <polyline
              points="12 19 5 12 12 5"
              className="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            />
          </svg>
          <div className="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
            Back to {type}
          </div>
        </button>
        <div className="flex flex-wrap text-sm uppercase mt-12 gap-3 opacity-75">
          <div className="flex items-center gap-2">
            <CalendarToday className="size-4 stroke-current" />

            {curr.created &&
              Intl.DateTimeFormat(undefined, {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }).format(new Date(curr.created))}
          </div>
          <div className="flex items-center gap-2">
            <MenuBook className="size-4 stroke-current" />
            {/* {readingTime} */}
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-black dark:text-white mt-2">{curr.title}</h1>
        {/* <div className="mt-1">{curr.description}</div> */}
        {(curr.demo || curr.repo) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {curr.demo && (
              <Link
                href={curr.demo}
                target="_blank"
                className="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"
              >
                <Public className="size-4" />
                <span className="text-current group-hover:text-black group-hover:dark:text-white blend">
                  See Demo
                </span>
              </Link>
            )}
            {curr.repo && (
              <Link
                href={curr.repo}
                target="_blank"
                className="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"
              >
                <LinkIcon className="size-4" />
                <span className="text-current group-hover:text-black group-hover:dark:text-white blend">
                  See Repository
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    )
  );
}
