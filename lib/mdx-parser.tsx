import "highlight.js/styles/github-dark.css";

import type { Root } from "mdast";
import { MDXRemote } from "next-mdx-remote/rsc";

import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkHeadingId from "remark-heading-id";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import type { VFile } from "vfile";

import Counter from "@/components/in-mdx/Counter";
import MyComponent from "@/components/in-mdx/MyComponent";

const separator = "\n---\n";

export function extendsMetadataContent() {
  return (ast: Root, file: VFile) => {
    const metadata = ast.children.find(({ type }) => "mdxjsEsm" === type);
    if (!metadata) return;

    const [
      {
        declaration: {
          declarations: [
            {
              init: { properties },
            },
          ],
        },
      },
      // @ts-expect-error: estree is not defined in mdast-util-mdx-expression
    ] = metadata.data?.estree.body;

    const {
      value: { value: title },
    } = properties.find(({ key: { value } = { value: "" } }) => "title" === value || "company");

    const trimed = (file.value as string)?.trim();
    const content = trimed.substring(trimed.indexOf(separator, 1) + separator.length).trim();
    const withoutCode = content.replace(/```[^]+?```/g, "");

    properties.push({
      type: "Property",
      method: false,
      shorthand: false,
      computed: false,
      kind: "init",
      key: { type: "Literal", value: "content" },
      value: { type: "Literal", value: content },
    });
    properties.push({
      type: "Property",
      method: false,
      shorthand: false,
      computed: false,
      kind: "init",
      key: { type: "Literal", value: "headings" },
      value: {
        type: "ArrayExpression",
        elements:
          withoutCode.match(/^#[^\n]+/gm)?.map((value) => ({ type: "Literal", value })) ?? [],
      },
    });

    const { value: { value: slug = "" } = {} } =
      properties.find(({ key: { value } = { value: "" } }) => "slug" === value) ?? {};
    properties.push({
      type: "Property",
      method: false,
      shorthand: false,
      computed: false,
      kind: "init",
      key: { type: "Literal", value: "slug" },
      value: {
        type: "Literal",
        value: slug || encodeURIComponent(title.replace(/[\s]+/g, "-").toLowerCase()),
      },
    });
  };
}

export function MDXLoader({ source }: { source?: string }) {
  return source ? (
    <MDXRemote
      source={source}
      components={{ Counter, MyComponent }}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            [remarkHeadingId, { defaults: true, uniqueDefaults: false }],
            remarkFrontmatter,
            [remarkMdxFrontmatter, { name: "metadata" }],
            extendsMetadataContent,
          ],
          rehypePlugins: [rehypeHighlight],
        },
      }}
    />
  ) : (
    <p>Waiting for document loading...</p>
  );
}
