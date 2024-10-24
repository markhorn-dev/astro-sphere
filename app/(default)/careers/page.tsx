import CareerLayout from "@/components/CareerLayout";
import TopLayout from "@/components/TopLayout";

import { author, site } from "@/config";
import db, { getPostArticle } from "@/lib/db";

export const metadata = {
  title: `${site.name} - ${author.name}'s Career`,
  description: `${author.name}'s Career History.`,
};

export default async function CareerPage() {
  const careers = await Promise.all(
    (await db).data.careers.map((career) => getPostArticle(career.slug, "careers"))
  );

  return (
    <>
      <TopLayout>Career</TopLayout>
      <CareerLayout careers={careers} />
    </>
  );
}
