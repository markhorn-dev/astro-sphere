import Blog from "@/components/Blog";
import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import { author, site } from "@/config";

import db from "@/lib/db";

export const metadata = {
  title: `${site.name} - ${author.name}'s Blog`,
  description: `${author.name}'s Blog Posts.`,
};

interface BlogPageParams {
  searchParams: Promise<{ from?: string; size?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageParams) {
  const { from = 0, size = 10 } = await searchParams;

  const posts = (await db).data.posts.slice(Number(from), Number(size));

  const series = posts.reduce(
    (acc, { series }) => (series ? acc.add(series) : acc),
    new Set<string>()
  );

  return (
    <>
      <TopLayout className="page-heading">Blog</TopLayout>

      <BottomLayout>
        <Blog posts={posts} series={Array.from(series)} />
      </BottomLayout>
    </>
  );
}
