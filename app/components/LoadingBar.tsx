"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(true), 0);
    const endTimer = setTimeout(() => setIsLoading(false), 600);
    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none z-20"
        >
          {/* Track */}
          <div className="absolute inset-0 bg-[#D4AF37]/20" />
          {/* Shimmer */}
          <motion.div
            className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#E07A5F] shadow-[0_0_10px_#D4AF37]"
            initial={{ left: "-33%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 0.85,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
