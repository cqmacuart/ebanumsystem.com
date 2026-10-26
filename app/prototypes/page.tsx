import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { PrototypeCard } from "@/components/sections/prototype-card";
import { prototypes } from "@/lib/data/prototypes";
import { absoluteUrl, baseOpenGraph } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prototypes — Ebano Labs",
  description:
    "Self-initiated demos — digital menus, landing pages and web apps — built fast with an AI-assisted workflow and human review, ready to adapt to your business.",
  alternates: {
    canonical: absoluteUrl("/prototypes"),
  },
  openGraph: {
    ...baseOpenGraph,
    title: "Prototypes — Ebano Labs",
    description: "Self-initiated demos, ready to adapt to your business.",
    url: absoluteUrl("/prototypes"),
  },
};

export default function PrototypesPage() {
  const single = prototypes.length === 1;

  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 md:pb-32 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-16 md:mb-20 max-w-2xl">
              <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-4">Prototypes</p>
              <h1
                className="text-4xl md:text-6xl font-light text-[#F5F0E8] leading-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Built fast.
                <br />
                <em className="not-italic font-semibold">Ready to adapt.</em>
              </h1>
              <p className="text-[#9A9590] text-lg leading-relaxed">
                Self-initiated demos, built with an AI-assisted workflow and
                reviewed by hand. They&apos;re not client work — they&apos;re
                concepts I can adapt to your business.
              </p>
            </div>
          </ScrollReveal>

          {/* Prototype grid — a lone prototype gets the wide layout */}
          <div className={`grid gap-8 mb-20 ${single ? "" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {prototypes.map((prototype, i) => (
              <ScrollReveal key={prototype.slug} delay={i * 150}>
                <PrototypeCard prototype={prototype} layout={single ? "wide" : "stacked"} />
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal>
            <div className="border border-[#2A2A2A] rounded-sm p-10 md:p-14 text-center bg-[#111111]">
              <h3
                className="text-2xl md:text-3xl font-light text-[#F5F0E8] mb-4"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                See something you could use?{" "}
                <em className="not-italic font-semibold text-[#C9922A]">
                  Let&apos;s adapt it.
                </em>
              </h3>
              <p className="text-[#9A9590] text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Tell me about your business and I&apos;ll tell you what it
                would take to make one of these yours.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[#C9922A] text-[#0A0A0A] text-sm font-semibold rounded-sm tracking-wide hover:bg-[#E0A83A] transition-all duration-200 hover:shadow-[0_0_30px_rgba(201,146,42,0.3)]"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
