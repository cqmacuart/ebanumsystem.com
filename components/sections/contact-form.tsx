"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  { value: "", label: "What do you need?" },
  { value: "new-website", label: "New Website" },
  { value: "redesign", label: "Redesign" },
  { value: "landing-page", label: "Landing Page" },
  { value: "site-audit", label: "Site Audit" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", website: "", service: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Email me directly at support@ebanumsystem.com");
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 border border-[#C9922A]/30 bg-[#C9922A]/5 rounded-sm text-center">
        <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center border border-[#C9922A]/40 rounded-sm">
          <svg className="w-5 h-5 text-[#C9922A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#F5F0E8] mb-2" style={{ fontFamily: "var(--font-fraunces)" }}>
          Message received
        </h3>
        <p className="text-sm text-[#9A9590]">
          I&apos;ll review your message and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-[#9A9590] uppercase tracking-widest mb-2">
            Name <span className="text-[#C9922A]">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            required
            placeholder="Your name"
            className="w-full px-4 py-3 bg-[#111111] border border-[#2A2A2A] text-[#F5F0E8] text-sm placeholder:text-[#9A9590]/40 rounded-sm focus:outline-none focus:border-[#C9922A]/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-[#9A9590] uppercase tracking-widest mb-2">
            Email <span className="text-[#C9922A]">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            required
            placeholder="you@company.com"
            className="w-full px-4 py-3 bg-[#111111] border border-[#2A2A2A] text-[#F5F0E8] text-sm placeholder:text-[#9A9590]/40 rounded-sm focus:outline-none focus:border-[#C9922A]/50 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-[#9A9590] uppercase tracking-widest mb-2">
          Website URL <span className="text-[#9A9590]/50">(optional)</span>
        </label>
        <input
          type="url"
          value={form.website}
          onChange={set("website")}
          placeholder="https://yoursite.com"
          className="w-full px-4 py-3 bg-[#111111] border border-[#2A2A2A] text-[#F5F0E8] text-sm placeholder:text-[#9A9590]/40 rounded-sm focus:outline-none focus:border-[#C9922A]/50 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs text-[#9A9590] uppercase tracking-widest mb-2">
          What do you need? <span className="text-[#C9922A]">*</span>
        </label>
        <select
          value={form.service}
          onChange={set("service")}
          required
          className="w-full px-4 py-3 bg-[#111111] border border-[#2A2A2A] text-[#F5F0E8] text-sm rounded-sm focus:outline-none focus:border-[#C9922A]/50 transition-colors appearance-none"
          style={{ colorScheme: "dark" }}
        >
          {SERVICE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value} disabled={o.value === ""}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-[#9A9590] uppercase tracking-widest mb-2">
          Tell me about your project <span className="text-[#C9922A]">*</span>
        </label>
        <textarea
          value={form.message}
          onChange={set("message")}
          required
          rows={5}
          placeholder="What are you working on? What's not working right now?"
          className="w-full px-4 py-3 bg-[#111111] border border-[#2A2A2A] text-[#F5F0E8] text-sm placeholder:text-[#9A9590]/40 rounded-sm focus:outline-none focus:border-[#C9922A]/50 transition-colors resize-none leading-relaxed"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-[#C9922A] text-[#0A0A0A] text-sm font-semibold rounded-sm tracking-wide hover:bg-[#E0A83A] transition-all duration-200 disabled:opacity-60 hover:shadow-[0_0_30px_rgba(201,146,42,0.3)]"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
