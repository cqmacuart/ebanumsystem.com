import Link from "next/link";

const clients = [
  { name: "Wolf Creek", type: "Digital Marketing Agency" },
  { name: "Resolute Air", type: "HVAC Contractor — Utah" },
  { name: "Peak Roofing", type: "Roofing & Restoration" },
  { name: "FlowPro", type: "Plumbing Services" },
  { name: "Crestline Homes", type: "Home Renovation" },
  { name: "GreenEdge", type: "Landscaping & Design" },
  { name: "Bright Wire", type: "Electrical Contractors" },
  { name: "ProCoat", type: "Painting Specialists" },
  { name: "Cornerstone", type: "Concrete & Masonry" },
  { name: "Summit Windows", type: "Window & Door Co." },
];

const doubled = [...clients, ...clients];

export default function ClientMarquee() {
  return (
    <section className="py-20 bg-[#111111] border-y border-[#2A2A2A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-3">
          Recent Work
        </p>
        <div className="flex items-end justify-between">
          <h2
            className="text-3xl md:text-4xl font-light text-[#F5F0E8]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Businesses we&apos;ve helped{" "}
            <em className="not-italic font-semibold">grow</em>
          </h2>
          <Link
            href="/work"
            className="hidden sm:block text-sm text-[#9A9590] hover:text-[#C9922A] transition-colors duration-200 shrink-0 ml-8"
          >
            See case studies →
          </Link>
        </div>
      </div>

      {/* Marquee track */}
      <Link href="/work" className="block group cursor-pointer">
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />

          {/* Scrolling strip */}
          <div className="flex" style={{ animation: "marquee 32s linear infinite" }}>
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-3 mx-6 shrink-0"
              >
                {/* Dot separator */}
                <span className="w-1 h-1 rounded-full bg-[#C9922A] opacity-40 shrink-0" />

                <div className="flex items-baseline gap-2">
                  <span
                    className="text-lg font-semibold text-[#F5F0E8] group-hover:text-[#C9922A] transition-colors duration-300 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {client.name}
                  </span>
                  <span className="text-xs text-[#9A9590] uppercase tracking-widest whitespace-nowrap">
                    {client.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className="max-w-6xl mx-auto px-6 mt-8">
          <p className="text-xs text-[#9A9590] group-hover:text-[#C9922A] transition-colors duration-200">
            View full case studies →
          </p>
        </div>
      </Link>
    </section>
  );
}
