import Nav from "@/components/nav";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/hero";
import ProblemSection from "@/components/sections/problem";
import SolutionSection from "@/components/sections/solution";
import ProcessSection from "@/components/sections/process";
import ClientMarquee from "@/components/sections/client-marquee";
import AuditSection from "@/components/sections/audit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ebano Labs — Websites that generate leads. Not excuses.",
  description:
    "I build fast, conversion-focused websites for home service businesses — so your site works as hard as you do.",
  openGraph: {
    title: "Ebano Labs — Websites that generate leads. Not excuses.",
    description:
      "Fast, conversion-focused websites for home service businesses worldwide.",
    url: "https://ebanolabs.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <SectionDivider />
        <ProblemSection />
        <SectionDivider />
        <SolutionSection />
        <SectionDivider />
        <ProcessSection />
        <ClientMarquee />
        <SectionDivider />
        <AuditSection />
      </main>
      <Footer />
    </>
  );
}

function SectionDivider() {
  return (
    <div className="relative h-px overflow-visible">
      <div className="absolute inset-0 bg-[#2A2A2A]" />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-px w-32 opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C9922A, transparent)",
        }}
      />
    </div>
  );
}
