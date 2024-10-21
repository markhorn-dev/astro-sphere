import Blog from "@/components/Blog";
import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import { author, site } from "@/config";

export const metadata = {
  title: `${site.name} - ${author.name}'s Blog`,
  description: `${author.name}'s Blog Posts.`,
};

export default function BlogPage() {
  return (
    <>
      <TopLayout className="page-heading">Blog</TopLayout>

      <BottomLayout>
        <Blog />
      </BottomLayout>
    </>
  );
}
