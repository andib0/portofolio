import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

/*
  The site is exported as static HTML. NEXT_PUBLIC_BASE_PATH is set by the
  deploy workflow when the site is served from a sub-path (GitHub Pages).
*/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  outputFileTracingRoot: root,
};

export default nextConfig;
