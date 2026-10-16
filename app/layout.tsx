import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE, baseOpenGraph } from "@/lib/site";
import "./globals.css";

// Self-hosted variable fonts (OFL, see app/fonts/LICENSE-*): the build no
// longer depends on reaching Google Fonts, which removes a network failure point.
const fraunces = localFont({
  src: "./fonts/fraunces-latin-wght.woff2",
  variable: "--font-fraunces",
  display: "swap",
  weight: "100 900",
});

const dmSans = localFont({
  src: "./fonts/dm-sans-latin-wght.woff2",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "100 1000",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Ebano Labs — Websites that generate leads. Not excuses.",
  description:
    "Ebano Labs builds fast, conversion-focused websites for home service businesses worldwide. Stop losing leads. Start growing.",
  keywords: [
    "web design",
    "lead generation website",
    "home service website",
    "HVAC website",
    "contractor website",
    "Next.js web development",
  ],
  authors: [{ name: "Ebano Labs" }],
  openGraph: {
    ...baseOpenGraph,
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Fast, conversion-focused websites for home service businesses. Built to bring in calls, not just look good.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebano Labs — Websites that generate leads. Not excuses.",
    description:
      "Fast, conversion-focused websites for home service businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
