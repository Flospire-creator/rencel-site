import type { NextConfig } from "next";

// Content Security Policy: restricts where scripts/styles/images can load from.
//
// Trade-off note: 'unsafe-inline' on script-src stays because removing it
// would require nonce-based CSP via middleware, which forces every page into
// dynamic rendering (no static optimisation, no CDN caching, higher Vercel
// cost). For a static marketing site with no user-generated content or
// authenticated sessions, that perf hit outweighs the security gain. Per
// Next.js docs, React and Next do NOT use eval() in production, so
// 'unsafe-eval' is dev-only. We drop it from the production policy below.
const isDev = process.env.NODE_ENV === "development";

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://*.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.vercel-insights.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: cspDirectives },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "0" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  // 308 permanent redirects from old WordPress URLs to the new Next.js routes.
  // These clear out the "Not found (404)" entries Google Search Console is
  // reporting from the pre-rebuild site and preserve any link equity.
  async redirects() {
    return [
      { source: "/services", destination: "/technology", permanent: true },
      { source: "/services/:path*", destination: "/technology", permanent: true },
      { source: "/our-services", destination: "/technology", permanent: true },
      { source: "/our-services/:path*", destination: "/technology", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/:path*", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/:path*", destination: "/contact", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      // Old blog posts redirect to the Insights index, since slugs may not
      // match. Safer than a slug-preserving redirect that risks a chained 404.
      { source: "/blog/:path*", destination: "/insights", permanent: true },
    ];
  },
};

export default nextConfig;
