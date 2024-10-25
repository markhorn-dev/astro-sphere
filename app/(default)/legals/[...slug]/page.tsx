import { redirect } from "next/navigation";

import ArticleBottomLayout from "@/components/ArticleBottomLayout";
import ArticleTopLayout from "@/components/ArticleTopLayout";

import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import { getMetadata, getPostArticle } from "@/lib/db";
import { MDXLoader } from "@/lib/mdx-parser";

interface LegalViewerProps {
  params: Promise<{
    slug: Array<string>;
  }>;
}

// cannot reusable: https://github.com/vercel/next.js/discussions/50080
export async function generateMetadata({ params }: LegalViewerProps) {
  const slug = (await params).slug.join("/");

  const metadata = await getMetadata(slug, "legals");
  if (!metadata) return redirect("/404");

  return { title: metadata.title };
}

export default async function LegalViewer({ params }: LegalViewerProps) {
  const slug = (await params).slug.join("/");

  const { body, curr, prev, next } = await getPostArticle(slug, "legals");

  if (!curr || !body) return redirect("/404");

  return (
    <>
      <TopLayout>
        <ArticleTopLayout curr={curr} type="legals" />
      </TopLayout>

      <BottomLayout>
        <ArticleBottomLayout
          component={<MDXLoader source={body} />}
          prev={prev}
          next={next}
          type="legals"
        />
      </BottomLayout>
    </>
  );
}
