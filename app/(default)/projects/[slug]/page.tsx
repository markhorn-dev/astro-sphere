import { redirect } from "next/navigation";

import ArticleBottomLayout from "@/components/ArticleBottomLayout";
import ArticleTopLayout from "@/components/ArticleTopLayout";

import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";
import { getMetadata, getPost } from "@/lib/db";

interface ProjectViewerProps {
  params: Promise<{
    slug: string;
  }>;
}

// cannot reusable: https://github.com/vercel/next.js/discussions/50080
export async function generateMetadata({ params }: ProjectViewerProps) {
  const { slug } = await params;

  const metadata = await getMetadata(slug);
  if (!metadata) return redirect("/404");

  return { title: metadata.title };
}

export default async function ProjectViewer({ params }: ProjectViewerProps) {
  const { slug } = await params;

  const { curr, prev, next } = await getPost(slug);

  if (!curr) return redirect("/404");

  return (
    <>
      <TopLayout>
        <ArticleTopLayout curr={curr} />
      </TopLayout>

      <BottomLayout>
        <ArticleBottomLayout curr={curr} prev={prev} next={next} />
      </BottomLayout>
    </>
  );
}
