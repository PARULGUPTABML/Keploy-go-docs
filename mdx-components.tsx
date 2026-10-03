import type { MDXComponents } from "mdx/types";
import { Callout }               from "./components/callout";
import { ResultCard }            from "./components/result-card";
import { CodeBlock }             from "./components/code-block";
import { StepBadge }             from "./components/step-badge";
import { InteractiveTestRunner } from "./components/interactive-test-runner";
import { AuthGate }              from "./components/auth-gate";
import { GuestGate }             from "./components/guest-gate";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    ResultCard,
    StepBadge,
    InteractiveTestRunner,
    AuthGate,
    GuestGate,
    pre: CodeBlock as unknown as React.ComponentType<React.HTMLAttributes<HTMLElement>>,
    ...components,
  };
}