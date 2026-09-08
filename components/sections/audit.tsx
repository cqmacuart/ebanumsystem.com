import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function AuditSection() {
  return (
    <section id="audit" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div
            className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden px-10 py-14 md:px-16 md:py-16 text-center"
            style={{
              background: "linear-gradient(135deg, #A87520 0%, #C9922A 45%, #D9961A 100%)",
            }}
          >
            {/* Subtle inner highlight */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <h2
                className="text-3xl md:text-5xl font-light text-[#0A0A0A] leading-tight mb-5"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Is your website
                <br />
                <em className="not-italic font-semibold">costing you leads?</em>
              </h2>

              <p className="text-[#0A0A0A]/65 text-base leading-relaxed mb-10 max-w-md mx-auto">
                Send me your URL. I&apos;ll tell you exactly what&apos;s wrong —
                free, no pitch, no follow-up sales call.
              </p>

              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A0A0A] text-[#F5F0E8] text-sm font-semibold rounded-xl tracking-wide hover:bg-[#1A1A1A] transition-colors duration-200 shadow-sm"
                >
                  <span>Get Free Audit</span>
                  <svg
                    className="w-4 h-4 text-[#C9922A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              <p className="mt-6 text-xs text-[#0A0A0A]/50">
                Only 2 spots available for audits this month.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

