import type { MDXComponents } from "mdx/types";
import { Callout } from "./components/callout";
import { ResultCard } from "./components/result-card";
import { CodeBlock } from "./components/code-block";
import { StepBadge } from "./components/step-badge";

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    Callout,
    ResultCard,
    StepBadge,
    // Map every fenced code block → custom dark CodeBlock shell with copy button
    pre: CodeBlock as unknown as React.ComponentType<React.HTMLAttributes<HTMLElement>>,
    ...components,
  };
}