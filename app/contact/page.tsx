import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ContactForm from "@/components/sections/contact-form";
import type { Metadata } from "next";
import ScheduleForm from "./schedule-form";

export const metadata: Metadata = {
  title: "Contact — Ebano Labs",
  description:
    "Let's build something that works. Get in touch for a new website, redesign, landing page, or free site audit.",
  openGraph: {
    title: "Contact — Ebano Labs",
    description: "Let's build something that works.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-24 md:pb-32 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20">
            {/* Left: brand message */}
            <div className="md:pt-8">
              <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-6">
                Let&apos;s work together
              </p>
              <h1
                className="text-4xl md:text-5xl font-light text-[#F5F0E8] leading-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Let&apos;s build something
                <br />
                <em className="not-italic font-semibold text-[#C9922A]">
                  that works.
                </em>
              </h1>
              <p className="text-[#9A9590] text-base leading-relaxed mb-10">
                I take on a limited number of projects each month. If
                you&apos;re serious about growing your business, let&apos;s
                talk. No bloated proposals, no long intake forms — just a
                direct conversation about what you need.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#C9922A]/30 rounded-sm shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#C9922A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#F5F0E8] mb-1">Fast response</p>
                    <p className="text-sm text-[#9A9590]">I respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#C9922A]/30 rounded-sm shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#C9922A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#F5F0E8] mb-1">Direct email</p>
                    <a
                      href="mailto:support@ebanumsystem.com"
                      className="text-sm text-[#9A9590] hover:text-[#C9922A] transition-colors"
                    >
                      support@ebanumsystem.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#C9922A]/30 rounded-sm shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#C9922A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#F5F0E8] mb-1">Location</p>
                    <p className="text-sm text-[#9A9590]">Colombia — Remote worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form + cal embed */}
            <div>
              <ContactForm />

              {/* Cal.com embed */}
              <div className="mt-10 pt-8 border-t border-[#2A2A2A]">
                <p className="text-sm font-medium text-[#F5F0E8] mb-2">
                  Prefer a call?
                </p>
                <p className="text-sm text-[#9A9590] mb-6">
                  Book a free 30-minute consultation. No commitment.
                </p>
                {/* Cal.com inline embed — replace YOUR_CAL_USERNAME with actual username */}
                <div
                  id="cal-booking"
                  className="rounded-sm overflow-hidden border border-[#2A2A2A] bg-[#111111] min-h-[400px] flex items-center justify-center"
                >
                  <ScheduleForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
