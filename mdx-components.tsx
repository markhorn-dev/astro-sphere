import type { MDXComponents } from "mdx/types";

import { site } from "./config";

import type { ViewTransitionLinkProps } from "@/components/ViewTransitionLink";
import ViewTransitionLink from "@/components/ViewTransitionLink";

const hostname = new URL(site.baseurl).hostname;
const matcher = new RegExp(`^(https?:)?//${hostname}`);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ href, target, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      if (href?.length && matcher.test(href)) target = "_blank";

      return (
        <ViewTransitionLink
          href={href as ViewTransitionLinkProps["href"]}
          target={target}
          {...props}
        />
      );
    },
  };
}
