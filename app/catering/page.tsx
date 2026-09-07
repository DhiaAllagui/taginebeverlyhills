"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CheckCircle, Sparkles, Calendar, Users, Wine, Utensils, ArrowRight } from "lucide-react";

export default function CateringPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState("20 - 35");
  const [eventType, setEventType] = useState("Restaurant Buyout");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const eventTypes = [
    { id: "Restaurant Buyout", label: "Restaurant Buyout", capacity: "Up to 35 Guests" },
    { id: "Off-Site Estate", label: "Off-Site Estate", capacity: "20 – 250+ Guests" },
    { id: "Wedding & Gala", label: "Wedding & Gala", capacity: "Bespoke" },
  ];

  const guestRanges = ["10 – 20", "20 – 35", "35 – 75", "75 – 150", "150+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-[#141514] text-[#EFECE6] py-32 sm:py-40 lg:py-48 overflow-hidden">
      {/* Ambient Candlelight Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#94BA26]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container max-w-5xl relative z-10 flex flex-col gap-20 sm:gap-28 lg:gap-32">
        {/* ─── Hero Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#94BA26]/30 mb-6">
            <Sparkles size={13} className="text-[#94BA26]" />
            <span className="text-[#94BA26] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              Private Dining & Bespoke Events
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-wide mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Catering & <span className="text-[#94BA26] italic">Buyouts</span>
          </h1>

          <div className="gold-divider">
            <span className="text-[#94BA26] text-xs">✦</span>
          </div>

          <p className="text-[#9C9B94] text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed mt-4">
            From complete exclusivity of our intimate Beverly Hills sanctuary to grand culinary productions at private California estates, Chef Ben curates an unforgettable feast.
          </p>
        </motion.div>

        {/* ─── Experiences Showcase (Editorial Cards) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {/* Option 1: Buyout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="luxury-card overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/img_1626-2048x1536.jpg"
                  alt="Tagine Beverly Hills dining room buyout"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181918] via-transparent to-black/20" />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-[#94BA26]/40 px-3.5 py-1 rounded-full text-[10px] text-[#94BA26] uppercase tracking-[0.2em] font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                  Up to 35 Guests
                </div>
              </div>

              <div className="p-7 lg:p-8 flex flex-col gap-4">
                <h3 className="text-2xl lg:text-3xl text-white font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Full Restaurant Buyout
                </h3>
                <p className="text-xs sm:text-sm text-[#9C9B94] font-light leading-relaxed">
                  Complete privacy in our candlelit hideaway on Robertson Blvd. Intimate tables, dim lighting, soft Moroccan melodies, and attentive private service.
                </p>

                <div className="pt-2 border-t border-white/5 flex flex-col gap-2 text-xs text-[#EFECE6]/80 font-light">
                  <div className="flex items-center gap-2">
                    <Utensils size={13} className="text-[#94BA26]" />
                    <span>Custom multi-course Moroccan tasting by Chef Ben</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wine size={13} className="text-[#94BA26]" />
                    <span>Curated fine wine pairings & champagne welcome</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={13} className="text-[#94BA26]" />
                    <span>Dedicated sommelier and private service staff</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 lg:p-8 pt-0">
              <button
                onClick={() => {
                  setEventType("Restaurant Buyout");
                  const formEl = document.getElementById("inquiry-form");
                  if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline w-full text-xs py-3 justify-center"
              >
                Inquire For Buyout
              </button>
            </div>
          </motion.div>

          {/* Option 2: Off-Site Catering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="luxury-card overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/p1000898-2048x1152.jpg"
                  alt="Off-site estate catering by Tagine"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181918] via-transparent to-black/20" />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-[#94BA26]/40 px-3.5 py-1 rounded-full text-[10px] text-[#94BA26] uppercase tracking-[0.2em] font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                  20 to 250+ Guests
                </div>
              </div>

              <div className="p-7 lg:p-8 flex flex-col gap-4">
                <h3 className="text-2xl lg:text-3xl text-white font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Off-Site Estate Catering
                </h3>
                <p className="text-xs sm:text-sm text-[#9C9B94] font-light leading-relaxed">
                  We bring the full culinary alchemy of Tagine to private residences, wedding celebrations, and film industry wrap events across Southern California.
                </p>

                <div className="pt-2 border-t border-white/5 flex flex-col gap-2 text-xs text-[#EFECE6]/80 font-light">
                  <div className="flex items-center gap-2">
                    <Utensils size={13} className="text-[#94BA26]" />
                    <span>Live tagine cooking stations & slow-braised lamb shanks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={13} className="text-[#94BA26]" />
                    <span>Artisanal Moroccan tableware, lanterns & decor styling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={13} className="text-[#94BA26]" />
                    <span>Full brigade of chefs, captains, and mixologists</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 lg:p-8 pt-0">
              <button
                onClick={() => {
                  setEventType("Off-Site Estate");
                  const formEl = document.getElementById("inquiry-form");
                  if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline w-full text-xs py-3 justify-center"
              >
                Inquire For Catering
              </button>
            </div>
          </motion.div>
        </div>

        {/* ─── Concierge Event Inquiry Form ─── */}
        <motion.div
          id="inquiry-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="luxury-card p-10 sm:p-16 lg:p-20 relative shadow-2xl"
        >
          <div className="text-center mb-14">
            <span className="text-[#94BA26] text-xs uppercase tracking-[0.28em] font-medium block mb-2.5" style={{ fontFamily: "'Cinzel', serif" }}>
              Private Dining Concierge
            </span>
            <h2 className="text-3xl sm:text-4xl text-white font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Request an Event Proposal
            </h2>
            <p className="text-xs sm:text-sm text-[#9C9B94] font-light max-w-md mx-auto mt-3">
              Share your vision. Our Private Dining Director will respond with customized culinary proposals and availability.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#94BA26]/10 border border-[#94BA26] flex items-center justify-center text-[#94BA26] mb-5">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl text-white font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Proposal Request Received
                </h3>
                <p className="text-sm text-[#9C9B94] max-w-md mb-2 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{name}</span>. We have logged your request for <span className="text-white font-medium">{eventType}</span> ({guests} guests).
                </p>
                <p className="text-xs text-[#9C9B94]/80 mb-8">
                  Our private events concierge will contact you shortly at <span className="text-[#94BA26]">{phone || email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs px-8 py-3"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 sm:gap-10">
                {/* Interactive Event Type Selector */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#94BA26] font-medium mb-3.5" style={{ fontFamily: "'Cinzel', serif" }}>
                    Select Event Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                    {eventTypes.map((item) => {
                      const isSelected = eventType === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setEventType(item.id)}
                          className={`p-4 sm:p-5 rounded-xl text-left transition-all duration-300 border shadow-sm ${
                            isSelected
                              ? "bg-[#94BA26]/20 border-[#94BA26] text-white shadow-[0_0_18px_rgba(148,186,38,0.25)]"
                              : "bg-zinc-900/80 border-zinc-700/50 text-[#D4D2C9] hover:bg-[#94BA26]/20 hover:border-[#94BA26] hover:text-white hover:-translate-y-0.5"
                          }`}
                        >
                          <div className="text-xs font-medium">{item.label}</div>
                          <div className="text-[11px] text-[#94BA26] font-medium mt-1">{item.capacity}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Interactive Guest Count Pills */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#94BA26] font-medium mb-3.5" style={{ fontFamily: "'Cinzel', serif" }}>
                    Estimated Guest Count
                  </label>
                  <div className="flex flex-wrap gap-3.5 sm:gap-4">
                    {guestRanges.map((range) => {
                      const isSelected = guests === range;
                      return (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setGuests(range)}
                          className={`px-5 py-3 rounded-full text-xs font-medium transition-all duration-300 border shadow-sm ${
                            isSelected
                              ? "bg-[#94BA26] text-[#0E100E] border-[#94BA26] font-semibold shadow-[0_0_15px_rgba(148,186,38,0.35)]"
                              : "bg-zinc-900/80 border-zinc-700/50 text-[#D4D2C9] hover:bg-[#94BA26]/20 hover:border-[#94BA26] hover:text-white hover:-translate-y-0.5"
                          }`}
                        >
                          {range} Guests
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact & Date Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 font-light mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="luxury-input"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 font-light mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(310) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="luxury-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 font-light mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="luxury-input"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 font-light mb-2">
                      Desired Event Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="luxury-input"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-white/70 font-light mb-2">
                    Vision, Dietary Notes, or Inquiries (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the occasion, dietary preferences, or specific culinary wishes..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="luxury-input resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6 text-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold w-full sm:w-auto min-w-[320px] py-4 text-xs font-semibold tracking-widest"
                  >
                    {submitting ? "Sending Request..." : "Request Proposal"}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ─── Direct Concierge Contact ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center border-t border-white/5 pt-10"
        >
          <p className="text-xs text-[#9C9B94] font-light mb-3">
            Prefer to speak directly with our private dining manager?
          </p>
          <a
            href="tel:+13103607535"
            className="inline-flex items-center gap-2.5 text-white hover:text-[#94BA26] font-medium text-base transition-colors px-6 py-2.5 rounded-full bg-white/[0.02] border border-white/10 hover:border-[#94BA26]/50"
          >
            <Phone size={15} className="text-[#94BA26]" />
            <span>(310) 360-7535</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
