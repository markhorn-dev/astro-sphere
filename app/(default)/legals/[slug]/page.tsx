import ArticleBottomLayout from "@/components/ArticleBottomLayout";
import ArticleTopLayout from "@/components/ArticleTopLayout";

import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";
import { find } from "@/lib/find";

interface LegalViewerProps {
  params: Promise<{
    slug: string;
  }>;
}

// cannot reusable: https://github.com/vercel/next.js/discussions/50080
export async function generateMetadata({ params }: LegalViewerProps) {
  const { slug } = await params;
  const { title, description } = find({ collection: "legals", slug })?.metadata || {};
  return { title, description };
}

export default async function LegalViewer({ params }: LegalViewerProps) {
  const { slug } = await params;

  return (
    <>
      <TopLayout>
        <ArticleTopLayout collection="legals" slug={slug} />
      </TopLayout>

      <BottomLayout>
        <ArticleBottomLayout collection="legals" slug={slug} />
      </BottomLayout>
    </>
  );
}
