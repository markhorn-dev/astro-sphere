import type { NextRequest } from "next/server";

import { feed } from "@/data/posts";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      type: "rss" | "rss2" | "atom" | "json";
    }>;
  }
) {
  const { type } = await params;
  if (["rss", "rss2"].includes(type)) {
    return new Response(feed.rss2(), {
      headers: new Headers({ "Content-Type": "application/xml" }),
    });
  } else if ("atom" === type) {
    return new Response(feed.atom1(), {
      headers: new Headers({ "Content-Type": "application/xml" }),
    });
  } else if ("json" === type) {
    return new Response(feed.json1(), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Invalid feed type", { status: 400 });
}
