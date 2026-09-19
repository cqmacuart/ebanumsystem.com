import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";

type Project = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  /** Real outcome only. Leave "" until you have a defensible metric — do NOT invent one. */
  result: string;
  tags: string[];
  year: string;
  url: string;
  /** Path under /public, e.g. /work/wolf-creek-digital.webp */
  image: string;
  accentColor: string;
};

export const projects: Project[] = [
  {
    slug: "wolf-creek-digital",
    name: "Wolf Creek Digital",
    category: "Digital Marketing Agency",
    headline: "A bold, conversion-focused web presence for a growth agency.",
    description:
      "Full front-end redesign and rebuild in Next.js, plus a dedicated /why-us funnel and HVAC lead funnels — built to turn traffic into booked consultations.",
    result: "", // TODO: e.g. "+X% consultation bookings"
    tags: ["Next.js", "Redesign", "Funnels"],
    year: "2026",
    url: "https://wolfcreekdigital.com",
    image: "/work/wolf-creek-digital.webp",
    accentColor: "#C9922A",
  },
  {
    slug: "resolute-heating-air",
    name: "Resolute Heating & Air",
    category: "HVAC · Home Services",
    headline: "A fast, mobile-first site for an owner-operator HVAC pro.",
    description:
      "Design and deployment of a clean, trust-driven service site for a Salt Lake County HVAC business — click-to-call CTAs and same-day-service messaging front and center.",
    result: "", // TODO: e.g. "X calls in first month"
    tags: ["Next.js", "Design", "Deployment"],
    year: "2026",
    url: "https://resoluteair.com",
    image: "/work/resolute-heating-air.webp",
    accentColor: "#C9922A",
  },
  {
    slug: "ayala-torres",
    name: "Ayala Torres & Asociados",
    category: "Boutique Law Firm",
    headline: "A refined, trust-first site for a boutique tax & corporate law firm.",
    description:
      "Design and deployment of a polished, credibility-first single-page site for a Bogotá law firm — presenting the senior partners, practice areas, and a clear contact path for consultations.",
    result: "", // TODO: real metric if you have one
    tags: ["Design", "One-page", "Deployment"], // TODO: confirm stack tags
    year: "2026",
    url: "https://ayalatorres.com",
    image: "/work/ayala-torres.webp",
    accentColor: "#C9922A",
  },
];

export default function WorkSection() {
  return (
    <section className="py-24 md:py-32 bg-[#111111] border-y border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 md:mb-16">
            <div>
              <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-4">Portfolio</p>
              <h2
                className="text-3xl md:text-5xl font-light text-[#F5F0E8] leading-tight"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Recent Work
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm text-[#9A9590] hover:text-[#C9922A] transition-colors duration-200 tracking-wide shrink-0"
            >
              View all work →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 150}>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full flex flex-col bg-[#0A0A0A] border border-[#2A2A2A] rounded-sm overflow-hidden hover:border-[#C9922A]/30 transition-all duration-300"
              >
                <div className="relative h-52 bg-[#0F0F0F] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} website`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                </div>

                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-[#9A9590] uppercase tracking-widest">{project.year}</p>
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
                  <h3
                    className="text-xl font-semibold text-[#F5F0E8] leading-snug mb-2"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#C9B896] leading-snug mb-3">
                    {project.headline}
                  </p>
                  <p className="text-sm text-[#9A9590] leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {project.result && (
                    <p className="text-sm text-[#C9922A] font-medium mt-4">{project.result}</p>
                  )}

                  <div className="mt-6 pt-5 border-t border-[#1A1A1A]">
                    <span className="text-sm text-[#9A9590] group-hover:text-[#C9922A] transition-colors duration-200">
                      Visit live site →
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
