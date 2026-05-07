import ScrollReveal from "@/components/ui/scroll-reveal";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "20+", label: "Projects Launched" },
  { value: "48h", label: "First Proposal" },
  { value: "Global", label: "Remote Worldwide" },
];

const bullets = [
  "Conversion-centered design",
  "Core Web Vitals optimization",
  "Mobile-first, built to rank",
];

export default function SolutionSection() {
  return (
    <section className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* Left */}
          <ScrollReveal>
            <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-4">The solution</p>
            <h2
              className="text-3xl md:text-5xl font-light text-[#F5F0E8] leading-tight mb-6"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              I fix all three.
              <br />
              <em className="not-italic font-semibold text-[#C9922A]">Fast.</em>
            </h2>
            <p className="text-[#9A9590] text-base leading-relaxed mb-8">
              No bloated agency process. No 3-month timelines. A focused
              specialist who builds sites that convert — and gets out of your way.
            </p>

            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#C9922A]/40 bg-[#C9922A]/10 shrink-0">
                    <svg className="w-3 h-3 text-[#C9922A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-[#F5F0E8]">{b}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Right: Stats */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-7 bg-gradient-to-b from-[#161616] to-[#0F0F0F] border border-[#2A2A2A] rounded-2xl hover:border-[#C9922A]/20 transition-colors duration-300"
                >
                  <p
                    className="text-4xl md:text-5xl font-semibold text-[#C9922A] mb-2 leading-none"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-[#9A9590] uppercase tracking-widest">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
