"use client";

import { useParams } from "next/navigation";

import { useMemo } from "react";

import ArticleBottomLayout from "@/components/ArticleBottomLayout";
import ArticleTopLayout from "@/components/ArticleTopLayout";

import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import { type PostItem, posts } from "@/lib/data/blog";
import type { ProjectItem } from "@/lib/data/projects";

type ContentItem = PostItem | ProjectItem;

export default function BlogViewer() {
  const { slug } = useParams();

  const post: ContentItem | undefined = useMemo(
    () => posts.find(({ metadata }) => metadata.slug === slug),
    [posts, slug]
  );

  return (
    <>
      <TopLayout>
        <div className="animate">
          <ArticleTopLayout entry={post} />
        </div>
      </TopLayout>

      <BottomLayout>
        <div className="animate">
          <ArticleBottomLayout entry={post} />
        </div>
      </BottomLayout>
    </>
  );
}
