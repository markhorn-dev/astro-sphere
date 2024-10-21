import Project01, { metadata as metadata01 } from "./project-1/index.mdx";
import Project02, { metadata as metadata02 } from "./project-2/index.mdx";
import Project03, { metadata as metadata03 } from "./project-3/index.mdx";
import Project04, { metadata as metadata04 } from "./project-4/index.mdx";

export const projects = [
  { Component: Project01, metadata: metadata01 },
  { Component: Project02, metadata: metadata02 },
  { Component: Project03, metadata: metadata03 },
  { Component: Project04, metadata: metadata04 },
]
  .filter(({ metadata: { draft } }) => !draft)
  .toSorted(
    ({ metadata: { date: a } }, { metadata: { date: b } }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export type ProjectItem = (typeof projects)[number];

export const tags = Array.from(
  projects
    .flatMap(({ metadata }) => metadata.tags)
    .reduce((acc, tag) => acc.add(tag), new Set<string>())
).toSorted((a, b) => a.localeCompare(b));
