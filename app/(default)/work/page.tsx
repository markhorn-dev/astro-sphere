import BottomLayout from "@/components/BottomLayout";
import TopLayout from "@/components/TopLayout";

import { WORK } from "@/lib/config";

import { works } from "@/lib/data/works";

function formatWorkDate(input: Date | string) {
  if (typeof input === "string") return input;

  const month = input.toLocaleDateString("en-US", {
    month: "short",
  });

  const year = new Date(input).getFullYear();
  return `${month} ${year}`;
}

export default function WorkPage() {
  return (
    <>
      <TopLayout>
        <div className="animate page-heading">{WORK.TITLE}</div>
      </TopLayout>
      <BottomLayout>
        <ul>
          {works.map(({ Component, metadata }, i) => (
            <li
              key={`work-${i}`}
              className="animate border-b border-black/10 dark:border-white/25 mt-4 py-8 first-of-type:mt-0 first-of-type:pt-0 last-of-type:border-none"
            >
              <div className="text-sm uppercase mb-4">
                {formatWorkDate(metadata.dateStart)} - {formatWorkDate(metadata.dateEnd)}
              </div>
              <div className="text-black dark:text-white font-semibold">{metadata.company}</div>
              <div className="text-sm font-semibold">{metadata.role}</div>
              <article className="prose dark:prose-invert">{Component && <Component />}</article>
            </li>
          ))}
        </ul>
      </BottomLayout>
    </>
  );
}
