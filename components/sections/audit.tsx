"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function AuditSection() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      if (res.ok) {
        setStatus("success");
        setMessage("Got it. I'll review your site and send you a detailed breakdown within 24 hours.");
        setUrl("");
      } else {
        throw new Error("Request failed");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Email me directly at support@ebanumsystem.com");
    }
  }

  return (
    <section id="audit" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div
            className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden px-10 py-14 md:px-16 md:py-16 text-center"
            style={{
              background: "linear-gradient(135deg, #A87520 0%, #C9922A 45%, #D9961A 100%)",
            }}
          >
            {/* Subtle inner highlight */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <h2
                className="text-3xl md:text-5xl font-light text-[#0A0A0A] leading-tight mb-5"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Is your website
                <br />
                <em className="not-italic font-semibold">costing you leads?</em>
              </h2>

              <p className="text-[#0A0A0A]/65 text-base leading-relaxed mb-10 max-w-md mx-auto">
                Send me your URL. I&apos;ll tell you exactly what&apos;s wrong —
                free, no pitch, no follow-up sales call.
              </p>

              {status === "success" ? (
                <div className="p-6 bg-black/15 rounded-2xl border border-black/10 max-w-md mx-auto">
                  <p className="text-[#0A0A0A] font-medium">{message}</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <label htmlFor="audit-url" className="sr-only">
                    Your website URL
                  </label>
                  <input
                    id="audit-url"
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    required
                    autoComplete="url"
                    className="flex-1 px-5 py-4 bg-black/20 border border-black/15 text-[#0A0A0A] text-sm placeholder:text-[#0A0A0A]/40 rounded-xl focus:outline-none focus:border-black/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-7 py-4 bg-[#0A0A0A] text-[#F5F0E8] text-sm font-semibold rounded-xl tracking-wide hover:bg-[#1A1A1A] transition-colors duration-200 disabled:opacity-60 whitespace-nowrap"
                  >
                    {status === "loading" ? "Sending…" : "Get Free Audit"}
                  </button>
                </form>
              )}

              {status === "error" && (
                <p className="mt-3 text-sm text-[#0A0A0A]/70">{message}</p>
              )}

              <p className="mt-6 text-xs text-[#0A0A0A]/50">
                Only 2 spots available for audits this month.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
