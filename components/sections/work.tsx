import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data/projects";

/** Presentational card for a portfolio project. Data lives in lib/data/projects.ts. */
export function ProjectCard({
  project,
  headingLevel: Heading = "h2",
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group h-full flex flex-col bg-[#111111] border border-[#2A2A2A] rounded-sm overflow-hidden hover:border-[#C9922A]/30 transition-all duration-300"
    >
      <div className="relative h-60 bg-[#0F0F0F] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} website`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
      </div>

      <div className="flex flex-col flex-1 p-8">
        <div className="flex items-center justify-between mb-5">
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

        <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-2">{project.category}</p>
        <Heading
          className="text-xl font-semibold text-[#F5F0E8] leading-snug mb-2"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          {project.name}
        </Heading>
        <p className="text-sm text-[#C9B896] leading-snug mb-3">{project.headline}</p>
        <p className="text-sm text-[#9A9590] leading-relaxed flex-1">{project.description}</p>

        {project.result && (
          <p className="text-sm text-[#C9922A] font-medium mt-4">{project.result}</p>
        )}

        <div className="mt-6 pt-5 border-t border-[#1A1A1A]">
          <span className="text-sm text-[#9A9590] group-hover:text-[#C9922A] transition-colors duration-200">
            Visit live site <span aria-hidden="true">→</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
