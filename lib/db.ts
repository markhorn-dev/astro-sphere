import { readFileSync, readdirSync, statSync } from "fs";
import { dirname, join } from "path";

import { JSONFilePreset } from "lowdb/node";

const currentDirname = dirname(import.meta.url).substring("file://".length);

const storage = join(currentDirname, "../posts");

const reserveds = ["_careers", "_projects", "_legals"];

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
}

const filenames = readdirSync(storage, { recursive: true });

const dbfilepath = join(process.env.DB_PATH, "db.json");

const db = JSONFilePreset<DatabaseSchema>(dbfilepath, { posts: [] })
  // initialize
  .then((db) => {
    const posts = db.data.posts;
    for (const filename of filenames) {
      const strname = String(filename);

      if (!reserveds.some((resolved) => strname.startsWith(resolved))) {
        const [series, ...pathname] = strname.split("/");

        const filepath = join(storage, strname);
        const stat = statSync(filepath);
        if (stat.isFile() && strname.endsWith(".mdx")) {
          const slug = strname.replace(/\..+$/, "");

          posts.push({
            series: pathname.length ? series : undefined,
            slug,
            title: slug.substring(slug.lastIndexOf("/") + 1),
            created: stat.ctime.getTime(),
            updated: stat.mtime.getTime(),
          });
        }
      }
    }

    db.write();

    return db;
  });

export function getMetadata(slug: string): Promise<PostItem | undefined> {
  return db.then(({ data: { posts } }) => posts.find(({ slug: s }) => slug === s));
}

export function getPostArticle(slug: string) {
  return db.then(({ data: { posts } }) => {
    const curr = posts.findIndex(({ slug: s }) => s === slug);

    const cursor: { body?: Uint8Array; curr?: PostItem; prev?: PostItem; next?: PostItem } = {
      body: getContent(posts[curr]?.slug),
      curr: posts[curr],
    };

    if (curr > 0) cursor.prev = posts[curr - 1];
    if (curr < posts.length - 1) cursor.next = posts[curr + 1];

    return cursor;
  });
}

export function getContent(pathname: string) {
  return readFileSync(join(storage, `${pathname}.mdx`), "utf8");
}

export default db;
