"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Wine, Sparkles, ArrowRight, Check } from "lucide-react";

const menuData = [
  {
    category: "Mezzes & Starters",
    subtitle: "Traditional Moroccan Opening Courses",
    items: [
      {
        name: "House Mezze Platter",
        desc: "Smoky zaalouk roasted eggplant, sweet taktouka bell peppers, whipped cumin hummus, and warm stone-baked flatbread.",
        price: "$22",
        tag: "Chef's Selection",
      },
      {
        name: "Classic Chicken Bastilla",
        desc: "Golden crisp warqa pastry sheets, spiced saffron braised chicken, crushed roasted almonds, orange blossom, and fine cinnamon.",
        price: "$24",
        tag: "Signature",
      },
      {
        name: "Jumbo Scallop Bastilla",
        desc: "Seared jumbo sea scallops enveloped in delicate pastry crisps, served over a rich saffron cream reduction.",
        price: "$28",
        tag: "Seafood Specialty",
      },
      {
        name: "Tomato & Cucumber Tartar",
        desc: "Heirloom tomatoes, crisp Persian cucumbers, wild garden mint, sumac emulsion, and cold-pressed olive oil.",
        price: "$16",
        tag: "Vegan / GF",
      },
      {
        name: "Traditional Harira Soup",
        desc: "Slow-simmered rich tomato broth, tender green lentils, chickpeas, fresh coriander, and Moroccan spices.",
        price: "$14",
        tag: "Heritage",
      },
    ],
  },
  {
    category: "Signature Tagines",
    subtitle: "Clay-Pot Braised Slow-Cooked Masterpieces",
    items: [
      {
        name: "Honey Lamb Shank Tagine",
        desc: "12-hour slow braised lamb shank, wildflower honey reduction, caramelized prunes, toasted almonds, and sesame.",
        price: "$46",
        tag: "Chef Ben's Icon",
      },
      {
        name: "Chicken Chermoula Tagine",
        desc: "Organic free-range chicken, cured purple olives, house-preserved Meyer lemons, cilantro, and garlic marinade.",
        price: "$38",
        tag: "Authentic",
      },
      {
        name: "Wild Atlantic Sea Bass",
        desc: "Pan-roasted Chilean sea bass fillet, sweet bell peppers, heirloom tomatoes, in a fragrant spiced saffron broth.",
        price: "$44",
        tag: "Wild Catch",
      },
      {
        name: "Berber Seven Vegetable Tagine",
        desc: "Seven seasonal California market vegetables, butternut squash, golden chickpeas, infused with aromatic Berber spices.",
        price: "$32",
        tag: "Vegan / Organic",
      },
    ],
  },
  {
    category: "Couscous & Grills",
    subtitle: "Hand-Rolled Semolina & Open Flame Cuts",
    items: [
      {
        name: "Grilled Moroccan Lamb Chops",
        desc: "Tender Colorado lamb chops crusted with fresh rosemary and sea salt, served with grilled asparagus and rosemary jus.",
        price: "$48",
        tag: "Prime Cut",
      },
      {
        name: "Couscous Royal",
        desc: "A feast of grilled lamb chop, spicy house-made merguez sausage, braised chicken, steamed semolina, and vegetable broth.",
        price: "$54",
        tag: "Grand Feast",
      },
      {
        name: "Slow-Steamed Chicken Couscous",
        desc: "Tender chicken, seven market vegetables, and fluffy hand-rolled semolina steamed over fragrant saffron broth.",
        price: "$36",
        tag: "Classic",
      },
    ],
  },
  {
    category: "Desserts & Tea",
    subtitle: "Sweet Moroccan Endings & Rituals",
    items: [
      {
        name: "Pistachio Baklava",
        desc: "Hand-rolled warqa pastry leaves filled with crushed Sicilian pistachios and drenched in orange blossom wild honey.",
        price: "$14",
        tag: "House Made",
      },
      {
        name: "Sweet Couscous Seffa",
        desc: "Steamed sweet semolina dusted with cinnamon, toasted pine nuts, and stuffed Medjool dates.",
        price: "$12",
        tag: "Traditional",
      },
      {
        name: "Moroccan Mint Tea Ceremony",
        desc: "Imported gunpowder green tea, fragrant spearmint leaves, poured high from silver teapots into etched glasses.",
        price: "$9",
        tag: "Ceremonial",
      },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCategories =
    activeCategory === "All"
      ? menuData
      : menuData.filter((sec) => sec.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-[#141514] text-[#EFECE6] py-32 sm:py-40 lg:py-48 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />

      <div className="site-container max-w-4xl relative z-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 lg:mb-28"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#94BA26]/30 mb-6">
            <Sparkles size={13} className="text-[#94BA26]" />
            <span className="text-[#94BA26] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              Tagine Beverly Hills
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Dinner <span className="text-[#94BA26] italic">Menu</span>
          </h1>

          <div className="gold-divider my-6">
            <span className="text-[#94BA26] text-xs">✦</span>
          </div>

          <p className="text-[#9C9B94] text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed mb-10">
            Every dish is cooked fresh to order with organic California produce and authentic spices imported directly from Chef Ben&apos;s native Morocco.
          </p>

          {/* Official PDF Download Badges with Distinct Container Styling */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
            <a
              href="/menu/tagine_food_menu1_10_25x15_new-merged-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-zinc-900/80 border border-zinc-700/50 text-xs text-[#EFECE6] hover:bg-[#94BA26]/20 hover:border-[#94BA26] hover:text-[#94BA26] transition-all tracking-wider uppercase font-medium shadow-sm hover:shadow-[0_0_18px_rgba(148,186,38,0.25)] hover:-translate-y-0.5"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <FileText size={15} className="text-[#94BA26]" />
              <span>Full Food Menu (PDF)</span>
            </a>

            <a
              href="/menu/tagine_wine_menu_5_5x15_new.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-zinc-900/80 border border-zinc-700/50 text-xs text-[#EFECE6] hover:bg-[#94BA26]/20 hover:border-[#94BA26] hover:text-[#94BA26] transition-all tracking-wider uppercase font-medium shadow-sm hover:shadow-[0_0_18px_rgba(148,186,38,0.25)] hover:-translate-y-0.5"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <Wine size={15} className="text-[#94BA26]" />
              <span>Fine Wine List (PDF)</span>
            </a>
          </div>
        </motion.div>

        {/* ─── Interactive Filter Tabs (Distinct Glassmorphism Buttons with Brand Olive Hover) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 mb-28 lg:mb-36 pt-6"
        >
          {["All", "Mezzes & Starters", "Signature Tagines", "Couscous & Grills", "Desserts & Tea"].map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm tracking-wider transition-all duration-300 border shadow-sm ${
                  isSelected
                    ? "bg-[#94BA26] text-[#0E100E] border-[#94BA26] font-semibold shadow-[0_0_22px_rgba(148,186,38,0.45)]"
                    : "bg-zinc-900/80 border-zinc-700/50 text-[#D4D2C9] hover:bg-[#94BA26]/20 hover:border-[#94BA26] hover:text-white hover:-translate-y-0.5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* ─── Menu Sections with Generous Padding ─── */}
        <div className="flex flex-col gap-24 lg:gap-36">
          <AnimatePresence mode="wait">
            {filteredCategories.map((section, sIdx) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                className="luxury-card p-10 sm:p-16 lg:p-24 shadow-2xl"
              >
                {/* Category Title */}
                <div className="text-center mb-14 pb-8 border-b border-white/10">
                  <span className="text-[#94BA26] text-xs uppercase tracking-[0.28em] font-semibold block mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                    {section.category}
                  </span>
                  <p className="text-xs sm:text-sm text-[#9C9B94] font-light italic">
                    {section.subtitle}
                  </p>
                </div>

                {/* Items with generous vertical gaps */}
                <div className="flex flex-col gap-10 sm:gap-12">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex flex-col gap-3 pb-10 sm:pb-12 border-b border-white/5 last:border-0 last:pb-0"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span
                            className="text-xl sm:text-2xl text-white font-light group-hover:text-[#94BA26] transition-colors"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                          >
                            {item.name}
                          </span>
                          {item.tag && (
                            <span className="hidden sm:inline-block text-[9px] uppercase tracking-wider px-3 py-1 rounded-full bg-[#94BA26]/10 text-[#94BA26] border border-[#94BA26]/30">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <span className="flex-1 border-b border-dotted border-white/15 mx-4 hidden sm:block" />
                        <span
                          className="text-lg text-[#94BA26] font-medium"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#9C9B94] font-light leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ─── Visual Food Gallery Strip with Generous Separation ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-36 pt-24 sm:pt-28 border-t border-white/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="luxury-card overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/lamb-chop.jpg"
                  alt="Moroccan Lamb Chops"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 text-center text-xs text-[#9C9B94] tracking-wider uppercase font-light">
                Wood-Fired Lamb Chops
              </div>
            </div>

            <div className="luxury-card overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/img_0039-5-2048x1365.jpg"
                  alt="Chicken Bastilla"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 text-center text-xs text-[#9C9B94] tracking-wider uppercase font-light">
                Traditional Crisp Bastilla
              </div>
            </div>

            <div className="luxury-card overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/tagine3-2048x1365.jpg"
                  alt="Clay Pot Lamb Tagine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 text-center text-xs text-[#9C9B94] tracking-wider uppercase font-light">
                Authentic Clay Pot Tagine
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Footer Reassurance & Reservation CTA ─── */}
        <div className="mt-24 text-center text-xs text-[#9C9B94] font-light flex flex-col items-center gap-8">
          <p className="flex items-center justify-center gap-2">
            <Check size={15} className="text-[#94BA26]" />
            <span>All meats are 100% Halal certified. Gluten-free and vegan options readily prepared.</span>
          </p>
          <div>
            <Link href="/reservations" className="btn-gold px-10 py-4 text-xs tracking-widest">
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
