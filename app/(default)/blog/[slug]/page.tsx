import { redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkHeadingId from "remark-heading-id";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
// import remarkPrism from "remark-prism";

import ArticleBottomLayout from "@/components/ArticleBottomLayout";
import ArticleTopLayout from "@/components/ArticleTopLayout";

import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import { getMetadata, getPostArticle } from "@/lib/db";
import { extendsMetadataContent } from "@/lib/mdx-parser";

interface BlogViewerProps {
  params: Promise<{
    slug: string;
  }>;
}

// cannot reusable: https://github.com/vercel/next.js/discussions/50080
export async function generateMetadata({ params }: BlogViewerProps) {
  const { slug } = await params;

  const metadata = await getMetadata(slug);
  if (!metadata) return redirect("/404");

  return { title: metadata.title };
}

export default async function BlogViewer({ params }: BlogViewerProps) {
  const { slug } = await params;

  const { body, curr, prev, next } = await getPostArticle(slug);

  if (!curr || !body) return redirect("/404");

  return (
    <>
      <TopLayout>
        <ArticleTopLayout curr={curr} />
      </TopLayout>

      <BottomLayout>
        <ArticleBottomLayout
          component={
            <MDXRemote
              source={body}
              options={{
                mdxOptions: {
                  remarkPlugins: [
                    remarkGfm,
                    [remarkHeadingId, { defaults: true, uniqueDefaults: false }],
                    remarkFrontmatter,
                    [remarkMdxFrontmatter, { name: "metadata" }],
                    // remarkPrism,
                    extendsMetadataContent,
                  ],
                },
              }}
            />
          }
          prev={prev}
          next={next}
        />
      </BottomLayout>
    </>
  );
}
