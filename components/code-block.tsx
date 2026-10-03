"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/** Recursively extract plain text from a React node tree (used for clipboard copy) */
function extractPlainText(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractPlainText).join("");
  }
  if (node && typeof node === "object" && "props" in node) {
    return extractPlainText(
      (node as React.ReactElement<{ children?: React.ReactNode }>).props.children
    );
  }
  return "";
}

export function CodeBlock({ children, className, ...rest }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // When used as `pre` override in MDX, children is a <code> JSX element
  const child = Array.isArray(children) ? children[0] : children;

  // Extract the raw className for language label
  const rawClassName: string =
    child && typeof child === "object" && "props" in child
      ? (child as React.ReactElement<{ className?: string }>).props?.className ?? ""
      : (className ?? "");

  // Derive language label — strip "language-" prefix & any hljs tokens
  const language =
    rawClassName
      .split(" ")
      .map((c) => c.replace("language-", "").trim())
      .filter((c) => c && c !== "hljs" && !c.startsWith("hljs-"))
      .join(" ") || "code";

  // Plain text for clipboard (works even after rehype-highlight wraps code in <span>s)
  const plainText = extractPlainText(children);

  async function copyCode() {
    if (!plainText) return;
    await navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="code-wrapper">
      <div className="code-header">
        <span className="code-language" suppressHydrationWarning>
          {language}
        </span>

        <button
          type="button"
          className="copy-button"
          onClick={copyCode}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check size={14} />
              Copied
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>

      {/*
        Render children directly — this preserves the <code> element with all
        syntax-highlighted <span>s that rehype-highlight injected server-side.
        suppressHydrationWarning silences the className mismatch between
        server (hljs-processed) and client (raw).
      */}
      <pre suppressHydrationWarning {...rest}>
        {children}
      </pre>
    </div>
  );
}