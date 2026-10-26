import Link from "next/link";
import Logo from "@/components/ui/logo";
import { SITE } from "@/lib/site";

export default function Footer() {
    return (
        <footer className="border-t border-[#2A2A2A] bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <p className="text-[#9A9590] text-sm leading-relaxed italic">
                            Websites that generate leads.<br />Not excuses.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-3">
                        <p className="text-xs text-[#9A9590] uppercase tracking-widest mb-1">Navigate</p>
                        <Link href="/work" className="text-sm text-[#9A9590] hover:text-[#F5F0E8] transition-colors duration-200">Work</Link>
                        <Link href="/prototypes" className="text-sm text-[#9A9590] hover:text-[#F5F0E8] transition-colors duration-200">Prototypes</Link>
                        <Link href="/#process" className="text-sm text-[#9A9590] hover:text-[#F5F0E8] transition-colors duration-200">Process</Link>
                        <Link href="/contact" className="text-sm text-[#9A9590] hover:text-[#F5F0E8] transition-colors duration-200">Contact</Link>
                    </div>

                    {/* Contact info */}
                    <div className="flex flex-col gap-3">
                        <p className="text-xs text-[#9A9590] uppercase tracking-widest mb-1">Contact</p>
                        <a
                            href={`mailto:${SITE.email.support}`}
                            className="text-sm text-[#9A9590] hover:text-[#C9922A] transition-colors duration-200"
                        >
                            {SITE.email.support}
                        </a>
                        <p className="text-sm text-[#9A9590]">{SITE.location}</p>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-[#1A1A1A] flex flex-col sm:flex-row sm:justify-between gap-3">
                    <p className="text-xs text-[#9A9590]">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
