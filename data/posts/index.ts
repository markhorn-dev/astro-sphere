import { Feed } from "feed";

import Post01, { metadata as metadata01 } from "./01-astro-sphere-file-structure/index.mdx";
import Post02, { metadata as metadata02 } from "./02-astro-sphere-getting-started/index.mdx";
import Post03, {
  metadata as metadata03,
} from "./03-astro-sphere-add-new-post-or-projects/index.mdx";
import Post04, { metadata as metadata04 } from "./04-astro-sphere-writing-markdown/index.mdx";
import Post05, { metadata as metadata05 } from "./05-astro-sphere-writing-mdx/index.mdx";
import Post06, { metadata as metadata06 } from "./06-astro-sphere-social-links/index.mdx";
import Post07, { metadata as metadata07 } from "./07-mdx-syntax/index.mdx";

import { author, site } from "@/config";

const posts = [
  { Component: Post01, metadata: metadata01 },
  { Component: Post02, metadata: metadata02 },
  { Component: Post03, metadata: metadata03 },
  { Component: Post04, metadata: metadata04 },
  { Component: Post05, metadata: metadata05 },
  { Component: Post06, metadata: metadata06 },
  { Component: Post07, metadata: metadata07 },
]
  .filter(({ metadata: { draft } }) => !draft)
  .toSorted(
    ({ metadata: { created: a } }, { metadata: { created: b } }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export type PostItem = (typeof posts)[number];

export const tags = Array.from(new Set(posts.flatMap(({ metadata }) => metadata.tags))).toSorted(
  (a, b) => a.localeCompare(b)
);

const feed = new Feed({
  title: site.name,
  description: site.description,
  id: site.baseurl,
  link: site.baseurl,
  language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: site.logo.src,
  favicon: `${site.baseurl}/favicon.ico`,
  copyright: `2024 ${author.name} All rights reserved`,
  updated: new Date(),
  generator: "Next.js",
  feedLinks: {
    json: `${site.baseurl}/json`,
    atom: `${site.baseurl}/atom`,
    rss2: `${site.baseurl}/rss2`,
  },
  author: {
    name: author.name,
    email: author.email,
    link: author.link,
  },
});

for (const { metadata } of posts) {
  feed.addItem({
    title: metadata.title,
    id: metadata.slug,
    link: `${site.baseurl}/blog/${metadata.slug}`,
    description: metadata.description,
    content: metadata.content,
    date: new Date(metadata.created),
    author: [
      {
        name: author.name,
        email: author.email,
        link: author.link,
      },
    ],
  });
}

export { feed };

export default posts;
