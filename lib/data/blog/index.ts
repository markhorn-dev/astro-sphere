import Post01, { metadata as metadata01 } from "./01-astro-sphere-file-structure/index.mdx";
import Post02, { metadata as metadata02 } from "./02-astro-sphere-getting-started/index.mdx";
import Post03, {
  metadata as metadata03,
} from "./03-astro-sphere-add-new-post-or-projects/index.mdx";
import Post04, { metadata as metadata04 } from "./04-astro-sphere-writing-markdown/index.mdx";
import Post05, { metadata as metadata05 } from "./05-astro-sphere-writing-mdx/index.mdx";
import Post06, { metadata as metadata06 } from "./06-astro-sphere-social-links/index.mdx";

export const posts = [
  { Component: Post01, metadata: metadata01 },
  { Component: Post02, metadata: metadata02 },
  { Component: Post03, metadata: metadata03 },
  { Component: Post04, metadata: metadata04 },
  { Component: Post05, metadata: metadata05 },
  { Component: Post06, metadata: metadata06 },
]
  .filter(({ metadata: { draft } }) => !draft)
  .toSorted(
    ({ metadata: { date: a } }, { metadata: { date: b } }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export type PostItem = (typeof posts)[number];

export const tags = Array.from(
  posts
    .flatMap(({ metadata }) => metadata.tags)
    .reduce((acc, tag) => acc.add(tag), new Set<string>())
).toSorted((a, b) => a.localeCompare(b));
