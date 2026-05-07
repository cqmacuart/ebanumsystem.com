import ScrollReveal from "@/components/ui/scroll-reveal";

const problems = [
  {
    number: "01",
    title: "It loads too slow",
    body: "Every extra second of load time costs you 7% in conversions. Visitors leave before you even get a chance — and Google buries you for it.",
    icon: (
      <svg className="w-7 h-7 text-[#C9922A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "It talks about you, not them",
    body: "Your customers need to see their problem solved — immediately. If your homepage leads with history and awards, you've already lost them.",
    icon: (
      <svg className="w-7 h-7 text-[#C9922A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "No clear reason to call now",
    body: "Without urgency and trust signals, visitors browse and forget. A converting site makes calling you the obvious — and only — next step.",
    icon: (
      <svg className="w-7 h-7 text-[#C9922A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
            <div>
              <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-4">The diagnosis</p>
              <h2
                className="text-3xl md:text-5xl font-light text-[#F5F0E8] leading-tight"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                3 reasons your site isn&apos;t
                <br />
                <em className="not-italic font-semibold">generating leads</em>
              </h2>
            </div>
            <p className="text-[#9A9590] text-sm leading-relaxed max-w-xs md:text-right">
              Most businesses fail at the first impression. An unoptimized site hands customers to your competition.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <ScrollReveal key={p.number} delay={i * 120}>
              <div className="problem-card group h-full p-8 bg-gradient-to-b from-[#161616] to-[#111111] border border-[#2A2A2A] rounded-2xl">
                {/* Icon container */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#C9922A]/10 border border-[#C9922A]/20 mb-7 group-hover:bg-[#C9922A]/15 transition-colors duration-300">
                  {p.icon}
                </div>

                <p
                  className="text-xs text-[#C9922A]/50 font-mono mb-3 tracking-widest"
                >
                  {p.number}
                </p>
                <h3
                  className="text-xl font-semibold text-[#F5F0E8] mb-3 leading-snug"
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
