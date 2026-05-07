import ScrollReveal from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "1",
    title: "We Talk",
    body: "Tell me about your business and what's not working. No pitch, no sales process — just a direct conversation about where you are and where you want to be.",
  },
  {
    number: "2",
    title: "I Build",
    body: "Fast, clean, mobile-first — designed around your customer, not around design trends. I work fast and keep you in the loop without burying you in approvals.",
  },
  {
    number: "3",
    title: "You Launch",
    body: "A site ready to generate leads from day one. Built to load fast, rank well, and make it painfully obvious why someone should call you — not your competitor.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 md:mb-16">
            <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-4">How it works</p>
            <h2
              className="text-3xl md:text-5xl font-light text-[#F5F0E8] leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Simple process.
              <br />
              <em className="not-italic font-semibold">Real results.</em>
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-0 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-[#2A2A2A]" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 150}>
              <div className="relative flex flex-col md:items-start p-8 md:pr-12">
                {/* Number */}
                <div className="relative z-10 w-16 h-16 flex items-center justify-center border border-[#C9922A]/40 bg-[#0A0A0A] rounded-sm mb-8">
                  <span
                    className="text-2xl font-semibold text-[#C9922A]"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-xl font-semibold text-[#F5F0E8] mb-3"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#9A9590] text-sm leading-relaxed">
                  {step.body}
                </p>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-[#2A2A2A] ml-8 mt-6" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
