"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling past hero section (approx 320px)
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Quick booking and concierge bar"
          className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#141514]/92 backdrop-blur-xl border-t border-white/[0.08] px-3.5 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_36px_rgba(0,0,0,0.65)]"
        >
          <div className="max-w-md mx-auto flex items-center gap-2.5">
            {/* Left Button: Call Concierge */}
            <a
              href="tel:+13103607535"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full border border-[#94BA26]/35 bg-white/[0.03] text-[#EFECE6] active:bg-[#94BA26]/10 active:scale-[0.98] transition-all"
              aria-label="Call Concierge at (310) 360-7535"
            >
              <Phone size={14} className="text-[#94BA26] shrink-0" />
              <span
                className="text-[11px] uppercase tracking-[0.14em] font-medium truncate"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Call Concierge
              </span>
            </a>

            {/* Right Button: Reserve Table */}
            <Link
              href="/reservations"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#94BA26] text-[#0E100E] font-semibold active:bg-[#a6ce2b] active:scale-[0.98] shadow-[0_0_20px_rgba(148,186,38,0.3)] transition-all"
              aria-label="Reserve a table"
            >
              <Calendar size={14} className="text-[#0E100E] shrink-0" />
              <span
                className="text-[11px] uppercase tracking-[0.14em] font-bold truncate"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                ✦ Reserve Table
              </span>
            </Link>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
