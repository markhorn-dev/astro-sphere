import BottomLayout from "@/components/BottomLayout";
import Projects from "@/components/Projects";
import TopLayout from "@/components/TopLayout";

import { author, site } from "@/config";

export const metadata = {
  title: `${site.name} - ${author.name}'s Project`,
  description: `${author.name}'s Project List.`,
};

export default function ProjectsPage() {
  return (
    <>
      <TopLayout className="page-heading">Projects</TopLayout>

      <BottomLayout>
        <Projects />
      </BottomLayout>
    </>
  );
}
