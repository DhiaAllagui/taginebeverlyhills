"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import TagineLogo from "./TagineLogo";
import LoadingBar from "./LoadingBar";

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
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(true);
      setMobileOpen(false);
    }, 0);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      // Keep navbar visible near top of page
      if (currentY <= 60) {
        setVisible(true);
      } else if (currentY > lastY && currentY - lastY > 5) {
        // Scrolling down -> hide with animation
        setVisible(false);
      } else if (currentY < lastY && lastY - currentY > 5) {
        // Scrolling up -> reveal with animation
        setVisible(true);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
        visible || mobileOpen ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-[#0A0A0A]/90 shadow-[0_16px_40px_rgba(0,0,0,0.85)] border-b border-[#D4AF37]/20"
          : "bg-[#0A0A0A]/40 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/[0.06]"
      }`}
      style={{
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
      }}
    >
      {/* Liquid glass border and subtle champagne gold sheen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 flex items-center justify-between h-20">
        {/* Left Side: Desktop Nav Links & Mobile Hamburger */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-[#181615]/80 border border-[#D4AF37]/25 hover:border-[#D4AF37] hover:bg-[#221E1D] focus:outline-none transition-all cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`w-5 h-0.5 bg-zinc-200 rounded-full transition-all duration-300 ease-out origin-center ${
                mobileOpen ? "rotate-45 translate-y-2 bg-[#D4AF37]" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-zinc-200 rounded-full transition-all duration-200 ease-out ${
                mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-zinc-200 rounded-full transition-all duration-300 ease-out origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-2 bg-[#D4AF37]" : ""
              }`}
            />
          </button>

          {/* Desktop Left Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            <Link
              href="/menu"
              className={`text-[11px] lg:text-xs tracking-[0.24em] uppercase transition-colors font-medium ${
                pathname === "/menu" ? "text-[#D4AF37] font-semibold" : "text-zinc-300 hover:text-[#F3E5AB]"
              }`}
            >
              Menu
            </Link>
            <Link
              href="/chef-ben"
              className={`text-[11px] lg:text-xs tracking-[0.24em] uppercase transition-colors font-medium ${
                pathname === "/chef-ben" ? "text-[#D4AF37] font-semibold" : "text-zinc-300 hover:text-[#F3E5AB]"
              }`}
            >
              Our Story
            </Link>
            <Link
              href="/catering"
              className={`text-[11px] lg:text-xs tracking-[0.24em] uppercase transition-colors font-medium ${
                pathname === "/catering" ? "text-[#D4AF37] font-semibold" : "text-zinc-300 hover:text-[#F3E5AB]"
              }`}
            >
              Private Events
            </Link>
          </nav>
        </div>

        {/* Center: Iconic Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none group absolute left-1/2 -translate-x-1/2"
          aria-label="Tagine Beverly Hills Home"
          onClick={() => setMobileOpen(false)}
        >
          <TagineLogo size="sm" variant="white" />
        </Link>

        {/* Right Side: Gift Cards, Contact & Reservations CTA (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link
            href="/gift-cards"
            className={`hidden lg:inline-block text-[11px] tracking-[0.24em] uppercase transition-colors font-medium ${
              pathname === "/gift-cards" ? "text-[#D4AF37] font-semibold" : "text-zinc-300 hover:text-[#F3E5AB]"
            }`}
          >
            Gift Cards
          </Link>
          <Link
            href="/contact"
            className={`hidden md:inline-block text-[11px] tracking-[0.24em] uppercase transition-colors font-medium ${
              pathname === "/contact" ? "text-[#D4AF37] font-semibold" : "text-zinc-300 hover:text-[#F3E5AB]"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/reservations"
            className="hidden md:flex btn-gold py-2.5 px-4 sm:px-5 lg:px-7 text-[10px] sm:text-[11px] tracking-[0.22em] font-semibold whitespace-nowrap shadow-[0_4px_20px_rgba(212,175,55,0.35)] items-center gap-1.5"
          >
            <Calendar size={13} />
            <span>Reservations</span>
          </Link>
        </div>
      </div>

      {/* Mobile & Tablet Drawer with Frosted Espresso Glass */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden relative z-10 border-t border-[#D4AF37]/20 overflow-hidden"
            style={{
              backdropFilter: "blur(30px) saturate(180%)",
              WebkitBackdropFilter: "blur(30px) saturate(180%)",
              background: "rgba(14, 13, 12, 0.95)",
            }}
          >
            <div className="site-container px-4 sm:px-6 py-6 max-h-[calc(100vh-100px)] overflow-y-auto">
              <nav className="flex flex-col gap-2.5">
                {navLinks.map((link, idx) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(link.href);

                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: 0.04 + idx * 0.03,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between py-3 px-4 rounded-lg text-xs tracking-[0.22em] uppercase transition-colors ${
                          isActive
                            ? "text-white font-semibold bg-[#221E1D] border border-[#D4AF37]/30"
                            : "text-zinc-400 hover:text-white font-medium hover:bg-white/[0.04]"
                        }`}
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#E07A5F] shadow-[0_0_10px_#E07A5F]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 + navLinks.length * 0.03 }}
                  className="pt-4 w-full"
                >
                  <Link
                    href="/reservations"
                    onClick={() => setMobileOpen(false)}
                    className="btn-gold w-full py-3.5 text-xs tracking-widest justify-center shadow-xl"
                  >
                    <Calendar size={14} className="mr-1" />
                    Reserve a Table
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luminous progress bar on the exact bottom line */}
      <Suspense fallback={null}>
        <LoadingBar />
      </Suspense>
    </header>
  );
}
