"use client";

import classnames from "classnames";

import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import ArrowCard from "@/components/ArrowCard";
import type { ProjectItem } from "@/lib/data/projects";

export interface ProjectsProps {
  tags: string[];
  projects: Array<ProjectItem>;
}

export default function Projects({ projects, tags }: ProjectsProps) {
  const [selecteds, setSelecteds] = useState(new Set<string>());

  const filteredProjects = useMemo(
    () =>
      Boolean(selecteds?.size)
        ? projects.filter(({ metadata }) => metadata.tags.some((tag) => selecteds.has(tag)))
        : projects,
    [projects, selecteds]
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
        <div className="sticky top-24">
          <div className="text-sm font-semibold uppercase mb-2 text-black dark:text-white">
            Filter
          </div>
          <ul className="flex flex-wrap sm:flex-col gap-1.5">
            {tags.map((tag, i) => (
              <li key={`tag-${i}`}>
                <button
                  onClick={() => handleClickTagToggle(tag)}
                  className={twMerge(
                    classnames(
                      "w-full px-2 py-1 rounded",
                      "whitespace-nowrap overflow-hidden overflow-ellipsis",
                      "flex gap-2 items-center",
                      "bg-black/5 dark:bg-white/10",
                      "hover:bg-black/10 hover:dark:bg-white/15",
                      "transition-colors duration-300 ease-in-out",
                      { "text-black dark:text-white": selecteds.has(tag) }
                    )
                  )}
                >
                  <svg
                    className={twMerge(
                      classnames(
                        "size-5 fill-black/50 dark:fill-white/50",
                        "transition-colors duration-300 ease-in-out",
                        { "fill-black dark:fill-white": selecteds.has(tag) }
                      )
                    )}
                  >
                    <use
                      href={`/ui.svg#square`}
                      className={!selecteds.has(tag) ? "block" : "hidden"}
                    />
                    <use
                      href={`/ui.svg#square-check`}
                      className={selecteds.has(tag) ? "block" : "hidden"}
                    />
                  </svg>
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-3 sm:col-span-2">
        <div className="flex flex-col">
          <div className="text-sm uppercase mb-2">
            SHOWING {filteredProjects.length} OF {projects.length} PROJECTS
          </div>
          <ul className="flex flex-col gap-3">
            {filteredProjects.map((project, i) => (
              <li key={`project-${i}`}>
                <ArrowCard entry={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
