"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import TagineLogo from "./TagineLogo";

const navLinks = [
  { label: "HOME",         href: "/" },
  { label: "RESERVATIONS", href: "/reservations" },
  { label: "CHEF BEN",     href: "/chef-ben" },
  { label: "MENU",         href: "/menu" },
  { label: "CATERING",     href: "/catering" },
  { label: "GIFT CARDS",   href: "/gift-cards" },
  { label: "CONTACT",      href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#121312]/95 backdrop-blur-md border-b border-white/[0.08] transition-all">
      <div className="site-container flex items-center justify-between h-20 sm:h-24 lg:h-28 py-4 sm:py-5">
        {/* Authentic Tagine Logo */}
        <Link
          href="/"
          className="shrink-0 flex items-center focus:outline-none"
          aria-label="Tagine Beverly Hills Home"
          onClick={() => setMobileOpen(false)}
        >
          <TagineLogo size="md" />
        </Link>

        {/* Clean, Minimalist Desktop Navigation with Generous Spacing */}
        <nav className="hidden xl:flex items-center gap-10" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative flex flex-col items-center gap-1.5 py-1 text-xs tracking-[0.22em] uppercase transition-colors duration-200 focus:outline-none whitespace-nowrap ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-white font-medium"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>{link.label}</span>
                {/* Active Indicator Pill / Centered Glowing Bar */}
                {isActive ? (
                  <span className="h-0.5 w-5 rounded-full bg-[#94BA26] shadow-[0_0_8px_rgba(148,186,38,0.8)] transition-all duration-300" />
                ) : (
                  <span className="h-0.5 w-1.5 rounded-full bg-transparent group-hover:bg-white/30 transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Quick Booking Action */}
        <div className="hidden xl:flex shrink-0 items-center">
          <Link
            href="/reservations"
            className="btn-gold py-2.5 px-5 text-[11px] tracking-[0.2em]"
          >
            <Calendar size={13} />
            <span>Book Table</span>
          </Link>
        </div>

        {/* Tablet & Mobile Menu Controls */}
        <div className="flex xl:hidden items-center gap-3 sm:gap-4">
          <Link
            href="/reservations"
            className="btn-gold py-2 px-4 text-[10px] tracking-wider flex items-center gap-1.5"
          >
            <Calendar size={12} />
            <span>Book Table</span>
          </Link>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-2.5 rounded-lg text-zinc-300 hover:text-white bg-zinc-900/80 border border-zinc-700/50 hover:border-[#94BA26]/50 focus:outline-none transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#141514]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between py-3 px-4 rounded-lg text-xs tracking-[0.22em] uppercase transition-colors ${
                    isActive
                      ? "text-white font-semibold bg-white/[0.04]"
                      : "text-zinc-400 hover:text-white font-medium"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#94BA26] shadow-[0_0_8px_#94BA26]" />
                  )}
                </Link>
              );
            })}

            <div className="pt-4 w-full">
              <Link
                href="/reservations"
                onClick={() => setMobileOpen(false)}
                className="btn-gold w-full py-3 text-xs tracking-widest justify-center"
              >
                Reserve a Table
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
