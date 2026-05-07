import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { projects } from "@/components/sections/work";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Ebano Labs",
  description:
    "A focused portfolio of conversion-focused websites for home service businesses. See what a site built to generate leads actually looks like.",
  alternates: {
    canonical: "https://ebanumsystem.com/work",
  },
  openGraph: {
    title: "Work — Ebano Labs",
    description: "Conversion-focused websites for home service businesses.",
    url: "https://ebanumsystem.com/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 md:pb-32 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-16 md:mb-20 max-w-2xl">
              <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-4">Portfolio</p>
              <h1
                className="text-4xl md:text-6xl font-light text-[#F5F0E8] leading-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Work that
                <br />
                <em className="not-italic font-semibold">converts</em>
              </h1>
              <p className="text-[#9A9590] text-lg leading-relaxed">
                A focused portfolio of lead-generation websites for service
                businesses. Every project starts with the same question: what
                does this visitor need to see to pick up the phone?
              </p>
            </div>
          </ScrollReveal>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 150}>
                <div className="group h-full flex flex-col bg-[#111111] border border-[#2A2A2A] rounded-sm overflow-hidden hover:border-[#C9922A]/30 transition-all duration-300">
                  {/* Placeholder visual */}
                  <div className="relative h-60 bg-[#0A0A0A] overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          "linear-gradient(#F5F0E8 1px, transparent 1px), linear-gradient(90deg, #F5F0E8 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                    <div className="relative flex gap-3">
                      <div className="w-12 h-20 bg-[#C9922A]/20 rounded-sm" />
                      <div className="w-20 h-14 bg-[#C9922A]/10 rounded-sm self-end" />
                      <div className="w-8 h-24 bg-[#C9922A]/15 rounded-sm" />
                      <div className="w-16 h-10 bg-[#C9922A]/8 rounded-sm self-center" />
                    </div>
                    <div className="absolute bottom-3 right-4 text-xs text-[#9A9590]/40 uppercase tracking-widest">
                      Screenshots coming
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-8">
                    <div className="flex items-center justify-between mb-5">
                      <p className="text-xs text-[#9A9590] uppercase tracking-widest">
                        {project.year}
                      </p>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 border border-[#2A2A2A] text-[#9A9590] rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-2">
                      {project.category}
                    </p>
                    <h2
                      className="text-xl font-semibold text-[#F5F0E8] leading-snug mb-4"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {project.headline}
                    </h2>
                    <p className="text-sm text-[#9A9590] leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-[#1A1A1A]">
                      <span className="text-sm text-[#9A9590] group-hover:text-[#C9922A] transition-colors duration-200">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>
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
                Working on something?{" "}
                <em className="not-italic font-semibold text-[#C9922A]">
                  Let&apos;s talk.
                </em>
              </h3>
              <p className="text-[#9A9590] text-sm leading-relaxed mb-8 max-w-md mx-auto">
                I take on a limited number of projects each month. If
                you&apos;re serious about growing your business, reach out.
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
