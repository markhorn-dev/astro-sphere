declare module "*.mdx" {
  import type { Element, MDXProps } from "mdx/types";

  interface Frontmatter {
    slug: string;
    title: string;
    subtitle: string;
    image: string;
    author: string;
    date: string;
    dateStart: string;
    dateEnd: string;
    role: string;
    company: string;
    collection: string;
    categories: Array<string>;
    featured: boolean;
    draft: boolean;
    content: string;
    summary: string;
    tags: Array<string>;
    demo: string;
    repo: string;
  }

  function MDXContent(props: MDXProps): Element;
  const metadata: Frontmatter;

  export { metadata, MDXContent as default };
}
