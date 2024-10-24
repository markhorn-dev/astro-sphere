import type { Root } from "mdast";
import { MDXRemote } from "next-mdx-remote/rsc";

import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkHeadingId from "remark-heading-id";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
// import remarkPrism from "remark-prism";

import type { VFile } from "vfile";

const separator = "\n---\n";

export function extendsMetadataContent() {
  return (ast: Root, file: VFile) => {
    const metadata = ast.children.find(({ type }) => "mdxjsEsm" === type) as any;
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
    ] = metadata.data?.estree.body;

    const {
      value: { value: title },
    } = properties.find(({ key: { value } }) => "title" === value || "company");

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
      properties.find(({ key: { value } }) => "slug" === value) ?? {};
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
  ) : (
    <p>Waiting for document loading...</p>
  );
}
