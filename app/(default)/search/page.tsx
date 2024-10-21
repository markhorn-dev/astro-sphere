import BottomLayout from "@/components/BottomLayout";
import Search from "@/components/Search";

import TopLayout from "@/components/TopLayout";

import { site } from "@/config";

export const metadata = {
  title: `${site.name} - Find Something.`,
  description: `Search Contents in ${site.name}.`,
};

export default function SearchPage() {
  return (
    <>
      <TopLayout>Search</TopLayout>
      <BottomLayout>
        <Search />
      </BottomLayout>
    </>
  );
}
