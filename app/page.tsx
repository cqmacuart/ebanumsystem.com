import Nav from "@/components/nav";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/hero";
import ProblemSection from "@/components/sections/problem";
import SolutionSection from "@/components/sections/solution";
import ProcessSection from "@/components/sections/process";
import WorkSection from "@/components/sections/work";
import AuditSection from "@/components/sections/audit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ebano Labs — Websites that generate leads. Not excuses.",
  description:
    "I build fast, conversion-focused websites for home service businesses — so your site works as hard as you do.",
  openGraph: {
    title: "Ebano Labs — Websites that generate leads. Not excuses.",
    description:
      "Fast, conversion-focused websites for home service businesses in the USA.",
    url: "https://ebanolabs.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <WorkSection />
        <AuditSection />
      </main>
      <Footer />
    </>
  );
}
