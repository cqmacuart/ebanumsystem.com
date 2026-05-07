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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large amber circle glow — top right */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #C9922A 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
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
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Pre-headline label */}
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
            className="w-full sm:w-auto px-8 py-4 bg-[#C9922A] text-[#0A0A0A] text-sm font-semibold rounded-sm tracking-wide hover:bg-[#E0A83A] transition-all duration-200 hover:shadow-[0_0_30px_rgba(201,146,42,0.3)]"
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

        {/* Social proof line */}
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
