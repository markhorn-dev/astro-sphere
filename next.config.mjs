import createMDX from "@next/mdx";

import remarkHeadingId from "remark-heading-id";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

function extendsMetadataContent() {
  return (ast, file) => {
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
    ] = metadata.data.estree.body;

    const {
      value: { value: title },
    } = properties.find(({ key: { value } }) => "title" === value || "company");

    const trimed = file.value.trim();
    properties.push({
      type: "Property",
      method: false,
      shorthand: false,
      computed: false,
      kind: "init",
      key: { type: "Literal", value: "content" },
      value: { type: "Literal", value: trimed.substring(trimed.indexOf("\n---\n\n", 1)) },
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

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      [remarkHeadingId, { defaults: true, uniqueDefaults: false }],
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: "metadata" }],
      extendsMetadataContent,
    ],
  },
});

export default withMDX(nextConfig);
