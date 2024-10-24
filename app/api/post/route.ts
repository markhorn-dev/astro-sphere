import type { NextRequest } from "next/server";

import db from "@/lib/db";

export async function GET(req: NextRequest) {
  const { from = 0, size = 10 } = Object.fromEntries(req.nextUrl.searchParams.entries());

  const posts = (await db).data.posts;
  return Response.json(posts.slice(Number(from), Number(size)));
}
