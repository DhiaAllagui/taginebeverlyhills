"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import TagineLogo from "./TagineLogo";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "RESERVATIONS", href: "/reservations" },
  { label: "CHEF BEN", href: "/chef-ben" },
  { label: "MENU", href: "/menu" },
  { label: "CATERING", href: "/catering" },
  { label: "GIFT CARDS", href: "/gift-cards" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
      style={{
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
      }}
    >
      {/* Liquid glass border and sheen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="site-container relative z-10 flex flex-col items-center py-4 sm:py-5">
        {/* Top row: centered logo with mobile controls on sides */}
        <div className="w-full flex items-center justify-between md:justify-center relative">
          {/* Spacer for mobile hamburger alignment */}
          <div className="md:hidden w-11" />

          {/* Centered Logo */}
          <Link
            href="/"
            className="flex items-center focus:outline-none"
            aria-label="Tagine Beverly Hills Home"
            onClick={() => setMobileOpen(false)}
          >
            <TagineLogo size="md" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2.5 rounded-full text-zinc-300 hover:text-white bg-white/[0.06] border border-white/10 hover:border-[#94BA26]/50 hover:bg-white/[0.12] focus:outline-none transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop Navigation below logo */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10 mt-4"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative flex flex-col items-center gap-1.5 py-1 text-[11px] lg:text-xs tracking-[0.18em] lg:tracking-[0.22em] uppercase transition-colors duration-200 focus:outline-none whitespace-nowrap ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-white font-medium"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>{link.label}</span>
                {isActive ? (
                  <span className="h-0.5 w-5 rounded-full bg-[#94BA26] shadow-[0_0_8px_rgba(148,186,38,0.8)] transition-all duration-300" />
                ) : (
                  <span className="h-0.5 w-1.5 rounded-full bg-transparent group-hover:bg-white/30 transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop booking CTA */}
        <div className="hidden md:block mt-5">
          <Link
            href="/reservations"
            className="btn-gold py-2.5 px-6 text-[11px] tracking-[0.2em]"
          >
            <Calendar size={13} />
            <span>Reserve a Table</span>
          </Link>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileOpen && (
        <div
          className="md:hidden relative z-10 border-t border-white/10"
          style={{
            backdropFilter: "blur(28px) saturate(160%)",
            WebkitBackdropFilter: "blur(28px) saturate(160%)",
            background: "rgba(20, 21, 20, 0.85)",
          }}
        >
          <div className="site-container px-4 sm:px-6 py-5 max-h-[calc(100vh-100px)] overflow-y-auto">
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
                        ? "text-white font-semibold bg-white/[0.06]"
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
        </div>
      )}
    </header>
  );
}
