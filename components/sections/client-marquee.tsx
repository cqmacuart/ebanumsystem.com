import Link from "next/link";

const clients = [
  { name: "Wolf Creek", type: "Digital Marketing" },
//   { name: "Resolute Air", type: "HVAC Contractor" },
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
    <section className="py-20 bg-[#111111] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex items-end justify-between">
          <h2
            className="text-xl md:text-2xl font-light text-[#F5F0E8]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Businesses we&apos;ve helped{" "}
            <em className="not-italic font-semibold text-[#C9922A]">grow</em>
          </h2>
          <Link
            href="/work"
            className="hidden sm:block text-xs text-[#9A9590] hover:text-[#C9922A] transition-colors duration-200 tracking-widest uppercase"
          >
            View portfolio →
          </Link>
        </div>
      </div>

      {/* Marquee track */}
      <Link href="/work" className="block group cursor-pointer">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />

          <div className="flex" style={{ animation: "marquee 48s linear infinite" }}>
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex items-center mx-8 shrink-0"
              >
                <span className="w-1 h-1 rounded-full bg-[#2A2A2A] shrink-0 mr-8" />
                <div className="flex flex-col">
                  <span
                    className="text-2xl font-bold text-[#4A4A4A] group-hover:text-[#C9922A] transition-colors duration-500 whitespace-nowrap leading-tight"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {client.name}
                  </span>
                  <span className="text-xs text-[#3A3A3A] group-hover:text-[#9A9590] transition-colors duration-500 whitespace-nowrap tracking-wide">
                    {client.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </section>
  );
}
