import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { PrototypeCard } from "@/components/sections/prototype-card";
import { prototypes } from "@/lib/data/prototypes";

const MAX_CARDS = 3;

const GRID_COLS: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
};

/** Home teaser for /prototypes — kept apart from client work on purpose. */
export default function PrototypesTeaser() {
  const shown = prototypes.slice(0, MAX_CARDS);
  if (shown.length === 0) return null;
  const single = shown.length === 1;

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-xl">
              <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-4">From the Prototypes</p>
              <h2
                className="text-3xl md:text-5xl font-light text-[#F5F0E8] leading-tight mb-4"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Built fast.{" "}
                <em className="not-italic font-semibold text-[#C9922A]">Ready to adapt.</em>
              </h2>
              <p className="text-[#9A9590] text-base leading-relaxed">
                Self-initiated demos — not client work. Concepts I can adapt to
                your business.
              </p>
            </div>
            <Link
              href="/prototypes"
              className="shrink-0 text-xs text-[#9A9590] hover:text-[#C9922A] transition-colors duration-200 tracking-widest uppercase"
            >
              See all prototypes →
            </Link>
          </div>
        </ScrollReveal>

        <div className={`grid gap-8 ${GRID_COLS[shown.length] ?? ""}`}>
          {shown.map((prototype, i) => (
            <ScrollReveal key={prototype.slug} delay={i * 150}>
              <PrototypeCard
                prototype={prototype}
                headingLevel="h3"
                layout={single ? "wide" : "stacked"}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
