"use client";

import { useParams } from "next/navigation";

import { useMemo } from "react";

import ArticleBottomLayout from "@/components/ArticleBottomLayout";
import ArticleTopLayout from "@/components/ArticleTopLayout";
import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import type { PostItem } from "@/lib/data/blog";
import { type ProjectItem, projects } from "@/lib/data/projects";

type ContentItem = PostItem | ProjectItem;

export default function ProjectViewer() {
  const { slug } = useParams();

  const project: ContentItem | undefined = useMemo(
    () => projects.find(({ metadata }) => metadata.slug === slug),
    [projects, slug]
  );

  return (
    <>
      <TopLayout>
        <div className="animate">
          <ArticleTopLayout entry={project} />
        </div>
      </TopLayout>
      <BottomLayout>
        <div className="animate">
          <ArticleBottomLayout entry={project} />
        </div>
      </BottomLayout>
    </>
  );
}
