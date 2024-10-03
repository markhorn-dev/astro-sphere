"use client";

import BottomLayout from "@/components/BottomLayout";
import Search from "@/components/Search";

import TopLayout from "@/components/TopLayout";

import { SEARCH } from "@/lib/config";

import { posts } from "@/lib/data/blog";
import { projects } from "@/lib/data/projects";

export default function SearchPage() {
  return (
    <>
      <TopLayout>
        <div className="animate page-heading">{SEARCH.TITLE}</div>
      </TopLayout>
      <BottomLayout>
        <div className="animate">
          <Search data={[...posts, ...projects]} />
        </div>
      </BottomLayout>
    </>
  );
}
