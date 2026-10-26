"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
        <Link href="/" className="group" aria-label="Ebano Labs — home">
          <Logo />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/work" active={pathname === "/work"}>Work</NavLink>
          <NavLink href="/prototypes" active={pathname === "/prototypes"}>Prototypes</NavLink>
          <NavLink href="/#process" active={pathname === "/"}>Process</NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>Contact</NavLink>
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
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
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
        <div id="mobile-menu" className="md:hidden bg-[#111111] border-t border-[#2A2A2A] px-6 py-6 flex flex-col gap-5">
          <MobileNavLink href="/work" active={pathname === "/work"} onClick={() => setMenuOpen(false)}>
            Work
          </MobileNavLink>
          <MobileNavLink href="/prototypes" active={pathname === "/prototypes"} onClick={() => setMenuOpen(false)}>
            Prototypes
          </MobileNavLink>
          <MobileNavLink href="/#process" active={pathname === "/"} onClick={() => setMenuOpen(false)}>
            Process
          </MobileNavLink>
          <MobileNavLink href="/contact" active={pathname === "/contact"} onClick={() => setMenuOpen(false)}>
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
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`text-sm transition-colors duration-200 tracking-wide ${
        active ? "text-[#C9922A]" : "text-[#9A9590] hover:text-[#F5F0E8]"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  active,
  children,
  onClick,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-base transition-colors duration-200 ${
        active ? "text-[#C9922A]" : "text-[#9A9590] hover:text-[#F5F0E8]"
      }`}
    >
      {children}
    </Link>
  );
}
