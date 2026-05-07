"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <rect
                x="2"
                y="2"
                width="9"
                height="9"
                rx="1"
                fill="#C9922A"
                opacity="0.9"
              />
              <rect
                x="13"
                y="2"
                width="9"
                height="9"
                rx="1"
                fill="#C9922A"
                opacity="0.4"
              />
              <rect
                x="2"
                y="13"
                width="9"
                height="9"
                rx="1"
                fill="#C9922A"
                opacity="0.4"
              />
              <rect
                x="13"
                y="13"
                width="9"
                height="9"
                rx="1"
                fill="#C9922A"
                opacity="0.15"
              />
            </svg>
          </span>
          <span
            className="text-[#F5F0E8] font-semibold tracking-[0.12em] text-sm uppercase"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            EBANO
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/work">Work</NavLink>
          <NavLink href="/#process">Process</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <Link
            href="/#audit"
            className="px-5 py-2 bg-[#C9922A] text-[#0A0A0A] text-sm font-semibold rounded-sm tracking-wide hover:bg-[#E0A83A] transition-colors duration-200"
          >
            Get Free Audit
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-[#F5F0E8] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-[#F5F0E8] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-[#F5F0E8] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#2A2A2A] px-6 py-6 flex flex-col gap-5">
          <MobileNavLink href="/work" onClick={() => setMenuOpen(false)}>
            Work
          </MobileNavLink>
          <MobileNavLink href="/#process" onClick={() => setMenuOpen(false)}>
            Process
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </MobileNavLink>
          <Link
            href="/#audit"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 bg-[#C9922A] text-[#0A0A0A] text-sm font-semibold rounded-sm tracking-wide text-center hover:bg-[#E0A83A] transition-colors duration-200"
          >
            Get Free Audit
          </Link>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-[#9A9590] hover:text-[#F5F0E8] transition-colors duration-200 tracking-wide"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-base text-[#9A9590] hover:text-[#F5F0E8] transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
