import type { Metadata } from "next";

/** Single source of truth for site-wide constants. */
export const SITE = {
  name: "Ebano Labs",
  url: "https://ebanumsystem.com",
  tagline: "Websites that generate leads. Not excuses.",
  location: "Colombia — Remote worldwide",
  email: {
    support: "support@ebanumsystem.com",
    noreply: "Ebano Labs <noreply@ebanumsystem.com>",
  },
  calLink: "ebano-labs/30min",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, SITE.url).toString();

/**
 * Next.js shallow-merges metadata: a page's `openGraph` REPLACES the layout's.
 * Spread this into every page-level `openGraph` so image/siteName are never lost.
 */
export const baseOpenGraph: NonNullable<Metadata["openGraph"]> & { type: "website" } = {
  type: "website" as const,
  locale: "en_US",
  siteName: SITE.name,
  images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE.name }],
};
