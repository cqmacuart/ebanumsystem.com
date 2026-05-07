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
        setMessage("Got it! I'll review your site and be in touch within 24 hours.");
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
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs text-[#C9922A] uppercase tracking-widest mb-4">Free offer</p>
            <h2
              className="text-3xl md:text-5xl font-light text-[#F5F0E8] leading-tight mb-5"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Is your website
              <br />
              <em className="not-italic font-semibold">costing you leads?</em>
            </h2>
            <p className="text-[#9A9590] text-base leading-relaxed mb-10">
              Send me your URL. I&apos;ll tell you exactly what&apos;s wrong —
              free, no pitch, no follow-up sales call.
            </p>

            {status === "success" ? (
              <div className="p-6 border border-[#C9922A]/30 bg-[#C9922A]/5 rounded-sm">
                <p className="text-[#C9922A] font-medium">{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://yourwebsite.com"
                  required
                  className="flex-1 px-5 py-4 bg-[#111111] border border-[#2A2A2A] text-[#F5F0E8] text-sm placeholder:text-[#9A9590]/50 rounded-sm focus:outline-none focus:border-[#C9922A]/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-7 py-4 bg-[#C9922A] text-[#0A0A0A] text-sm font-semibold rounded-sm tracking-wide hover:bg-[#E0A83A] transition-all duration-200 disabled:opacity-60 whitespace-nowrap hover:shadow-[0_0_30px_rgba(201,146,42,0.3)]"
                >
                  {status === "loading" ? "Sending…" : "Get My Free Audit"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-red-400">{message}</p>
            )}

            <p className="mt-6 text-xs text-[#9A9590]">
              No spam. No pitch. Just an honest look at what&apos;s holding your site back.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
