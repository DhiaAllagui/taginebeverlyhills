"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, Sparkles } from "lucide-react";
import { InstagramIcon, FacebookIcon, YelpIcon } from "../components/SocialIcons";
import { submitInquiry } from "../lib/form-actions";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitInquiry({
        formType: "General Contact Inquiry",
        name,
        email,
        subject,
        message,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Contact submission error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#141514] text-[#EFECE6] pt-44 sm:pt-48 md:pt-56 pb-20 sm:pb-28 lg:pb-36 overflow-hidden">
      {/* Full Page Background Texture — Moroccan Carved Plaster & Zellij */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/pagesbgnothome.png"
          alt="Tagine Moroccan pattern background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#141514]/75" />
      </div>

      {/* Background Hero Banner — Authentic Moroccan Pattern */}
      <div className="absolute top-0 inset-x-0 h-[640px] z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/pagesbgnothome.png"
          alt="Tagine Beverly Hills Moroccan pattern hero ambiance"
          fill
          className="object-cover object-center opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141514]/40 via-[#141514]/70 to-[#141514]" />
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow-top pointer-events-none" />

      <div className="site-container max-w-5xl relative z-10 flex flex-col gap-16 sm:gap-20 lg:gap-24">
        {/* ─── Header (Authentic Copy) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#94BA26]/30 mb-6">
            <MapPin size={13} className="text-[#94BA26]" />
            <span className="text-[#94BA26] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              Beverly Hills Sanctuary
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Get in <span className="text-[#94BA26] italic">Touch</span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-[#94BA26] text-lg my-5 select-none">
            <span className="h-[1px] w-14 bg-gradient-to-l from-[#94BA26]/60 to-transparent" />
            <span>✻</span>
            <span className="h-[1px] w-14 bg-gradient-to-r from-[#94BA26]/60 to-transparent" />
          </div>

          <p className="text-[#EFECE6]/90 text-sm sm:text-base font-light leading-relaxed">
            If you have questions or comments, please get a hold of us in whichever way is most convenient. Ask away. We are here to help.
          </p>
        </motion.div>

        {/* ─── Info Cards with Generous Spacing ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="luxury-card p-6 sm:p-8 flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#94BA26]/10 border border-[#94BA26]/30 flex items-center justify-center text-[#94BA26] mb-2">
              <MapPin size={20} />
            </div>
            <h3 className="text-xs uppercase tracking-widest text-[#94BA26] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              Our Address
            </h3>
            <p className="text-xs sm:text-sm text-[#EFECE6] leading-relaxed font-light">
              132 N Robertson Blvd<br />
              Beverly Hills, CA 90211
            </p>
            <a
              href="https://maps.google.com/?q=132+N+Robertson+Blvd+Beverly+Hills+CA+90211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#94BA26] hover:underline block pt-2 font-medium"
            >
              Get Directions →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="luxury-card p-6 sm:p-8 flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#94BA26]/10 border border-[#94BA26]/30 flex items-center justify-center text-[#94BA26] mb-2">
              <Clock size={20} />
            </div>
            <h3 className="text-xs uppercase tracking-widest text-[#94BA26] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              Dining Hours
            </h3>
            <div className="text-xs sm:text-sm text-[#EFECE6] font-light flex flex-col gap-2">
              <p>Mon – Thu: 12:00 PM – 10:00 PM</p>
              <p>Fri – Sat: 12:00 PM – 11:00 PM</p>
              <p>Sunday: 12:00 PM – 9:00 PM</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="luxury-card p-6 sm:p-8 flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#94BA26]/10 border border-[#94BA26]/30 flex items-center justify-center text-[#94BA26] mb-2">
              <Phone size={20} />
            </div>
            <h3 className="text-xs uppercase tracking-widest text-[#94BA26] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              Direct Line
            </h3>
            <div className="text-xs sm:text-sm text-[#EFECE6] flex flex-col gap-2">
              <a href="tel:+13103607535" className="hover:text-[#94BA26] block font-medium">
                (310) 360-7535
              </a>
              <a href="mailto:Dino@taginebeverlyhills.com" className="hover:text-[#94BA26] block">
                Dino@taginebeverlyhills.com
              </a>
              <p className="text-[#9C9B94] text-xs pt-1">Valet parking on arrival</p>
            </div>
          </motion.div>
        </div>

        {/* ─── Map & Message Form ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 luxury-card overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[480px] shadow-2xl min-h-[260px] relative"
          >
            <iframe
              title="Tagine Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.9!2d-118.381!3d34.077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s132+N+Robertson+Blvd%2C+Beverly+Hills%2C+CA+90211!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.9)" }}
            />

            {/* Block map interactions */}
            <div className="absolute inset-0 z-[5]" aria-hidden="true" />

            {/* Restaurant marker label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center pointer-events-none">
              <div className="px-3 py-1.5 rounded-lg bg-[#141514]/90 border border-[#94BA26]/50 text-[#EFECE6] text-[10px] uppercase tracking-wider font-medium whitespace-nowrap shadow-lg backdrop-blur-sm">
                Tagine Beverly Hills
              </div>
              <div className="w-0.5 h-4 bg-[#94BA26]" />
              <div className="w-3 h-3 rounded-full bg-[#94BA26] border-2 border-[#141514] shadow-[0_0_10px_rgba(148,186,38,0.8)]" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 luxury-card p-6 sm:p-10 lg:p-16 shadow-2xl"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Send a Concierge Note
            </h3>
            <p className="text-xs sm:text-sm text-[#9C9B94] font-light mb-8">
              Inquiries regarding private dinners, table requests, press, or wine inquiries.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8 sm:py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#94BA26]/15 border border-[#94BA26] flex items-center justify-center text-[#94BA26] mb-5 shadow-[0_0_20px_rgba(148,186,38,0.3)]">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl text-white font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Message Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9C9B94] mb-8">Our hospitality team will respond to {email} promptly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-xs px-8 py-3">
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="luxury-input"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="luxury-input"
                    />
                  </div>

                  <div>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="luxury-input"
                    >
                      <option value="General Inquiry">General Hospitality Inquiry</option>
                      <option value="Private Dining">Private Dining / Buyout Request</option>
                      <option value="Press / Media">Press & Media Inquiry</option>
                      <option value="Sommelier / Wine">Sommelier & Wine Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      rows={5}
                      required
                      placeholder="How may we assist you?..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="luxury-input resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full py-4 text-xs font-semibold tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <LoadingSpinner size="sm" />
                          Sending...
                        </span>
                      ) : (
                        "Send Concierge Message"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ─── Follow Us (Official Social Channels) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="luxury-card p-6 sm:p-10 text-center"
        >
          <span className="text-[#94BA26] text-xs uppercase tracking-[0.3em] font-semibold block mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
            Connect
          </span>
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Follow Us
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/tagine_beverlyhills/?hl=eg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] border border-white/15 text-xs text-white hover:border-[#94BA26] hover:bg-white/[0.06] transition-all tracking-wider font-medium"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/chebenameur/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] border border-white/15 text-xs text-white hover:border-[#94BA26] hover:bg-white/[0.06] transition-all tracking-wider font-medium"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.yelp.com/biz/tagine-beverly-hills-beverly-hills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] border border-white/15 text-xs text-white hover:border-[#94BA26] hover:bg-white/[0.06] transition-all tracking-wider font-medium"
            >
              <YelpIcon className="w-4 h-4" />
              <span>Yelp Reviews</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
