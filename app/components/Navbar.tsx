"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
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
    setVisible(true);
    setMobileOpen(false);
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
          ? "bg-[#141514]/80 shadow-[0_12px_40px_rgba(0,0,0,0.55)] border-b border-white/[0.12]"
          : "bg-[#141514]/25 shadow-[0_4px_30px_rgba(0,0,0,0.15)] border-b border-white/[0.08]"
      }`}
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
      }}
    >
      {/* Liquid glass border and sheen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#94BA26]/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 relative z-10 flex flex-col items-center py-4 sm:py-5">
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
            <TagineLogo size="md" variant="white" />
          </Link>

          {/* Animated Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white/[0.06] border border-white/10 hover:border-[#94BA26]/50 hover:bg-white/[0.12] focus:outline-none transition-all cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`w-5 h-0.5 bg-zinc-200 rounded-full transition-all duration-300 ease-out origin-center ${
                mobileOpen ? "rotate-45 translate-y-2 bg-[#94BA26]" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-zinc-200 rounded-full transition-all duration-200 ease-out ${
                mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-zinc-200 rounded-full transition-all duration-300 ease-out origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-2 bg-[#94BA26]" : ""
              }`}
            />
          </button>
        </div>

        {/* Desktop Navigation row: Pages links centered, Reserve a Table in the far right corner */}
        <div className="w-full hidden md:flex items-center justify-center mt-4 relative">
          {/* Pages links centered */}
          <nav
            className="flex items-center gap-6 lg:gap-8 xl:gap-10"
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

          {/* Far Right Corner: Reserve a Table CTA */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Link
              href="/reservations"
              className="btn-gold py-2 px-4 lg:px-5 text-[10px] lg:text-[11px] tracking-[0.18em] lg:tracking-[0.2em] whitespace-nowrap shadow-lg"
            >
              <Calendar size={13} />
              <span>Reserve a Table</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer with Animated Slide-Down & Staggered Reveal */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden relative z-10 border-t border-white/10 overflow-hidden"
            style={{
              backdropFilter: "blur(28px) saturate(160%)",
              WebkitBackdropFilter: "blur(28px) saturate(160%)",
              background: "rgba(20, 21, 20, 0.92)",
            }}
          >
            <div className="site-container px-4 sm:px-6 py-5 max-h-[calc(100vh-100px)] overflow-y-auto">
              <nav className="flex flex-col gap-2">
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
                            ? "text-white font-semibold bg-white/[0.08]"
                            : "text-zinc-400 hover:text-white font-medium hover:bg-white/[0.04]"
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#94BA26] shadow-[0_0_8px_#94BA26]" />
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
                    className="btn-gold w-full py-3 text-xs tracking-widest justify-center shadow-lg"
                  >
                    Reserve a Table
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luminous progress bar on the exact bottom line of the navbar */}
      <Suspense fallback={null}>
        <LoadingBar />
      </Suspense>
    </header>
  );
}
