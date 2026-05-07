import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "600", "700", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ebano Labs — Websites that generate leads. Not excuses.",
  description:
    "Ebano Labs builds fast, conversion-focused websites for home service businesses in the USA. Stop losing leads. Start growing.",
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
    title: "Ebano Labs — Websites that generate leads. Not excuses.",
    description:
      "Fast, conversion-focused websites for home service businesses. Built to bring in calls, not just look good.",
    type: "website",
    locale: "en_US",
    siteName: "Ebano Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebano Labs — Websites that generate leads. Not excuses.",
    description:
      "Fast, conversion-focused websites for home service businesses.",
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
