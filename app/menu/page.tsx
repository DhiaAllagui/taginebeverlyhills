"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Wine, Sparkles, Check } from "lucide-react";
import SubpageBackground from "../components/SubpageBackground";

const menuData = [
  {
    category: "Mezzes & Starters",
    subtitle: "Artisanal Opening Delicacies",
    items: [
      {
        name: "House Mezze Platter",
        desc: "Smoky zaalouk roasted eggplant, sweet taktouka charred bell peppers, whipped cumin hummus, and warm stone-baked flatbread.",
        price: "$22",
        tag: "Chef's Selection",
        tagType: "amber",
      },
      {
        name: "Classic Chicken Bastilla",
        desc: "Golden crisp warqa pastry sheets, spiced saffron braised chicken, crushed roasted almonds, orange blossom, and fine cinnamon.",
        price: "$24",
        tag: "Iconic",
        tagType: "amber",
      },
      {
        name: "Jumbo Scallop Bastilla",
        desc: "Pan-seared jumbo Atlantic sea scallops enveloped in delicate pastry crisps, served over a rich saffron cream reduction.",
        price: "$28",
        tag: "Seafood Specialty",
        tagType: "gold",
      },
      {
        name: "Tomato & Cucumber Tartar",
        desc: "Heirloom tomatoes, crisp Persian cucumbers, wild garden mint, sumac emulsion, and cold-pressed olive oil.",
        price: "$16",
        tag: "Vegan / GF",
        tagType: "gold",
      },
      {
        name: "Traditional Harira Soup",
        desc: "Slow-simmered rich tomato broth, tender green lentils, chickpeas, fresh coriander, and aromatic spices.",
        price: "$14",
        tag: "Heritage",
        tagType: "gold",
      },
    ],
  },
  {
    category: "Signature Tagines",
    subtitle: "Conical Clay-Pot Braised Slow-Cooked Masterpieces",
    items: [
      {
        name: "Honey Lamb Shank Tagine",
        desc: "12-hour slow braised lamb shank, wildflower honey reduction, caramelized prunes, toasted almonds, and sesame.",
        price: "$46",
        tag: "Chef Ben's Icon",
        tagType: "amber",
      },
      {
        name: "Chicken Chermoula Tagine",
        desc: "Organic free-range chicken, cured purple olives, house-preserved Meyer lemons, cilantro, and garlic marinade.",
        price: "$38",
        tag: "Signature",
        tagType: "gold",
      },
      {
        name: "Wild Atlantic Sea Bass",
        desc: "Pan-roasted Chilean sea bass fillet, sweet bell peppers, heirloom tomatoes, in a fragrant spiced saffron broth.",
        price: "$44",
        tag: "Wild Catch",
        tagType: "gold",
      },
      {
        name: "Berber Seven Vegetable Tagine",
        desc: "Seven seasonal California market vegetables, butternut squash, golden chickpeas, infused with aromatic Berber spices.",
        price: "$32",
        tag: "Vegan / Organic",
        tagType: "gold",
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
        tagType: "amber",
      },
      {
        name: "Couscous Royal",
        desc: "A feast of grilled lamb chop, spicy house-made merguez sausage, braised chicken, steamed semolina, and vegetable broth.",
        price: "$54",
        tag: "Grand Feast",
        tagType: "gold",
      },
      {
        name: "Slow-Steamed Chicken Couscous",
        desc: "Tender chicken, seven market vegetables, and fluffy hand-rolled semolina steamed over fragrant saffron broth.",
        price: "$36",
        tag: "Classic",
        tagType: "gold",
      },
    ],
  },
  {
    category: "Desserts & Tea",
    subtitle: "Artisanal Endings & Tea Ceremony",
    items: [
      {
        name: "Pistachio Baklava",
        desc: "Hand-rolled warqa pastry leaves filled with crushed Sicilian pistachios and drenched in orange blossom wild honey.",
        price: "$14",
        tag: "House Made",
        tagType: "amber",
      },
      {
        name: "Sweet Couscous Seffa",
        desc: "Steamed sweet semolina dusted with cinnamon, toasted pine nuts, and stuffed Medjool dates.",
        price: "$12",
        tag: "Traditional",
        tagType: "gold",
      },
      {
        name: "Moroccan Mint Tea Ceremony",
        desc: "Imported gunpowder green tea, fragrant spearmint leaves, poured high from silver teapots into etched glasses.",
        price: "$9",
        tag: "Ceremonial",
        tagType: "gold",
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
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F9F9F9] pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-32 overflow-hidden">
      {/* Page Background: bg.png */}
      <SubpageBackground />

      {/* Ambient Lighting Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] ambient-glow-amber pointer-events-none opacity-30" />

      <div className="site-container max-w-4xl relative z-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181615] border border-[#D4AF37]/30 mb-6 shadow-sm">
            <Sparkles size={13} className="text-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Beverly Hills Gastronomy
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-wide mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Dinner <span className="text-[#D4AF37] italic">Menu</span>
          </h1>

          <div className="gold-divider my-6">
            <span className="text-[#D4AF37] text-xs">✦</span>
          </div>

          <p className="text-[#A3A3A3] text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed mb-10">
            Every dish is cooked fresh to order with organic California produce and authentic spices imported directly for Chef Ben&apos;s kitchen.
          </p>

          {/* PDF Download Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
            <a
              href="/menu/tagine_food_menu1_10_25x15_new-merged-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#161413] border border-[#D4AF37]/30 text-xs text-[#EDE8DF] hover:bg-[#221E1D] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all tracking-wider uppercase font-medium shadow-md hover:shadow-[0_0_18px_rgba(212,175,55,0.25)] hover:-translate-y-0.5 cursor-pointer"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <FileText size={15} className="text-[#D4AF37]" />
              <span>Full Food Menu (PDF)</span>
            </a>

            <a
              href="/menu/tagine_wine_menu_5_5x15_new.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#161413] border border-[#D4AF37]/30 text-xs text-[#EDE8DF] hover:bg-[#221E1D] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all tracking-wider uppercase font-medium shadow-md hover:shadow-[0_0_18px_rgba(212,175,55,0.25)] hover:-translate-y-0.5 cursor-pointer"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <Wine size={15} className="text-[#D4AF37]" />
              <span>Fine Wine List (PDF)</span>
            </a>
          </div>
        </motion.div>

        {/* ─── Interactive Filter Pills ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-16 sm:mb-24 pt-2"
        >
          {["All", "Mezzes & Starters", "Signature Tagines", "Couscous & Grills", "Desserts & Tea"].map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 sm:px-7 py-3 rounded-full text-[11px] sm:text-xs tracking-wider transition-all duration-300 border uppercase font-medium cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-[#E07A5F] to-[#D96B43] text-white border-[#F4A261] shadow-[0_0_22px_rgba(224,122,95,0.45)] font-semibold"
                    : "bg-[#161413]/90 border-[#D4AF37]/20 text-[#A3A3A3] hover:border-[#D4AF37] hover:text-white hover:-translate-y-0.5"
                }`}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* ─── Menu Sections ─── */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-12 sm:gap-16"
            >
              {filteredCategories.map((section) => (
                <div
                  key={section.category}
                  className="luxury-card p-6 sm:p-10 lg:p-14 shadow-2xl border border-[#D4AF37]/25"
                >
                  {/* Category Title */}
                  <div className="text-center mb-10 pb-6 border-b border-white/[0.08]">
                    <span
                      className="text-[#D4AF37] text-xs uppercase tracking-[0.28em] font-semibold block mb-2"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {section.category}
                    </span>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] font-light italic">
                      {section.subtitle}
                    </p>
                  </div>

                  {/* Items */}
                  <div className="flex flex-col gap-8 sm:gap-10">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="group flex flex-col gap-2 pb-8 border-b border-white/[0.06] last:border-0 last:pb-0"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                            <span
                              className="text-lg sm:text-xl lg:text-2xl text-white font-normal group-hover:text-[#F3E5AB] transition-colors"
                              style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                              {item.name}
                            </span>
                            {item.tag && (
                              <span
                                className={`self-start sm:self-auto text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-semibold ${
                                  item.tagType === "amber"
                                    ? "bg-[#E07A5F]/15 text-[#E07A5F] border border-[#E07A5F]/35"
                                    : "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/35"
                                }`}
                              >
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <span
                            className="text-lg text-[#D4AF37] font-semibold sm:whitespace-nowrap"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {item.price}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed max-w-2xl">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Visual Food Gallery Strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 sm:mt-32 pt-16 border-t border-[#D4AF37]/20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="luxury-card overflow-hidden group border border-[#D4AF37]/20">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/bastilla-gold-leaf.png"
                  alt="Traditional Bastilla with Gold Leaf"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 text-center text-xs text-[#EDE8DF] tracking-wider uppercase font-light">
                Crisp Bastilla &amp; Gold Leaf
              </div>
            </div>

            <div className="luxury-card overflow-hidden group border border-[#D4AF37]/20">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/scallop-bastilla-luxury.png"
                  alt="Jumbo Scallop Bastilla"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 text-center text-xs text-[#EDE8DF] tracking-wider uppercase font-light">
                Jumbo Scallop Bastilla
              </div>
            </div>

            <div className="luxury-card overflow-hidden group border border-[#D4AF37]/20">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/honey-lamb-shank-luxury.png"
                  alt="Honey Lamb Shank Tagine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 text-center text-xs text-[#EDE8DF] tracking-wider uppercase font-light">
                Honey Lamb Shank Tagine
              </div>
            </div>

            <div className="luxury-card overflow-hidden group border border-[#D4AF37]/20">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/beverly-hills-lounge-booth.png"
                  alt="Beverly Hills Dining Lounge"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 text-center text-xs text-[#EDE8DF] tracking-wider uppercase font-light">
                Candlelit Velvet Lounge
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Footer Reservation CTA ─── */}
        <div className="mt-16 sm:mt-24 text-center text-xs text-[#A3A3A3] font-light flex flex-col items-center gap-6 px-2 sm:px-0">
          <p className="flex items-center justify-center gap-2">
            <Check size={15} className="text-[#D4AF37]" />
            <span>All meats are 100% Halal certified. Gluten-free and vegan selections readily prepared.</span>
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
