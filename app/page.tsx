"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TagineLogo from "./components/TagineLogo";
import ClientReviews from "./components/ClientReviews";
import {
  Calendar,
  ArrowRight,
  Sparkles,
  Utensils,
  Clock,
  MapPin,
  ShieldCheck,
  FileText,
  Wine,
  Star,
  ChevronRight,
} from "lucide-react";

interface MenuItem {
  title: string;
  tag: string;
  tagType?: "amber" | "gold";
  price: string;
  desc: string;
  image: string;
}

const MENU_TABS: { id: string; label: string; items: MenuItem[] }[] = [
  {
    id: "starters",
    label: "Starters & Bastilla",
    items: [
      {
        title: "Traditional Bastilla",
        tag: "Chef's Icon",
        tagType: "amber",
        price: "$24",
        desc: "Delicate paper-thin warqa pastry layered with slow-simmered saffron chicken, roasted almonds, orange blossom water, and 24K gold leaf.",
        image: "/images/bastilla-gold-leaf.png",
      },
      {
        title: "Jumbo Scallop Bastilla",
        tag: "Seafood Specialty",
        tagType: "gold",
        price: "$28",
        desc: "Pan-seared jumbo Atlantic sea scallops enveloped in delicate pastry crisps, resting over a luxurious saffron cream reduction.",
        image: "/images/scallop-bastilla-luxury.png",
      },
      {
        title: "House Mezze Trio",
        tag: "Artisanal",
        tagType: "gold",
        price: "$22",
        desc: "Smoky zaalouk roasted eggplant, sweet taktouka charred peppers, whipped cumin hummus, and warm stone-baked flatbread.",
        image: "/images/hummus-2-400x266.jpg",
      },
    ],
  },
  {
    id: "tagines",
    label: "Signature Braises",
    items: [
      {
        title: "Honey Lamb Shank Tagine",
        tag: "12-Hour Braise",
        tagType: "amber",
        price: "$46",
        desc: "Slow-braised lamb shank simmered for 12 hours with California wildflower honey, caramelized black prunes, toasted almonds, and sesame.",
        image: "/images/honey-lamb-shank-luxury.png",
      },
      {
        title: "Chicken Chermoula Tagine",
        tag: "Heritage Recipe",
        tagType: "gold",
        price: "$38",
        desc: "Organic free-range chicken, cured purple olives, house-preserved Meyer lemons, cilantro, and garlic marinade slow-simmered in clay.",
        image: "/images/tagine1-2048x1365.jpg",
      },
      {
        title: "Wild Atlantic Sea Bass",
        tag: "Wild Catch",
        tagType: "gold",
        price: "$44",
        desc: "Pan-roasted Chilean sea bass fillet, sweet bell peppers, heirloom tomatoes, in a fragrant spiced saffron and ginger reduction.",
        image: "/images/qtq80-0ag7qe-2048x1367.jpeg",
      },
    ],
  },
  {
    id: "grills",
    label: "Prime Flame Grills",
    items: [
      {
        title: "Herb Grilled Lamb Chops",
        tag: "Prime Cut",
        tagType: "amber",
        price: "$48",
        desc: "Prime Colorado chops seared over open flame with fresh Moroccan rosemary jus, garlic confit, and charred baby asparagus.",
        image: "/images/lamb-chop.jpg",
      },
      {
        title: "Couscous Royal",
        tag: "Grand Feast",
        tagType: "gold",
        price: "$54",
        desc: "A feast of flame-seared lamb chops, artisanal spicy merguez, braised chicken, and hand-rolled steamed semolina with fragrant broth.",
        image: "/images/dsc_2111-2048x1362.jpg",
      },
      {
        title: "Berber Seven Vegetable",
        tag: "Vegan / Organic",
        tagType: "gold",
        price: "$32",
        desc: "Seven seasonal California market vegetables, roasted butternut squash, and golden chickpeas infused with aromatic Berber spices.",
        image: "/images/tomato-and-cucumber-tartar-400x266.jpg",
      },
    ],
  },
];

const CRAFT_GALLERY = [
  {
    title: "24K Gold Crisp Bastilla",
    subtitle: "Artisanal Warqa Pastry",
    image: "/images/bastilla-gold-leaf.png",
    desc: "Paper-thin pastry layered with spiced saffron chicken, roasted almonds, orange blossom mist, and pure 24-karat gold leaf.",
  },
  {
    title: "Pan-Seared Jumbo Scallop",
    subtitle: "Atlantic Sea Catch",
    image: "/images/scallop-bastilla-luxury.png",
    desc: "Jumbo scallops enveloped in delicate warqa crisps over an aromatic saffron cream reduction.",
  },
  {
    title: "12-Hour Clay Pot Tagines",
    subtitle: "Terracotta Braising",
    image: "/images/honey-lamb-shank-luxury.png",
    desc: "Simmered for 12 hours with California wildflower honey, caramelized prunes, and toasted sesame, unveiled table-side.",
  },
  {
    title: "The Candlelit Sanctuary",
    subtitle: "35 Seated Guests Only",
    image: "/images/beverly-hills-lounge-booth.png",
    desc: "Dim amber candlelight, heavy velvet banquettes, and discreet acoustics for intimate celebrity dining without cameras.",
  },
];

const PRESS_ARTICLES = [
  {
    pub: "The Hollywood Reporter",
    title: "Inside Chef Ben & Ryan Gosling’s Beverly Hills Sanctuary",
    quote:
      "The quiet hideaway Hollywood A-listers escape to when they want romantic intimacy and exceptional food without cameras.",
    tag: "Celebrity Dining",
  },
  {
    pub: "Los Angeles Times",
    title: "Tagine: Where Gastronomy Reaches Cinematic Heights",
    quote:
      "A secluded jewel in Beverly Hills where slow-cooked Moroccan cuisine is elevated to an art form.",
    tag: "Critic’s Pick",
  },
  {
    pub: "Forbes",
    title: "The Beverly Hills Hideaway Redefining Fine Dining",
    quote:
      "Stepping into Tagine feels like entering a private club where every detail speaks to warmth, heritage, and luxury.",
    tag: "Luxury Travel",
  },
  {
    pub: "Zagat",
    title: "Rated Top 10 Most Romantic Restaurants in Los Angeles",
    quote:
      "Intimate candlelit velvet booths, intoxicating clay-pot braises, and genuine hospitable warmth make Tagine unforgettable.",
    tag: "Top Rated",
  },
];

export default function HomePage() {
  const [activeMenuTab, setActiveMenuTab] = useState("starters");

  const activeTabContent =
    MENU_TABS.find((t) => t.id === activeMenuTab) || MENU_TABS[0];

  return (
    <div className="flex flex-col bg-[#0A0A0A] text-[#F9F9F9] overflow-hidden">
      {/* ═════════════════════════════════════════════════════════════════════
          1. FULL-BLEED CINEMATIC HERO (Avra / Funke LA / Novikov Inspired)
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 sm:pb-16 px-6 sm:px-12 overflow-hidden">
        {/* Full-Screen Video Background with Deep Moody Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/p1000898-2048x1152.jpg"
            className="w-full h-full object-cover scale-105 filter brightness-[0.55] contrast-[1.15]"
          >
            <source src="/images/background_video.mp4" type="video/mp4" />
          </video>
          {/* Subtle dark gradient overlay for effortless readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]/90" />
        </div>

        {/* Top Spacer */}
        <div />

        {/* Center: Grand Editorial Title & Call to Action */}
        <div className="site-container max-w-5xl relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181615]/80 border border-[#D4AF37]/30 backdrop-blur-md mb-6"
          >
            <Sparkles size={11} className="text-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Beverly Hills · 132 N Robertson Blvd
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mb-4 sm:mb-6"
          >
            <TagineLogo size="hero" variant="white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-wide max-w-3xl leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Where Hollywood Gathers in Candlelit Solitude
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs sm:text-sm text-[#EDE8DF]/90 font-light max-w-xl mx-auto leading-relaxed mb-10"
          >
            Founded by Chef &apos;Ben&apos; Benameur &amp; Ryan Gosling. An intimate 35-seat sanctuary on Robertson Boulevard dedicated to 12-hour clay pot braises and genuine hospitality.
          </motion.p>

          {/* High-Contrast Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              href="/reservations"
              className="btn-gold py-4 px-10 text-xs tracking-[0.24em] font-semibold shadow-[0_8px_30px_rgba(212,175,55,0.4)] flex items-center gap-2"
            >
              <Calendar size={14} />
              <span>Reserve a Table</span>
            </Link>

            <Link
              href="/menu"
              className="btn-outline py-4 px-10 text-xs tracking-[0.24em] font-semibold flex items-center gap-2"
            >
              <span>Explore Menus</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Editorial Banner (Avra / Novikov Style) */}
        <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.1] pt-6 mt-8 text-[11px] text-[#A3A3A3] uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E07A5F] animate-pulse" />
            <span className="text-white font-medium">Tonight: Strictly 12 Tables Nightly</span>
          </div>

          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <span>Dinner: 5:00 PM – 10:00 PM</span>
            <span className="text-[#D4AF37]">✦</span>
            <span>(310) 360-7535</span>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. THE CRAFT & PHILOSOPHY (Funke LA Style Editorial Showcase)
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 bg-[#0A0A0A] relative border-t border-[#D4AF37]/20">
        <div className="site-container max-w-7xl">
          {/* Editorial Split Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 sm:mb-24">
            <div className="lg:col-span-7">
              <span
                className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold block mb-4"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Culinary Philosophy
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Masterfully Handcrafted. <br className="hidden sm:inline" />
                Slow-Braised in Conical Clay.
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed mb-6">
                Rooted in historic Beverly Hills, Tagine by Chef Ben Benameur and Ryan Gosling is a conduit between generational Moroccan cooking and ultra-luxury dining. Every tagine simmers for up to 12 hours; every Bastilla is rolled paper-thin by hand.
              </p>
              <div className="flex items-center gap-4 text-xs text-[#D4AF37]">
                <span>✦ 100% Halal Certified</span>
                <span>✦ Organic California Produce</span>
              </div>
            </div>
          </div>

          {/* Visual Craft Grid (4 Full-Bleed Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CRAFT_GALLERY.map((item) => (
              <div
                key={item.title}
                className="luxury-card overflow-hidden group border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-[9px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#0E0D0C]/85 border border-[#D4AF37]/35 text-[#D4AF37] backdrop-blur-md">
                      {item.subtitle}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3
                      className="text-lg text-white font-normal mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. FOUNDERS EDITORIAL: CHEF BEN & RYAN GOSLING (Split Layout)
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 bg-[#0E0D0C] border-y border-[#D4AF37]/20 relative">
        <div className="site-container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Full-Bleed Portrait */}
            <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
              <Image
                src="/images/qtq80-cmxbhc-2048x1259.jpeg"
                alt="Chef Ben Benameur and Ryan Gosling"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-xs text-[#D4AF37] uppercase tracking-widest font-serif italic">
                Chef Ben &amp; Ryan Gosling · Beverly Hills
              </div>
            </div>

            {/* Right: The Origin Story */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div>
                <span
                  className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold block mb-3"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  The Founders
                </span>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  A Shared Passion for Generational Comfort
                </h2>
              </div>

              {/* Ryan Gosling Quote Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#141312] border border-[#D4AF37]/35 shadow-xl relative">
                <blockquote
                  className="text-base sm:text-lg text-white font-normal italic leading-relaxed mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &ldquo;Tagine is the kind of food you eat and then you realize you never want to eat anywhere else. It’s like eating warm, comforting art in the dark.&rdquo;
                </blockquote>
                <div className="flex items-center justify-between border-t border-white/[0.08] pt-3 text-xs">
                  <span className="text-[#D4AF37] font-semibold uppercase tracking-wider">Ryan Gosling</span>
                  <span className="text-[#A3A3A3]">Co-Founder &amp; Acclaimed Actor</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed">
                Ryan Gosling ate Chef Ben&apos;s food every night for months until they decided to build a quiet, secluded 35-seat living room in Beverly Hills where guests and Hollywood royalty can dine in genuine candlelit comfort away from the paparazzi.
              </p>

              <div>
                <Link
                  href="/chef-ben"
                  className="btn-outline py-3.5 px-8 text-xs tracking-[0.24em] inline-flex items-center gap-2"
                >
                  <span>Discover Their Full Story</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. THE MENUS SHOWCASE (Novikov / Avra Clean Tabbed Design)
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 bg-[#0A0A0A] relative border-b border-[#D4AF37]/15">
        <div className="site-container max-w-6xl">
          <div className="text-center mb-14 sm:mb-20 max-w-2xl mx-auto">
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold block mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Culinary Offerings
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Dinner &amp; Wine Menus
            </h2>
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] text-sm my-4 select-none">
              <span className="h-[1px] w-12 bg-gradient-to-l from-[#D4AF37]/60 to-transparent" />
              <span>✦</span>
              <span className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
            </div>
            <p className="text-[#A3A3A3] text-xs sm:text-sm font-light leading-relaxed">
              Every dish is cooked fresh to order with organic California produce, imported Mediterranean spices, and 100% Halal certified meats.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-16">
            {MENU_TABS.map((tab) => {
              const isActive = tab.id === activeMenuTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveMenuTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#E07A5F] to-[#D96B43] text-white shadow-[0_0_24px_rgba(224,122,95,0.45)] border border-[#F4A261]"
                      : "bg-[#161413] text-[#A3A3A3] hover:text-white border border-[#D4AF37]/20 hover:border-[#D4AF37]"
                  }`}
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Animated Dish Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenuTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {activeTabContent.items.map((dish) => (
                <div
                  key={dish.title}
                  className="luxury-card overflow-hidden group flex flex-col justify-between border border-[#D4AF37]/20 hover:border-[#D4AF37]/50"
                >
                  <div>
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-semibold backdrop-blur-md ${
                            dish.tagType === "amber"
                              ? "bg-[#E07A5F]/90 text-white border border-[#F4A261]/40"
                              : "bg-[#0A0A0A]/85 text-[#D4AF37] border border-[#D4AF37]/35"
                          }`}
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          {dish.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 flex flex-col gap-2.5">
                      <div className="flex items-start justify-between gap-3">
                        <h3
                          className="text-xl text-white font-normal leading-snug"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {dish.title}
                        </h3>
                        <span className="text-[#D4AF37] font-serif font-semibold text-lg shrink-0">
                          {dish.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
                        {dish.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* PDF Download Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
            <a
              href="/menu/tagine_food_menu1_10_25x15_new-merged-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold py-3.5 px-8 text-xs tracking-widest inline-flex items-center gap-2"
            >
              <FileText size={14} />
              <span>Full Food Menu (PDF)</span>
            </a>

            <a
              href="/menu/tagine_wine_menu_5_5x15_new.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline py-3.5 px-8 text-xs tracking-widest inline-flex items-center gap-2"
            >
              <Wine size={14} />
              <span>Reserve Wine List (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. PRIVATE DINING & FULL BUYOUTS (Funke LA / Novikov Style)
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 sm:py-40 overflow-hidden">
        {/* Full-Bleed Background Image with Dark Tint */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/beverly-hills-lounge-booth.png"
            alt="Tagine Beverly Hills Private Dining"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]" />
        </div>

        <div className="site-container max-w-4xl relative z-10 text-center flex flex-col items-center">
          <span
            className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold block mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Intimate Accommodations
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Private Events &amp; Complete Buyouts
          </h2>

          <p className="text-xs sm:text-sm text-[#EDE8DF]/90 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            For bespoke film wrap dinners, milestone celebrations, and high-profile private gatherings. Reserve our entire 35-seat sanctuary on Robertson Boulevard with customized tasting menus by Chef Ben.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/catering"
              className="btn-gold py-4 px-10 text-xs tracking-widest font-semibold"
            >
              Inquire For Private Events
            </Link>

            <Link
              href="/reservations"
              className="btn-outline py-4 px-10 text-xs tracking-widest font-semibold"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          6. IN THE NEWS & CRITICAL ACCLAIM (Funke LA Style Press Grid)
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-36 bg-[#0E0D0C] border-y border-[#D4AF37]/20 relative">
        <div className="site-container max-w-7xl">
          <div className="text-center mb-16 sm:mb-20 max-w-2xl mx-auto">
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold block mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Critical Acclaim
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              In The News
            </h2>
            <div className="flex items-center justify-center gap-3 text-[#D4AF37] text-sm my-4 select-none">
              <span className="h-[1px] w-12 bg-gradient-to-l from-[#D4AF37]/60 to-transparent" />
              <span>✦</span>
              <span className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRESS_ARTICLES.map((art) => (
              <div
                key={art.pub}
                className="luxury-card p-7 border border-white/[0.08] hover:border-[#D4AF37]/40 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold">
                      {art.pub}
                    </span>
                    <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                  </div>
                  <h3
                    className="text-lg text-white font-normal mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
                    &ldquo;{art.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] mt-6">
                  <span className="text-[10px] text-[#EDE8DF] uppercase tracking-wider font-medium">
                    {art.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          7. REAL CLIENT REVIEWS
      ═════════════════════════════════════════════════════════════════════ */}
      <ClientReviews />

      {/* ═════════════════════════════════════════════════════════════════════
          8. NEED TO KNOW / HOURS & LOCATION (Novikov & Funke LA Style)
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#D4AF37]/20 relative">
        <div className="site-container max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold block mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Essential Information
            </span>
            <h2
              className="text-3xl sm:text-4xl text-white font-normal tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Need To Know
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Location */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <MapPin size={16} />
                <span className="text-xs uppercase tracking-widest font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
                  Location
                </span>
              </div>
              <p className="text-xs text-white leading-relaxed font-medium">
                132 N Robertson Blvd <br />
                Beverly Hills, CA 90211
              </p>
              <p className="text-[11px] text-[#A3A3A3] font-light">
                Valet parking available at entrance. Discreet curbside arrival.
              </p>
            </div>

            {/* 2. Dinner Hours */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Clock size={16} />
                <span className="text-xs uppercase tracking-widest font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
                  Dinner Service
                </span>
              </div>
              <div className="text-xs text-white leading-relaxed font-medium">
                Monday – Thursday: 5:00 PM – 10:00 PM <br />
                Friday – Saturday: 5:00 PM – 11:00 PM
              </div>
              <p className="text-[11px] text-[#A3A3A3] font-light">
                Dim candlelit ambiance. Reservations strongly recommended.
              </p>
            </div>

            {/* 3. Lunch Hours */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Utensils size={16} />
                <span className="text-xs uppercase tracking-widest font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
                  Lunch Service
                </span>
              </div>
              <div className="text-xs text-white leading-relaxed font-medium">
                Tuesday – Friday: 12:00 PM – 2:00 PM
              </div>
              <p className="text-[11px] text-[#A3A3A3] font-light">
                Intimate daytime dining and business lunches.
              </p>
            </div>

            {/* 4. Attire & Heritage */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <ShieldCheck size={16} />
                <span className="text-xs uppercase tracking-widest font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
                  Attire &amp; Heritage
                </span>
              </div>
              <div className="text-xs text-white leading-relaxed font-medium">
                Smart Sophisticated Evening Attire
              </div>
              <p className="text-[11px] text-[#A3A3A3] font-light">
                100% Halal certified meats. Celiac &amp; vegan accommodations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
