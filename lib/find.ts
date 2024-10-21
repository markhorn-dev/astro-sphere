import legals from "@/data/legals";
import posts from "@/data/posts";
import projects from "@/data/projects";

export interface FindProps {
  collection: "blog" | "projects" | "legals";
  slug: string;
}

function getContents({ collection }: Omit<FindProps, "slug">) {
  return "blog" === collection ? posts : "projects" === collection ? projects : legals;
}

export function find({ collection, slug }: FindProps) {
  return getContents({ collection }).find(({ metadata }) => metadata.slug === slug);
}

export function next({ collection, slug }: FindProps) {
  const contents = getContents({ collection });
  const index = contents.findIndex(({ metadata }) => metadata.slug === slug);
  return 0 > index ? undefined : contents[index - 1];
}

export function prev({ collection, slug }: FindProps) {
  const contents = getContents({ collection });
  const index = contents.findIndex(({ metadata }) => metadata.slug === slug);
  return contents.length - 1 > index ? contents[index + 1] : undefined;
}
