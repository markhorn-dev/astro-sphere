import Work01, { metadata as metadata01 } from "./apple/index.mdx";
import Work02, { metadata as metadata02 } from "./facebook/index.mdx";
import Work03, { metadata as metadata03 } from "./google/index.mdx";
import Work04, { metadata as metadata04 } from "./mcdonalds/index.mdx";

export const works = [
  { Component: Work01, metadata: metadata01 },
  { Component: Work02, metadata: metadata02 },
  { Component: Work03, metadata: metadata03 },
  { Component: Work04, metadata: metadata04 },
]
  .filter(({ metadata: { draft } }) => !draft)
  .toSorted(
    ({ metadata: { started: a } }, { metadata: { started: b } }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export type WorkItem = (typeof works)[number];
