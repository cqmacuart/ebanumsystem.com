import ScrollReveal from "@/components/ui/scroll-reveal";

const problems = [
  {
    number: "01",
    title: "It loads too slow",
    body: "Visitors decide in 3 seconds. A slow site sends them straight to your competitor — and Google buries you in rankings.",
    icon: (
      <svg className="w-5 h-5 text-[#C9922A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "It talks about you, not them",
    body: "Your customers need to see their problem solved — immediately. If your homepage leads with awards and history, you've already lost them.",
    icon: (
      <svg className="w-5 h-5 text-[#C9922A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1M11 4H4a2 2 0 00-2 2v6a2 2 0 002 2h1v4l4-4h6a2 2 0 002-2V6a2 2 0 00-2-2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "No clear reason to call now",
    body: "Without urgency and visible trust signals, visitors browse and forget. A converting site makes calling the obvious next step.",
    icon: (
      <svg className="w-5 h-5 text-[#C9922A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 md:mb-16">
            <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-4">The problem</p>
            <h2
              className="text-3xl md:text-5xl font-light text-[#F5F0E8] leading-tight max-w-xl"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Three reasons your site isn&apos;t
              <br />
              <em className="not-italic font-semibold">generating leads</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <ScrollReveal key={p.number} delay={i * 120}>
              <div className="problem-card group h-full p-8 bg-[#111111] border border-[#2A2A2A] rounded-sm">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-4xl font-light text-[#1A1A1A] group-hover:text-[#C9922A]/20 transition-colors duration-300 select-none"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {p.number}
                  </span>
                  {p.icon}
                </div>
                <h3
                  className="text-xl font-semibold text-[#F5F0E8] mb-3"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {p.title}
                </h3>
                <p className="text-[#9A9590] text-sm leading-relaxed">{p.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
