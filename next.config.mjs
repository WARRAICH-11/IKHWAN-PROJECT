import path from "node:path";
import { fileURLToPath } from "node:url";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const repoBasePath = "/IKHWAN-PROJECT";

export default function nextConfig(phase) {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  /** @type {import('next').NextConfig} */
  return {
    basePath: isDev ? undefined : repoBasePath,
    output: isDev ? undefined : "export",
    allowedDevOrigins: ["192.168.34.118", "localhost", "127.0.0.1"],
    turbopack: {
      root: __dirname
    },
    images: {
      unoptimized: !isDev
    }
  };
}
