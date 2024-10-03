"use client";

import BottomLayout from "@/components/BottomLayout";
import Projects from "@/components/Projects";
import TopLayout from "@/components/TopLayout";

import { PROJECTS } from "@/lib/config";

import { projects, tags } from "@/lib/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <TopLayout>
        <div className="animate page-heading">{PROJECTS.TITLE}</div>
      </TopLayout>

      <BottomLayout>
        <div className="animate">
          <Projects tags={tags} projects={projects} />
        </div>
      </BottomLayout>
    </>
  );
}
