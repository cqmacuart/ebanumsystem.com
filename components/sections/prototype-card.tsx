import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import Image from "next/image";
import type { Prototype, PrototypeKind } from "@/lib/data/prototypes";
import type { ServiceValue } from "@/lib/contact/services";

const KIND_LABEL: Record<PrototypeKind, string> = {
  menu: "Digital Menu",
  landing: "Landing Page",
  spa: "Single-Page App",
  "web-app": "Web App",
};

/** Contact-form service preselected by "Want this for your business?". */
const KIND_SERVICE: Record<PrototypeKind, ServiceValue> = {
  menu: "digital-menu",
  landing: "landing-page",
  spa: "web-app",
  "web-app": "web-app",
};

const LANGUAGE_BADGE: Record<Prototype["language"], string | null> = {
  en: null,
  es: "Spanish · bilingual coming",
  bilingual: "English · Spanish",
};

/** Runs at build time — a missing screenshot renders a placeholder instead of a broken image. */
const hasPublicAsset = (src: string) => existsSync(path.join(process.cwd(), "public", src));

/**
 * Presentational card for a self-initiated prototype. Data lives in lib/data/prototypes.ts.
 * Related to ProjectCard, but explicitly labelled so it never reads as client work.
 */
export function PrototypeCard({
  prototype,
  headingLevel: Heading = "h2",
  layout = "stacked",
}: {
  prototype: Prototype;
  headingLevel?: "h2" | "h3";
  /** "wide" puts the image left and content right on desktop — for a lone card. */
  layout?: "stacked" | "wide";
}) {
  const wide = layout === "wide";
  const languageBadge = LANGUAGE_BADGE[prototype.language];
  const eyebrow = [KIND_LABEL[prototype.kind], prototype.style].filter(Boolean).join(" · ");
  const mobile = prototype.device === "mobile";
  const hasImage = hasPublicAsset(prototype.image);

  return (
    <article
      className={`group h-full flex flex-col bg-[#111111] border border-dashed border-[#2A2A2A] rounded-sm overflow-hidden hover:border-[#C9922A]/30 transition-all duration-300 ${
        wide ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative bg-[#0F0F0F] overflow-hidden ${mobile ? "aspect-square" : "aspect-[16/10]"} ${
          wide ? `md:aspect-auto md:min-h-[26rem] md:shrink-0 ${mobile ? "md:w-5/12" : "md:w-1/2"}` : ""
        }`}
      >
        {hasImage && mobile && <PhoneFrame src={prototype.image} alt={`${prototype.name} prototype`} />}
        {hasImage && !mobile && (
          <Image
            src={prototype.image}
            alt={`${prototype.name} prototype`}
            fill
            sizes={wide ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        {!hasImage && <ImagePlaceholder name={prototype.name} />}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
        <span className="absolute top-4 left-4 text-[0.65rem] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-[#0A0A0A]/85 text-[#C9922A] border border-[#C9922A]/40 backdrop-blur-sm">
          Prototype
        </span>
      </div>

      <div className={`flex flex-col flex-1 p-8 ${wide ? "md:p-10" : ""}`}>
        <div className="flex items-center justify-between gap-4 mb-5">
          <p className="text-xs text-[#9A9590] uppercase tracking-widest">{prototype.year}</p>
          {languageBadge && (
            <span className="text-xs px-2 py-1 border border-[#2A2A2A] text-[#C9B896] rounded-sm">
              {languageBadge}
            </span>
          )}
        </div>

        <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-2">{eyebrow}</p>
        <Heading
          className="text-xl font-semibold text-[#F5F0E8] leading-snug mb-3"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {prototype.name}
        </Heading>
        <p className="text-sm text-[#9A9590] leading-relaxed mb-5">{prototype.summary}</p>

        {prototype.highlights.length > 0 && (
          <ul className="space-y-2 mb-5">
            {prototype.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-[#C9B896] leading-snug">
                <span aria-hidden="true" className="text-[#C9922A]">—</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {prototype.audience && (
          <p className="text-sm text-[#9A9590] leading-relaxed mb-5">
            <span className="text-[#F5F0E8]">For: </span>
            {prototype.audience}
          </p>
        )}

        {prototype.stack.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-5">
            {prototype.stack.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 border border-[#2A2A2A] text-[#9A9590] rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {prototype.buildLog && prototype.buildLog.length > 0 && (
          <div className="mb-2">
            <p className="text-[0.65rem] text-[#9A9590]/70 uppercase tracking-widest mb-2">Build log</p>
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#9A9590]">
              {prototype.buildLog.map((entry, i) => (
                <li key={entry.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="w-4 h-px bg-[#2A2A2A]" />}
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#C9922A]/60" />
                  {entry.label}
                  <span className="text-[#C9B896]">{entry.time}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="mt-auto pt-5 border-t border-[#1A1A1A] flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          {prototype.demoUrl && (
            <Link
              href={prototype.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#F5F0E8] hover:text-[#C9922A] transition-colors duration-200"
            >
              Open live demo <span aria-hidden="true">→</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          )}
          <Link
            href={`/contact?service=${KIND_SERVICE[prototype.kind]}`}
            className="text-sm text-[#9A9590] hover:text-[#C9922A] transition-colors duration-200"
          >
            Want this for your business? <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/** Shows a portrait screenshot whole, inside a phone outline — no cropping. */
function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center py-8 bg-[radial-gradient(circle_at_50%_45%,rgba(201,146,42,0.12),transparent_65%)]">
      <div className="relative h-full aspect-[1/2] rounded-[1.75rem] border-[5px] border-[#1E1E1E] bg-[#1E1E1E] shadow-[0_24px_60px_rgba(0,0,0,0.55)] ring-1 ring-white/10 overflow-hidden transition-transform duration-500 group-hover:-translate-y-1">
        <Image src={src} alt={alt} fill sizes="320px" className="object-cover object-top rounded-[1.4rem]" />
      </div>
    </div>
  );
}

function ImagePlaceholder({ name }: { name: string }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgba(201,146,42,0.08),transparent_65%)]"
    >
      <div className="w-[22%] min-w-20 aspect-[9/19] rounded-[1.25rem] border border-[#C9922A]/25 bg-[#111111] flex flex-col items-center justify-center gap-2 p-3">
        <span className="w-8 h-1 rounded-full bg-[#2A2A2A]" />
        <span
          className="text-[0.6rem] text-center text-[#9A9590] leading-tight"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
