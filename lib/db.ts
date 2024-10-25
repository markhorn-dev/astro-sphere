import { readFileSync, readdirSync, statSync } from "fs";
import { dirname, join } from "path";

import { JSONFilePreset } from "lowdb/node";

const currentDirname = dirname(import.meta.url).substring("file://".length);

const storage = join(currentDirname, "../posts");

export type PostType = "posts" | "projects" | "careers" | "legals";

export interface PostItem {
  series?: string;
  slug: string;
  title: string;
  created: number;
  updated: number;

  demo?: string;
  repo?: string;
}

interface DatabaseSchema {
  posts: Array<PostItem>;
  projects: Array<PostItem>;
  careers: Array<PostItem>;
  legals: Array<PostItem>;
}

const filenames = readdirSync(storage, { recursive: true });

const dbfilepath = join(process.env.DB_PATH, ".db.json");

const db = JSONFilePreset<DatabaseSchema>(dbfilepath, {
  posts: [],
  projects: [],
  careers: [],
  legals: [],
})
  // initialize
  .then((db) => {
    // clear all data
    db.data.posts = [];
    db.data.projects = [];
    db.data.careers = [];
    db.data.legals = [];

    for (const filename of filenames) {
      const strname = String(filename);

      const filepath = join(storage, strname);
      const stat = statSync(filepath);

      if (stat.isDirectory() || !strname.endsWith(".mdx")) continue;

      const created = stat.ctime.getTime();
      const updated = stat.mtime.getTime();

      const [series, ...pathname] = strname.split("/");

      const table = db.data[series as keyof DatabaseSchema];

      if (table) entryTo(table, pathname.join("/"), created, updated);
      else entryTo(db.data.posts, strname, created, updated);
    }

    db.write();

    return db;
  });

function entryTo(db: Array<PostItem>, strname: string, created: number, updated: number): void {
  const slug = strname.replace(/\..+$/, "");

  const [series, ...pathname] = strname.split("/");

  if (db.some(({ slug: s }) => s === slug)) return;

  db.push(getItem(series, pathname.join("/"), slug, created, updated));
}

function getItem(series: string, pathname: string, slug: string, created: number, updated: number) {
  return {
    series: pathname.length ? series : undefined,
    slug,
    title: slug.substring(slug.lastIndexOf("/") + 1),
    created,
    updated,
  };
}

export function getMetadata(
  slug: string,
  dbname?: keyof DatabaseSchema
): Promise<PostItem | undefined> {
  return db.then(({ data: { [dbname ?? "posts"]: posts } }) =>
    posts.find(({ slug: s }) => slug === s)
  );
}

export interface PostArticle {
  body?: string;
  curr?: PostItem;
  prev?: PostItem;
  next?: PostItem;
}

export function getPostArticle(slug: string, dbname?: PostType): Promise<PostArticle> {
  return db.then(({ data: { [dbname ?? "posts"]: posts } }) => {
    const curr = posts.findIndex(({ slug: s }) => s === slug);

    const cursor: PostArticle = {
      body: getContent(posts[curr]?.slug, dbname),
      curr: posts[curr],
    };

    if (curr > 0) cursor.prev = posts[curr - 1];
    if (curr < posts.length - 1) cursor.next = posts[curr + 1];

    return cursor;
  });
}

export function getContent(pathname: string, dbname: string = "") {
  return readFileSync(join(storage, dbname, `${pathname}.mdx`), "utf8");
}

export function getSeries(posts: Array<PostItem>) {
  return Array.from(
    posts.reduce((acc, { series }) => (series ? acc.add(series) : acc), new Set<string>())
  );
}

export default db;
