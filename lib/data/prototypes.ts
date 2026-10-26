/**
 * Self-initiated demos — NOT client work. Keep these out of `projects` and `clients`.
 * Each style/theme of the same kind is its own entry.
 */
export type PrototypeKind = "menu" | "landing" | "spa" | "web-app";

export type PrototypeLanguage = "en" | "es" | "bilingual";

export type BuildLogEntry = {
  label: string;
  /** Real build time only — do NOT estimate or round up. */
  time: string;
};

export type Prototype = {
  slug: string;
  name: string;
  kind: PrototypeKind;
  /** Visual style/theme, e.g. "Warm editorial". Optional — hidden when empty. */
  style?: string;
  summary: string;
  highlights: string[];
  /** Who it's for. Optional — hidden when empty. */
  audience?: string;
  stack: string[];
  /** Live demo URL. Leave "" until it's public — the CTA is hidden when empty. */
  demoUrl: string;
  /** Path under /public, e.g. /prototypes/digital-menu-ordering.webp */
  image: string;
  language: PrototypeLanguage;
  /** Real build times only. Optional — hidden when empty. */
  buildLog?: BuildLogEntry[];
  year: string;
};

export const prototypes: Prototype[] = [
  {
    slug: "digital-menu-ordering",
    name: "Digital Menu & Ordering",
    kind: "menu",
    style: "", // TODO: e.g. "Warm editorial"
    summary:
      "A mobile-first digital menu built to be opened from a QR code or an Instagram link — browse by category, add items to a cart, and send the order.",
    highlights: [
      "Mobile-first, made for QR codes and Instagram bios",
      "Product categories for quick browsing",
      "Shopping cart with order summary",
      "Ordering can be switched off for a menu-only version",
    ],
    audience:
      "Small restaurants, food trucks and local shops — in LatAm and Spanish-speaking owners in the US.",
    stack: ["Vite", "React 19", "TypeScript", "Static SPA"],
    demoUrl: "https://cqmacuart.github.io/carta-digital-prototype/demo/",
    image: "/prototypes/digital-menu-ordering.webp",
    language: "es",
    buildLog: [
      { label: "v1 base", time: "4h" },
      { label: "v2 + cart", time: "3h" },
    ],
    year: "2026",
  },
];
