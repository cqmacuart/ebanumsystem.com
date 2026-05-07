"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "1",
    title: "We Talk",
    body: "Tell me about your business and what's not working. No pitch — just a direct conversation about where you are and where you want to be.",
  },
  {
    number: "2",
    title: "I Build",
    body: "Fast, clean, mobile-first — designed around your customer, not design trends. I work quickly and keep you in the loop without burying you in approvals.",
  },
  {
    number: "3",
    title: "You Launch",
    body: "A site ready to generate leads from day one. Built to load fast, rank well, and make it painfully obvious why someone should call you.",
  },
];

export default function ProcessSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 md:py-32 bg-[#0A0A0A]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-4">How it works</p>
            <h2
              className="text-3xl md:text-5xl font-light text-[#F5F0E8] leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Simple process.{" "}
              <em className="not-italic font-semibold">Real results.</em>
            </h2>
            {/* Amber underline accent */}
            <div className="mt-5 mx-auto w-16 h-px bg-[#C9922A]" />
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Animated connecting line — desktop only */}
          <div className="hidden md:block absolute top-[28px] left-[16.5%] right-[16.5%] h-px bg-[#2A2A2A] overflow-hidden">
            <div
              ref={lineRef}
              className="absolute inset-0 origin-left"
              style={{
                background: "linear-gradient(90deg, #C9922A, #E0A83A, #C9922A)",
                transform: lineVisible ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
              }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 180}>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  {/* Circle */}
                  <div className="relative mb-8 mx-auto">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-[#C9922A] bg-[#0A0A0A] relative z-10"
                      style={{
                        boxShadow: lineVisible
                          ? "0 0 24px rgba(201,146,42,0.35), 0 0 8px rgba(201,146,42,0.2)"
                          : "none",
                        transition: "box-shadow 0.6s ease " + (0.4 + i * 0.18) + "s",
                      }}
                    >
                      <span
                        className="text-xl font-semibold text-[#C9922A]"
                        style={{ fontFamily: "var(--font-fraunces)" }}
                      >
                        {step.number}
                      </span>
                    </div>
                    {/* Mobile vertical connector */}
                    {i < steps.length - 1 && (
                      <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-full w-px h-10 bg-gradient-to-b from-[#C9922A]/40 to-transparent" />
                    )}
                  </div>

                  <h3
                    className="text-xl font-semibold text-[#F5F0E8] mb-3"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#9A9590] text-sm leading-relaxed">{step.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
