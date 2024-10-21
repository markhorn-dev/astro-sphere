import type { MDXComponents } from "mdx/types";

import type { ViewTransitionLinkProps } from "@/components/ViewTransitionLink";
import ViewTransitionLink from "@/components/ViewTransitionLink";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: (props) => <ViewTransitionLink {...(props as ViewTransitionLinkProps)} />,
  };
}
