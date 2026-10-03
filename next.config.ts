import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-gfm"]],
    rehypePlugins: [["rehype-highlight"]],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  devIndicators: false,
};

export default withMDX(nextConfig);