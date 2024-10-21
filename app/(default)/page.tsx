import ConnectSocial from "@/components/ConnectSocial";
import Galaxy from "@/components/Galaxy";
import Particles from "@/components/Particles";
import Planet from "@/components/Planet";
import RecentPosts from "@/components/RecentPosts";
import RecentProjects from "@/components/RecentProjects";
import SkillStack from "@/components/SkillStack";
import Stars from "@/components/Stars";

import WelcomeHero from "@/components/WelcomeHero";
import WelcomeTypography from "@/components/WelcomeTypography";
import { site } from "@/config";

export const metadata = {
  title: site.name,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <Particles />

      <Stars />

      <Galaxy />

      <section className="relative h-screen w-full">
        <Planet />

        <WelcomeHero />
      </section>

      <div className="relative bg-white dark:bg-black">
        <div className="mx-auto max-w-screen-sm p-5 space-y-24 pb-16">
          <WelcomeTypography />

          <RecentPosts />

          <SkillStack />

          <RecentProjects />

          <ConnectSocial />
        </div>
      </div>
    </>
  );
}
