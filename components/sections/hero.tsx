"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Amber headline glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, #C9922A, transparent)",
            filter: "blur(40px)",
          }}
        />
        {/* Top-right corner glow */}
        <div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #C9922A 0%, transparent 70%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#F5F0E8 1px, transparent 1px), linear-gradient(90deg, #F5F0E8 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#C9922A]/30 rounded-sm bg-[#C9922A]/5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9922A]" />
          <span className="text-xs text-[#C9922A] uppercase tracking-widest font-medium">
            Home Service Businesses — USA
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] text-[#F5F0E8] mb-6"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Your website is
          <br />
          <em className="not-italic text-[#C9922A] font-semibold">
            losing you customers.
          </em>
        </h1>

        {/* Sub-headline */}
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-[#9A9590] leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          I build fast, conversion-focused websites for home service businesses
          — so your site works as hard as you do.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#audit"
            className="w-full sm:w-auto px-8 py-4 bg-[#C9922A] text-[#0A0A0A] text-sm font-semibold rounded-sm tracking-wide hover:bg-[#E0A83A] transition-all duration-200"
            style={{ animation: "pulse-amber 2.8s ease-in-out 1.2s 3" }}
          >
            Get Free Site Audit
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto px-8 py-4 border border-[#2A2A2A] text-[#F5F0E8] text-sm font-medium rounded-sm tracking-wide hover:border-[#9A9590] transition-colors duration-200"
          >
            See My Work
          </Link>
        </div>

        <p className="mt-12 text-xs text-[#9A9590] tracking-wide">
          8+ years building for contractors, HVAC, plumbing, and roofing
          companies
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#C9922A]" />
      </div>
    </section>
  );
}
