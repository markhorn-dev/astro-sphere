import Career01, { metadata as metadata01 } from "./apple/index.mdx";
import Career02, { metadata as metadata02 } from "./facebook/index.mdx";
import Career03, { metadata as metadata03 } from "./google/index.mdx";
import Career04, { metadata as metadata04 } from "./mcdonalds/index.mdx";

export const careers = [
  { Component: Career01, metadata: metadata01 },
  { Component: Career02, metadata: metadata02 },
  { Component: Career03, metadata: metadata03 },
  { Component: Career04, metadata: metadata04 },
]
  .filter(({ metadata: { draft } }) => !draft)
  .toSorted(
    ({ metadata: { started: a } }, { metadata: { started: b } }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export type CareerItem = (typeof careers)[number];
