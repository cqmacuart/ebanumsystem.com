import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <rect x="2" y="2" width="9" height="9" rx="1" fill="#C9922A" opacity="0.9" />
                  <rect x="13" y="2" width="9" height="9" rx="1" fill="#C9922A" opacity="0.4" />
                  <rect x="2" y="13" width="9" height="9" rx="1" fill="#C9922A" opacity="0.4" />
                  <rect x="13" y="13" width="9" height="9" rx="1" fill="#C9922A" opacity="0.15" />
                </svg>
              </span>
              <span
                className="text-[#F5F0E8] font-semibold tracking-[0.12em] text-sm uppercase"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                EBANO
              </span>
            </div>
            <p className="text-[#9A9590] text-sm leading-relaxed italic">
              Websites that generate leads.<br />Not excuses.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs text-[#9A9590] uppercase tracking-widest mb-1">Navigate</p>
            <Link href="/work" className="text-sm text-[#9A9590] hover:text-[#F5F0E8] transition-colors duration-200">Work</Link>
            <Link href="/#process" className="text-sm text-[#9A9590] hover:text-[#F5F0E8] transition-colors duration-200">Process</Link>
            <Link href="/contact" className="text-sm text-[#9A9590] hover:text-[#F5F0E8] transition-colors duration-200">Contact</Link>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <p className="text-xs text-[#9A9590] uppercase tracking-widest mb-1">Contact</p>
            <a
              href="mailto:support@ebanumsystem.com"
              className="text-sm text-[#9A9590] hover:text-[#C9922A] transition-colors duration-200"
            >
              support@ebanumsystem.com
            </a>
            <p className="text-sm text-[#9A9590]">Colombia — Remote worldwide</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1A1A1A] flex flex-col sm:flex-row sm:justify-between gap-3">
          <p className="text-xs text-[#9A9590]">© 2025 Ebano Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
