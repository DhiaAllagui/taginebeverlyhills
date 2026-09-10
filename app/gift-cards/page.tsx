"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Phone, Gift, ArrowRight } from "lucide-react";
import { openMailto } from "../lib/form-actions";
import LoadingSpinner from "../components/LoadingSpinner";
import SubpageBackground from "../components/SubpageBackground";

const amounts = ["$100", "$150", "$250", "$500", "Custom"];

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState("$150");
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [recipient, setRecipient] = useState("");
  const [personalNote, setPersonalNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const displayAmount =
    selectedAmount === "Custom"
      ? customAmount
        ? `$${customAmount}`
        : "$—"
      : selectedAmount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Gift Certificate Order — ${displayAmount}`;
    const body = [
      `Dear Tagine Concierge,`,
      ``,
      `I would like to order a Tagine Beverly Hills dining gift certificate.`,
      ``,
      `Certificate Value: ${displayAmount}`,
      recipient ? `Recipient: ${recipient}` : "",
      personalNote ? `Personal Message:\n${personalNote}` : "",
      ``,
      `Purchaser Information:`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      ``,
      `Please contact me to complete payment and delivery.`,
    ].join("\n");

    try {
      openMailto(subject, body);
      setSubmitted(true);
    } catch (err) {
      console.error("Gift card submission error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F9F9F9] pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-32 overflow-hidden">
      {/* Page Background: bg.png */}
      <SubpageBackground />

      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[450px] h-[350px] ambient-glow-amber pointer-events-none opacity-30" />

      <div className="site-container max-w-4xl relative z-10 flex flex-col gap-14 sm:gap-18">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center px-2 sm:px-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181615] border border-[#D4AF37]/30 mb-5 shadow-sm">
            <Gift size={13} className="text-[#D4AF37]" />
            <span
              className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Bespoke Dining Passes
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-wide mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Gift <span className="text-[#D4AF37] italic">Cards</span>
          </h1>

          <div className="gold-divider">
            <span className="text-[#D4AF37] text-xs">✦</span>
          </div>

          <p className="text-[#A3A3A3] text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
            Bestow the romance of an intimate candlelit culinary journey at Tagine Beverly Hills.
          </p>
        </motion.div>

        {/* ─── Visual Certificate & Order Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Live Certificate Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center gap-4"
          >
            <div
              className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative group"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.95), 0 0 35px rgba(212, 175, 55, 0.25)",
              }}
            >
              <Image
                src="/images/giftcard.png"
                alt="Tagine Beverly Hills Dining Certificate"
                width={1983}
                height={793}
                priority
                className="w-full h-auto object-cover rounded-2xl filter brightness-95 group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Dynamic Certificate Floating Badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#0E0D0C]/90 backdrop-blur-md border border-[#D4AF37]/50 shadow-xl flex items-center gap-2">
                <span className="text-[9px] uppercase tracking-widest text-[#A3A3A3]">Value:</span>
                <span className="text-base sm:text-xl font-serif text-[#D4AF37] font-bold">
                  {displayAmount}
                </span>
              </div>
            </div>

            {recipient && (
              <p className="text-xs text-[#D4AF37] italic text-center">
                Prepared for {recipient}
              </p>
            )}
            <p className="text-[11px] text-[#A3A3A3] text-center font-light">
              Redeemable for dinner, tasting menus, and reserve wine pairings. Never expires.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 luxury-card p-6 sm:p-8 lg:p-10 border border-[#D4AF37]/25"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8 sm:py-10 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E07A5F]/15 border border-[#E07A5F] flex items-center justify-center text-[#E07A5F] mb-5 shadow-[0_0_30px_rgba(224,122,95,0.35)]">
                    <CheckCircle size={32} />
                  </div>
                  <h3
                    className="text-xl sm:text-2xl lg:text-3xl text-white font-normal mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Gift Certificate Requested
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-sm mb-6 leading-relaxed">
                    Thank you, <span className="text-white font-medium">{name}</span>. Our concierge will contact you at <span className="text-[#D4AF37]">{phone || email}</span> to finalize your <span className="text-white font-medium">{displayAmount}</span> dining certificate.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-xs px-6 py-2.5"
                  >
                    Order Another Gift Pass
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
                  {/* Amount Selector Pills with Terracotta/Burnt Amber Highlights */}
                  <div>
                    <label
                      className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3.5"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Select Certificate Value
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {amounts.map((amt) => {
                        const isSelected = selectedAmount === amt;
                        return (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setSelectedAmount(amt)}
                            className={`flex-1 min-w-[64px] sm:min-w-[70px] py-2.5 sm:py-3 px-3 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-200 border cursor-pointer ${
                              isSelected
                                ? "bg-gradient-to-r from-[#E07A5F] to-[#D96B43] text-white border-[#F4A261] shadow-[0_0_20px_rgba(224,122,95,0.45)]"
                                : "bg-[#161413] text-[#EDE8DF] border-[#D4AF37]/25 hover:border-[#D4AF37] hover:bg-[#221E1D]"
                            }`}
                          >
                            {amt}
                          </button>
                        );
                      })}
                    </div>

                    {selectedAmount === "Custom" && (
                      <div className="mt-4">
                        <input
                          type="number"
                          placeholder="Enter custom dollar amount (e.g. 350)"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="luxury-input text-xs"
                          min="50"
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#A3A3A3] font-light mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="luxury-input"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#A3A3A3] font-light mb-2">
                        Your Phone *
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
                        Your Email *
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
                        Recipient Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Recipient's Name"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        className="luxury-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#A3A3A3] font-light mb-2">
                      Personal Message (Printed on Certificate)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Wishing you an extraordinary evening in Beverly Hills..."
                      value={personalNote}
                      onChange={(e) => setPersonalNote(e.target.value)}
                      className="luxury-input resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full sm:w-auto py-4 text-xs font-semibold tracking-widest disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <LoadingSpinner size="sm" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          Request {displayAmount} Gift Pass
                          <ArrowRight size={14} className="ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ─── Immediate Phone Help ─── */}
        <div className="text-center text-xs text-[#A3A3A3] font-light border-t border-white/[0.08] pt-10">
          <p className="mb-2">Need immediate digital delivery or corporate bulk gifting?</p>
          <a
            href="tel:+13103607535"
            className="inline-flex items-center gap-2 text-white hover:text-[#D4AF37] font-medium transition-colors"
          >
            <Phone size={14} className="text-[#D4AF37]" /> Call Concierge at (310) 360-7535
          </a>
        </div>
      </div>
    </div>
  );
}
