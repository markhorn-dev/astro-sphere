import type { NextRequest } from "next/server";

import { getContent } from "@/lib/db";

interface APIGetPostProps {
  params: Promise<{ slug: Array<string> }>;
}

export async function GET(req: NextRequest, { params }: APIGetPostProps) {
  const { slug } = await params;

  try {
    const content = getContent(slug.join("/"));
    return new Response(content, { status: 200 });
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT")
      return new Response(null, { status: 404 });
    throw err;
  }
}
