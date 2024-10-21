import CareerLayout from "@/components/CareerLayout";
import TopLayout from "@/components/TopLayout";

import { author, site } from "@/config";

export const metadata = {
  title: `${site.name} - ${author.name}'s Career`,
  description: `${author.name}'s Career History.`,
};

export default function CareerPage() {
  return (
    <>
      <TopLayout>Career</TopLayout>
      <CareerLayout />
    </>
  );
}
