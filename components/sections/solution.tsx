import ScrollReveal from "@/components/ui/scroll-reveal";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "20+", label: "Projects Launched" },
  { value: "48h", label: "Fast Turnaround" },
  { value: "USA", label: "Focused Clients" },
];

export default function SolutionSection() {
  return (
    <section className="py-24 md:py-32 bg-[#111111] border-y border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* Left: Copy */}
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
            <p className="text-[#9A9590] text-base leading-relaxed mb-6">
              No bloated agency process. No 3-month timelines. A focused
              specialist who builds sites that convert — and gets out of your way.
            </p>
            <p className="text-[#9A9590] text-base leading-relaxed">
              Every project is built mobile-first, optimized for Core Web
              Vitals, and structured to turn visitors into leads from the first
              day it goes live.
            </p>
          </ScrollReveal>

          {/* Right: Stats */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-6 bg-[#0A0A0A] border border-[#2A2A2A] rounded-sm"
                >
                  <p
                    className="text-3xl md:text-4xl font-semibold text-[#F5F0E8] mb-2"
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
