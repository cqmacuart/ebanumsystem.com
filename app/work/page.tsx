import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ProjectCard } from "@/components/sections/work";
import { projects } from "@/lib/data/projects";
import { absoluteUrl, baseOpenGraph } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Ebano Labs",
  description:
    "A focused portfolio of conversion-focused websites for home service businesses. See what a site built to generate leads actually looks like.",
  alternates: {
    canonical: absoluteUrl("/work"),
  },
  openGraph: {
    ...baseOpenGraph,
    title: "Work — Ebano Labs",
    description: "Conversion-focused websites for home service businesses.",
    url: absoluteUrl("/work"),
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
              <ScrollReveal key={project.slug} delay={i * 150}>
                <ProjectCard project={project} />
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
