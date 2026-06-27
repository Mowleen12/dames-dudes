import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronUp, Instagram, Facebook, Twitter, Phone, 
  MapPin, Clock, MessageSquare, ArrowRight, ShieldCheck 
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="main-footer" className="relative bg-luxury-black text-white pt-20 pb-8 border-t border-white/5 overflow-hidden">
      {/* Subtle top divider spotlight glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-60" />
      <div className="absolute right-10 bottom-10 w-80 h-80 bg-gold-dark/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={handleScrollTop}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-90 p-3.5 rounded-full border border-luxury-gold/50 text-luxury-gold hover:text-luxury-black bg-luxury-black/90 hover:bg-gold-gradient shadow-[0_4px_15px_rgba(0,0,0,0.5)] cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Layout Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16 text-left">
          
          {/* Column 1: Brand details (col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="w-12 h-12" glow={true} />
              <div className="flex flex-col">
                <span className="signboard-font font-bold text-xl text-gold-gradient tracking-wider">
                  DAMES & DUDES
                </span>
                <span className="font-serif text-[10px] text-champagne tracking-[0.25em] uppercase opacity-80">
                  UNISEX SALON
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light">
              Since September 2025, Dames & Dudes Unisex Salon has redefined premium hair contouring, skin therapy, and luxury bridal transformations in Mayur Vihar, Delhi. Experience a benchmark of standard sterile hygiene.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
              <ShieldCheck className="w-4 h-4 text-luxury-gold" />
              <span className="tracking-wide uppercase">100% Sterile & Certified Partner</span>
            </div>
            
            {/* Social media connections */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/dames_and_dudes"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/10 hover:border-luxury-gold text-white/70 hover:text-luxury-gold bg-white/3 hover:bg-luxury-gold/5 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/dames_and_dudes"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/10 hover:border-luxury-gold text-white/70 hover:text-luxury-gold bg-white/3 hover:bg-luxury-gold/5 transition-all duration-300"
                aria-label="Connect on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/dames_and_dudes"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/10 hover:border-luxury-gold text-white/70 hover:text-luxury-gold bg-white/3 hover:bg-luxury-gold/5 transition-all duration-300"
                aria-label="Check Twitter updates"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919871555303"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/10 hover:border-luxury-gold text-white/70 hover:text-luxury-gold bg-white/3 hover:bg-luxury-gold/5 transition-all duration-300"
                aria-label="WhatsApp Hotline"
              >
                <MessageSquare className="w-4 h-4 text-green-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-serif text-sm font-bold tracking-widest text-luxury-gold uppercase border-b border-white/5 pb-2">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "#about")}
                  className="text-white/60 hover:text-luxury-gold transition-colors block"
                >
                  About the Salon
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="text-white/60 hover:text-luxury-gold transition-colors block"
                >
                  Tariff & Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleLinkClick(e, "#gallery")}
                  className="text-white/60 hover:text-luxury-gold transition-colors block"
                >
                  Before & After
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleLinkClick(e, "#why-choose-us")}
                  className="text-white/60 hover:text-luxury-gold transition-colors block"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#experts"
                  onClick={(e) => handleLinkClick(e, "#experts")}
                  className="text-white/60 hover:text-luxury-gold transition-colors block"
                >
                  Stylists & Experts
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="text-white/60 hover:text-luxury-gold transition-colors block"
                >
                  Directions & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services subset (col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-sm font-bold tracking-widest text-luxury-gold uppercase border-b border-white/5 pb-2">
              SIGNATURE DISCIPLINES
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-white/60">
              <li>Couture Haircut & Styling</li>
              <li>High-End Balayage Coloring</li>
              <li>Signature Keratin Treatment</li>
              <li>Caviar Deep Hair Spa</li>
              <li>O3+ Luxury Radiance Facial</li>
              <li>Royal HD Bridal Makeup</li>
              <li>Paraffin Treatment Pedicure</li>
            </ul>
          </div>

          {/* Column 4: Timings & Location details (col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-sm font-bold tracking-widest text-luxury-gold uppercase border-b border-white/5 pb-2">
              SALON HOURS & INFO
            </h4>
            
            <div className="space-y-4 font-sans text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-white/70">
                <Clock className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">OPEN DAILY</span>
                  <span className="text-white/60">9:00 AM – 9:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">GD COLONY LOUNGE</span>
                  <span className="text-white/60">1175, Above Aao Ji Aao Restaurant, Mayur Vihar Phase III, Delhi 110096</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-white/70">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">HOTLINE CALL</span>
                  <span className="text-white/60">09871555303</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Animated Gold Divider bar (featuring custom glowing gem in center) */}
        <div className="relative py-4 flex items-center justify-center">
          <div className="absolute left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-luxury-gold/50" />
          <div className="absolute right-0 w-1/2 h-[1px] bg-gradient-to-l from-transparent to-luxury-gold/50" />
          <div className="w-2.5 h-2.5 rotate-45 border border-luxury-gold bg-luxury-black shadow-[0_0_8px_#D4AF37]" />
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[10px] tracking-widest text-white/40 uppercase">
          <div>
            © 2026 DAMES & DUDES UNISEX SALON · ALL RIGHTS RESERVED
          </div>
          
          <div className="flex items-center gap-4">
            <span>TERMS OF COUTURE</span>
            <span>·</span>
            <span>HYGIENE COMPLIANCE</span>
            <span>·</span>
            <span>DELHI NCT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
