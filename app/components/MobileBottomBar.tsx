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
    handleScroll();

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
          className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-[#D4AF37]/20 px-3.5 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_36px_rgba(0,0,0,0.85)]"
        >
          <div className="max-w-md mx-auto flex items-center gap-2.5">
            {/* Left Button: Call Concierge */}
            <a
              href="tel:+13103607535"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg border border-[#D4AF37]/35 bg-[#181615]/80 text-[#EDE8DF] active:bg-[#221E1D] active:scale-[0.98] transition-all"
              aria-label="Call Concierge at (310) 360-7535"
            >
              <Phone size={14} className="text-[#D4AF37] shrink-0" />
              <span
                className="text-[11px] uppercase tracking-[0.16em] font-medium truncate"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Call Concierge
              </span>
            </a>

            {/* Right Button: Reserve Table */}
            <Link
              href="/reservations"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0A0A0A] font-bold active:scale-[0.98] shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all"
              aria-label="Reserve a table"
            >
              <Calendar size={14} className="text-[#0A0A0A] shrink-0" />
              <span
                className="text-[11px] uppercase tracking-[0.16em] font-bold truncate"
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
