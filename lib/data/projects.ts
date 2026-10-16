export type Project = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  /** Real outcome only. Leave "" until you have a defensible metric — do NOT invent one. */
  result: string;
  tags: string[];
  year: string;
  url: string;
  /** Path under /public, e.g. /work/wolf-creek-digital.webp */
  image: string;
};

export const projects: Project[] = [
  {
    slug: "wolf-creek-digital",
    name: "Wolf Creek Digital",
    category: "Digital Marketing Agency",
    headline: "A bold, conversion-focused web presence for a growth agency.",
    description:
      "Full front-end redesign and rebuild in Next.js, plus a dedicated /why-us funnel and HVAC lead funnels — built to turn traffic into booked consultations.",
    result: "", // TODO: e.g. "+X% consultation bookings"
    tags: ["Next.js", "Redesign", "Funnels"],
    year: "2026",
    url: "https://wolfcreekdigital.com",
    image: "/work/wolf-creek-digital.webp",
  },
  {
    slug: "resolute-heating-air",
    name: "Resolute Heating & Air",
    category: "HVAC · Home Services",
    headline: "A fast, mobile-first site for an owner-operator HVAC pro.",
    description:
      "Design and deployment of a clean, trust-driven service site for a Salt Lake County HVAC business — click-to-call CTAs and same-day-service messaging front and center.",
    result: "", // TODO: e.g. "X calls in first month"
    tags: ["Next.js", "Design", "Deployment"],
    year: "2026",
    url: "https://resoluteair.com",
    image: "/work/resolute-heating-air.webp",
  },
  {
    slug: "ayala-torres",
    name: "Ayala Torres & Asociados",
    category: "Boutique Law Firm",
    headline: "A refined, trust-first site for a boutique tax & corporate law firm.",
    description:
      "Design and deployment of a polished, credibility-first single-page site for a Bogotá law firm — presenting the senior partners, practice areas, and a clear contact path for consultations.",
    result: "", // TODO: real metric if you have one
    tags: ["Design", "One-page", "Deployment"], // TODO: confirm stack tags
    year: "2026",
    url: "https://ayalatorres.com",
    image: "/work/ayala-torres.webp",
  },
];

/** Marquee entries derived from the portfolio — add a project once, it shows everywhere. */
export const clients = [
  { name: "Wolf Creek", type: "Digital Marketing" },
  { name: "Resolute Air", type: "HVAC Contractor" },
  { name: "AyalaTorres S.A.S", type: "Law Firm" },
] as const;
