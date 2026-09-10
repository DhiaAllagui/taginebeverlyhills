"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CheckCircle, Sparkles, Users, Wine, Utensils } from "lucide-react";
import { submitInquiry } from "../lib/form-actions";
import LoadingSpinner from "../components/LoadingSpinner";
import SubpageBackground from "../components/SubpageBackground";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitInquiry({
        formType: "Private Dining & Catering Proposal",
        name,
        phone,
        email,
        eventType,
        guests,
        eventDate,
        notes,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Catering submission error:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F9F9F9] pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-32 overflow-hidden">
      {/* Page Background: bg.png */}
      <SubpageBackground />

      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[350px] ambient-glow-amber pointer-events-none opacity-25" />

      <div className="site-container max-w-5xl relative z-10 flex flex-col gap-16 sm:gap-24">
        {/* ─── Hero Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center px-2 sm:px-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181615] border border-[#D4AF37]/30 mb-6 shadow-sm">
            <Sparkles size={13} className="text-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Private Dining &amp; Bespoke Events
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-wide mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Catering &amp; <span className="text-[#D4AF37] italic">Buyouts</span>
          </h1>

          <div className="gold-divider">
            <span className="text-[#D4AF37] text-xs">✦</span>
          </div>

          <p className="text-[#A3A3A3] text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed mt-4">
            From complete exclusivity of our intimate Beverly Hills sanctuary to grand culinary productions at private California estates, Chef Ben curates an unforgettable feast.
          </p>
        </motion.div>

        {/* ─── Experiences Showcase ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Option 1: Buyout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="luxury-card overflow-hidden group flex flex-col justify-between border border-[#D4AF37]/25"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30" />
                <div
                  className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 px-3.5 py-1 rounded-full text-[10px] text-[#D4AF37] uppercase tracking-[0.2em] font-semibold"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Up to 35 Guests
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col gap-4">
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl text-white font-normal"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Full Restaurant Buyout
                </h3>
                <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed">
                  Complete exclusivity in our candlelit hideaway on Robertson Blvd. Intimate tables, dim lighting, soft lounge melodies, and attentive private service.
                </p>

                <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2.5 text-xs text-[#EDE8DF] font-light">
                  <div className="flex items-center gap-2">
                    <Utensils size={13} className="text-[#D4AF37]" />
                    <span>Custom multi-course tasting menu by Chef Ben</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wine size={13} className="text-[#D4AF37]" />
                    <span>Curated reserve wine pairings &amp; champagne welcome</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={13} className="text-[#D4AF37]" />
                    <span>Dedicated sommelier and private service brigade</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <button
                type="button"
                onClick={() => {
                  setEventType("Restaurant Buyout");
                  const formEl = document.getElementById("inquiry-form");
                  if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-gold w-full text-xs py-3.5 justify-center tracking-widest cursor-pointer"
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
            className="luxury-card overflow-hidden group flex flex-col justify-between border border-[#D4AF37]/25"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30" />
                <div
                  className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#E07A5F]/40 px-3.5 py-1 rounded-full text-[10px] text-[#E07A5F] uppercase tracking-[0.2em] font-semibold"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  20 to 250+ Guests
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col gap-4">
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl text-white font-normal"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Off-Site Estate Catering
                </h3>
                <p className="text-xs sm:text-sm text-[#A3A3A3] font-light leading-relaxed">
                  We bring the full culinary alchemy of Tagine to private Beverly Hills residences, wedding celebrations, and film industry wrap events across Southern California.
                </p>

                <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2.5 text-xs text-[#EDE8DF] font-light">
                  <div className="flex items-center gap-2">
                    <Utensils size={13} className="text-[#D4AF37]" />
                    <span>Live braising stations &amp; slow-cooked signature lamb shanks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={13} className="text-[#D4AF37]" />
                    <span>Artisanal tableware, ambient lighting &amp; luxury decor styling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={13} className="text-[#D4AF37]" />
                    <span>Full brigade of chefs, captains, and mixologists</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <button
                type="button"
                onClick={() => {
                  setEventType("Off-Site Estate");
                  const formEl = document.getElementById("inquiry-form");
                  if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline w-full text-xs py-3.5 justify-center tracking-widest cursor-pointer"
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
          className="luxury-card p-6 sm:p-10 lg:p-14 relative shadow-2xl border border-[#D4AF37]/25"
        >
          <div className="text-center mb-10">
            <span
              className="text-[#D4AF37] text-xs uppercase tracking-[0.28em] font-semibold block mb-2"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Private Dining Concierge
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl text-white font-normal"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Request an Event Proposal
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A3A3] font-light max-w-md mx-auto mt-2.5">
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
                className="py-8 sm:py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#E07A5F]/15 border border-[#E07A5F] flex items-center justify-center text-[#E07A5F] mb-5 shadow-[0_0_30px_rgba(224,122,95,0.35)]">
                  <CheckCircle size={32} />
                </div>
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl text-white font-normal mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Proposal Request Received
                </h3>
                <p className="text-sm text-[#A3A3A3] max-w-md mb-2 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{name}</span>. We have logged your request for <span className="text-white font-medium">{eventType}</span> ({guests} guests).
                </p>
                <p className="text-xs text-[#A3A3A3]/80 mb-8">
                  Our private events director will contact you shortly at <span className="text-[#D4AF37]">{phone || email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs px-8 py-3 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Event Type Selector */}
                <div>
                  <label
                    className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3.5"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Select Event Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {eventTypes.map((item) => {
                      const isSelected = eventType === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setEventType(item.id)}
                          className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                            isSelected
                              ? "bg-gradient-to-r from-[#E07A5F] to-[#D96B43] border-[#F4A261] text-white shadow-[0_0_18px_rgba(224,122,95,0.4)]"
                              : "bg-[#161413] border-[#D4AF37]/20 text-[#A3A3A3] hover:border-[#D4AF37] hover:text-white"
                          }`}
                        >
                          <div className="text-xs font-semibold">{item.label}</div>
                          <div className={`text-[11px] mt-1 ${isSelected ? "text-white/80" : "text-[#D4AF37]"}`}>
                            {item.capacity}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Guest Count Pills */}
                <div>
                  <label
                    className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3.5"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Estimated Guest Count
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {guestRanges.map((range) => {
                      const isSelected = guests === range;
                      return (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setGuests(range)}
                          className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 border cursor-pointer ${
                            isSelected
                              ? "bg-[#D4AF37] text-[#0A0A0A] border-[#F3E5AB] shadow-[0_0_15px_rgba(212,175,55,0.4)] font-bold"
                              : "bg-[#161413] border-[#D4AF37]/20 text-[#A3A3A3] hover:border-[#D4AF37] hover:text-white"
                          }`}
                        >
                          {range} Guests
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact & Date Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#A3A3A3] font-light mb-2">
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
                    <label className="block text-[11px] uppercase tracking-wider text-[#A3A3A3] font-light mb-2">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#A3A3A3] font-light mb-2">
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
                    <label className="block text-[11px] uppercase tracking-wider text-[#A3A3A3] font-light mb-2">
                      Desired Event Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={eventDate}
                      min={new Date().toISOString().split("T")[0]}
                      onClick={(e) => {
                        try {
                          e.currentTarget.showPicker?.();
                        } catch {}
                      }}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="luxury-input cursor-pointer"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A3A3A3] font-light mb-2">
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
                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold w-full sm:w-auto sm:min-w-[300px] py-4 text-xs font-semibold tracking-widest disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <LoadingSpinner size="sm" />
                        Transmitting...
                      </span>
                    ) : (
                      "Request Proposal"
                    )}
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
          className="text-center border-t border-white/[0.08] pt-8"
        >
          <p className="text-xs text-[#A3A3A3] font-light mb-3">
            Prefer to speak directly with our private dining director?
          </p>
          <a
            href="tel:+13103607535"
            className="inline-flex items-center gap-2.5 text-white hover:text-[#D4AF37] font-medium text-base transition-colors px-6 py-2.5 rounded-full bg-[#161413] border border-[#D4AF37]/30 hover:border-[#D4AF37]"
          >
            <Phone size={15} className="text-[#D4AF37]" />
            <span>(310) 360-7535</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
