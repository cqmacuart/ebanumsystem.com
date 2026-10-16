// Plain ESM on purpose: the production build host has glibc < 2.30, so Next's
// native SWC can't load there and it falls back to WASM, which fails to
// transpile a next.config.ts. A .mjs config needs no transpiling.

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

/** @type {import("next").NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    // Mitigation for the 2026-10-14 build failure ("node process exited before we
    // could connect to it" while running PostCSS): run PostCSS in worker threads
    // instead of spawning a child-process pool, which is fragile on resource-limited
    // build hosts. Safe on Node 22. Remove if it ever causes issues.
    turbopackPluginRuntimeStrategy: "workerThreads",
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
