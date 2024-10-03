"use client";

import Blog from "@/components/Blog";
import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import { BLOG } from "@/lib/config";

import { posts, tags } from "@/lib/data/blog";

export default function BlogPage() {
  return (
    <>
      <TopLayout>
        <div className="animate page-heading">{BLOG.TITLE}</div>
      </TopLayout>

      <BottomLayout>
        <div className="animate">
          <Blog tags={tags} posts={posts} />
        </div>
      </BottomLayout>
    </>
  );
}
