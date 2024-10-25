import Blog from "@/components/Blog";
import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import { author, pagination, site } from "@/config";

import db, { getSeries } from "@/lib/db";

export const metadata = {
  title: `${site.name} - ${author.name}'s Blog`,
  description: `${author.name}'s Blog Posts.`,
};

interface BlogPageParams {
  searchParams: Promise<{ from?: string; size?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageParams) {
  const { from = 0, size = pagination.pageSize } = await searchParams;

  const posts = (await db).data.posts;

  const series = getSeries(posts);

  const pagedPosts = posts.slice(Number(from), Number(size));

  return (
    <>
      <TopLayout className="page-heading">Blog</TopLayout>

      <BottomLayout>
        <Blog posts={pagedPosts} series={series} />
      </BottomLayout>
    </>
  );
}
