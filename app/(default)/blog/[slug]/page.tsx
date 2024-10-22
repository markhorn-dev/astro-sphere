import ArticleBottomLayout from "@/components/ArticleBottomLayout";
import ArticleTopLayout from "@/components/ArticleTopLayout";

import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";
import { find } from "@/lib/find";

interface BlogViewerProps {
  params: Promise<{
    slug: string;
  }>;
}

// cannot reusable: https://github.com/vercel/next.js/discussions/50080
export async function generateMetadata({ params }: BlogViewerProps) {
  const { slug } = await params;
  const { title, description } = find({ collection: "blog", slug })?.metadata || {};
  return { title, description };
}

export default async function BlogViewer({ params }: BlogViewerProps) {
  const { slug } = await params;
  return (
    <>
      <TopLayout>
        <ArticleTopLayout collection="blog" slug={slug} />
      </TopLayout>

      <BottomLayout>
        <ArticleBottomLayout collection="blog" slug={slug} />
      </BottomLayout>
    </>
  );
}
