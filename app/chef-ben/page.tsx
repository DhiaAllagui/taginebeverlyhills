"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import SubpageBackground from "../components/SubpageBackground";

export default function ChefBenPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F9F9F9] pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-32 overflow-hidden">
      {/* Page Background: bg.png */}
      <SubpageBackground />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] ambient-glow-amber pointer-events-none opacity-25" />

      <div className="site-container max-w-5xl relative z-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181615] border border-[#D4AF37]/30 mb-5 shadow-sm">
            <Sparkles size={13} className="text-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Visionary Behind Tagine
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-wide mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Chef <span className="text-[#D4AF37] italic">&apos;Ben&apos;</span> Benameur
          </h1>

          <div className="gold-divider">
            <span className="text-[#D4AF37] text-xs">✦</span>
          </div>
        </motion.div>

        {/* ─── Portrait & Story Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20 items-center mb-20 sm:mb-28">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="luxury-card overflow-hidden group border border-[#D4AF37]/30">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/img_1949-e1536035525616.jpg"
                  alt="Chef Ben Benameur of Tagine Beverly Hills"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span
                    className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Master Chef &apos;Ben&apos; Benameur
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Signature Quote */}
            <div className="luxury-card p-6 sm:p-8 border-l-4 border-l-[#D4AF37] bg-[#141312]">
              <p
                className="text-[#F3E5AB] text-xl sm:text-2xl lg:text-3xl font-normal leading-snug mb-3"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                &ldquo;All I want is a warm place where the food is made with love.&rdquo;
              </p>
              <span
                className="text-[11px] uppercase tracking-widest text-[#A3A3A3] block"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                — Chef Ben Benameur
              </span>
            </div>

            <h2
              className="text-2xl sm:text-3xl text-white font-normal"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Heritage, Intimacy &amp; Beverly Hills
            </h2>

            <p className="text-[#A3A3A3] text-sm leading-relaxed font-light">
              Born in Morocco, Chef Ben learned the art of slow braising at his mother&apos;s side in Casablanca. Together with longtime friend and acclaimed actor <span className="text-white font-medium">Ryan Gosling</span>, he opened Tagine on North Robertson Boulevard in 2004.
            </p>

            {/* Ryan Gosling Quote */}
            <div className="p-4 rounded-xl bg-[#141312] border border-white/[0.08] text-xs text-[#EDE8DF] italic font-light">
              &ldquo;Food that I could eat every day for the rest of my life.&rdquo;
              <span className="block not-italic text-[10px] uppercase tracking-wider text-[#D4AF37] mt-1.5 font-semibold">
                — Ryan Gosling, Co-Owner
              </span>
            </div>

            {/* Patron Reflection */}
            <div className="p-4 rounded-xl bg-[#141312] border border-[#D4AF37]/25 text-xs text-[#EDE8DF] italic font-light">
              &ldquo;The chef personally brought out several courses and explained the aromatics and slow braising techniques. A truly magnificent personal touch!&rdquo;
              <span className="block not-italic text-[10px] uppercase tracking-wider text-[#E07A5F] mt-1.5 font-semibold">
                — Rick S., Verified Diner Review
              </span>
            </div>

            <p className="text-[#A3A3A3] text-sm leading-relaxed font-light">
              Every dish served at Tagine reflects Chef Ben&apos;s reverence for authentic slow clay tagine cooking: hours of gentle simmering over low flames until the meats are succulent and the sauces are infused with cinnamon, saffron, and California wildflower honey.
            </p>

            <div className="pt-3 flex flex-wrap gap-4">
              <Link href="/menu" className="btn-gold text-xs px-8 py-3.5 tracking-widest">
                Explore Menu
              </Link>
              <Link href="/reservations" className="btn-outline text-xs px-8 py-3.5 tracking-widest">
                Reserve a Table
                <ArrowRight size={13} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ─── Visual Dish Row ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-14 border-t border-[#D4AF37]/20"
        >
          <div className="luxury-card overflow-hidden group border border-[#D4AF37]/20">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/tagine1-2048x1365.jpg"
                alt="Tagine signature cuisine"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="luxury-card overflow-hidden group border border-[#D4AF37]/20">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/lamb-chop.jpg"
                alt="Herb crusted lamb chops"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="luxury-card overflow-hidden group border border-[#D4AF37]/20">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/img_0180.jpg"
                alt="Artisanal dining table at Tagine"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
