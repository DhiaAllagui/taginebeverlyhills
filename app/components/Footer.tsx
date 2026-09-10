import Link from "next/link";
import TagineLogo from "./TagineLogo";
import { Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, YelpIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#D4AF37]/15 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 mt-auto relative">
      {/* Subtle warm amber/gold atmospheric floor glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent pointer-events-none" />

      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 items-start pb-12 sm:pb-16 border-b border-white/[0.08]">
          {/* Logo, Address & Socials */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <TagineLogo size="sm" variant="white" />
            <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
              132 N Robertson Blvd<br />
              Beverly Hills, CA 90211
            </p>
            <div className="flex flex-col gap-2.5 text-xs text-[#EDE8DF]">
              <a href="tel:+13103607535" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                <Phone size={13} className="text-[#D4AF37]" />
                <span>(310) 360-7535</span>
              </a>
              <a href="mailto:Dino@taginebeverlyhills.com" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                <Mail size={13} className="text-[#D4AF37]" />
                <span>Dino@taginebeverlyhills.com</span>
              </a>
            </div>

            {/* Social Follow Us */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/tagine_beverlyhills/?hl=eg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tagine Instagram"
                  className="w-9 h-9 rounded-full bg-[#161413] border border-[#D4AF37]/25 flex items-center justify-center p-2 hover:border-[#D4AF37] hover:bg-[#221E1D] transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/chebenameur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tagine Facebook"
                  className="w-9 h-9 rounded-full bg-[#161413] border border-[#D4AF37]/25 flex items-center justify-center p-2 hover:border-[#D4AF37] hover:bg-[#221E1D] transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.yelp.com/biz/tagine-beverly-hills-beverly-hills"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tagine Yelp Reviews"
                  className="w-9 h-9 rounded-full bg-[#161413] border border-[#D4AF37]/25 flex items-center justify-center p-2 hover:border-[#D4AF37] hover:bg-[#221E1D] transition-all"
                >
                  <YelpIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Dinner Service Hours */}
          <div className="flex flex-col gap-4 font-light">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              Dinner Service
            </h4>
            <div className="flex flex-col gap-3 text-xs text-[#A3A3A3]">
              <div>
                <span className="text-white block font-medium">Monday – Thursday</span>
                12:00 PM – 10:00 PM
              </div>
              <div>
                <span className="text-white block font-medium">Friday – Saturday</span>
                12:00 PM – 11:00 PM
              </div>
              <div>
                <span className="text-white block font-medium">Sunday</span>
                12:00 PM – 9:00 PM
              </div>
            </div>
          </div>

          {/* Navigation & Booking */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
              The Experience
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs text-[#A3A3A3]">
              <Link href="/menu" className="hover:text-[#D4AF37] transition-colors">Menu & Wine</Link>
              <Link href="/reservations" className="hover:text-[#D4AF37] transition-colors">Reservations</Link>
              <Link href="/chef-ben" className="hover:text-[#D4AF37] transition-colors">Chef Ben</Link>
              <Link href="/catering" className="hover:text-[#D4AF37] transition-colors">Private Dining</Link>
              <Link href="/gift-cards" className="hover:text-[#D4AF37] transition-colors">Gift Cards</Link>
              <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
            </div>
            <div className="pt-3">
              <Link href="/reservations" className="btn-gold text-[10px] px-6 py-2.5 tracking-[0.2em]">
                Book a Table
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#737373] gap-3 sm:gap-4 font-light text-center sm:text-left">
          <p>© {new Date().getFullYear()} Tagine Beverly Hills. All rights reserved.</p>
          <p className="tracking-wider uppercase text-[10px] text-[#A3A3A3]" style={{ fontFamily: "'Cinzel', serif" }}>
            Beverly Hills Fine Dining Lounge · 132 N Robertson Blvd
          </p>
        </div>
      </div>
    </footer>
  );
}
