import ConnectSocial from "@/components/welcome/ConnectSocial";
import Galaxy from "@/components/welcome/Galaxy";
import Particles from "@/components/welcome/Particles";
import Planet from "@/components/welcome/Planet";
import RecentPosts from "@/components/welcome/RecentPosts";
import RecentProjects from "@/components/welcome/RecentProjects";
import SkillStack from "@/components/welcome/SkillStack";
import Stars from "@/components/welcome/Stars";

import WelcomeHero from "@/components/welcome/WelcomeHero";
import WelcomeTypography from "@/components/welcome/WelcomeTypography";
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
