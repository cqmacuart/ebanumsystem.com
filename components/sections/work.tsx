import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";

export const projects = [
  {
    id: "digital-marketing-agency",
    category: "Digital Marketing Agency",
    headline: "A bold, conversion-focused web presence for a growth agency.",
    description:
      "Complete redesign and rebuild in Next.js. Focused on positioning, trust signals, and turning website traffic into booked consultations.",
    tags: ["Next.js", "Redesign", "Lead Pages"],
    year: "2026",
    accentColor: "#C9922A",
  },
//   {
//     id: "hvac-contractor",
//     category: "HVAC Contractor",
//     headline: "Migration from WordPress to a fast, lead-generating service site.",
//     description:
//       "Rebuilt from the ground up — 3× faster load time, mobile-first, with clear calls-to-action on every page. Calls increased within the first month.",
//     tags: ["Next.js", "WordPress Migration", "Conversion Focus"],
//     year: "2024",
//     accentColor: "#C9922A",
//   },
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
            <ScrollReveal key={project.id} delay={i * 150}>
              <div className="group h-full flex flex-col bg-[#0A0A0A] border border-[#2A2A2A] rounded-sm overflow-hidden hover:border-[#C9922A]/30 transition-all duration-300">
                {/* Placeholder visual */}
                <div className="relative h-52 bg-[#0F0F0F] overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: "linear-gradient(#F5F0E8 1px, transparent 1px), linear-gradient(90deg, #F5F0E8 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Abstract decorative blocks */}
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
                    className="text-lg font-semibold text-[#F5F0E8] leading-snug mb-3"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {project.headline}
                  </h3>
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
      </div>
    </section>
  );
}
