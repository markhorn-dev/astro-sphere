declare module "*.mdx" {
  import type { Element, MDXProps } from "mdx/types";

  interface Frontmatter {
    collection: "projects" | "posts" | "legals";

    tags: Array<string>;
    slug: string;
    title: string;
    content: string;
    description: string;

    image: string;
    author: string;

    started: string;
    ended: string;
    role: string;
    company: string;
    demo: string;
    repo: string;

    created: string;
    featured: boolean;
    draft: boolean;
  }

  function MDXContent(props: MDXProps): Element;
  const metadata: Frontmatter;

  export { metadata, MDXContent as default };
}
