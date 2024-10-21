declare module "*.mdx" {
  import type { Element, MDXProps } from "mdx/types";

  interface Frontmatter {
    collection: "projects" | "blog";

    categories: Array<string>;
    tags: Array<string>;
    slug: string;
    title: string;
    subtitle: string;
    content: string;
    summary: string;

    image: string;
    author: string;
    date: string;

    dateStart: string;
    dateEnd: string;
    role: string;
    company: string;
    demo: string;
    repo: string;

    featured: boolean;
    draft: boolean;
  }

  function MDXContent(props: MDXProps): Element;
  const metadata: Frontmatter;

  export { metadata, MDXContent as default };
}
