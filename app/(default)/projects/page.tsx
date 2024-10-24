import BottomLayout from "@/components/BottomLayout";
import Projects from "@/components/Projects";
import TopLayout from "@/components/TopLayout";

import { author, site } from "@/config";
import db, { getSeries } from "@/lib/db";

export const metadata = {
  title: `${site.name} - ${author.name}'s Project`,
  description: `${author.name}'s Project List.`,
};

export default async function ProjectsPage() {
  const projects = (await db).data.projects;

  const series = getSeries(projects);

  return (
    <>
      <TopLayout className="page-heading">Projects</TopLayout>

      <BottomLayout>
        <Projects projects={projects} series={series} />
      </BottomLayout>
    </>
  );
}
