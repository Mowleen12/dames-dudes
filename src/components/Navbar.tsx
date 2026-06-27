import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Calendar, MessageSquare } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Shrink navbar logic
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress logic
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Experts", href: "#experts" },
    { name: "Offers", href: "#offers" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
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
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-90 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-transparent backdrop-blur-md border-b border-luxury-gold/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Title */}
            <a href="#" className="flex items-center gap-3 group shrink-0">
              <Logo className="w-10 h-10 sm:w-12 sm:h-12" glow={!scrolled} />
              <div className="flex flex-col">
                <span className="signboard-font font-bold text-lg sm:text-xl text-gold-gradient tracking-[0.12em] group-hover:brightness-125 transition-all">
                  DAMES & DUDES
                </span>
                <span className="font-serif text-[9px] text-champagne tracking-[0.3em] uppercase opacity-80">
                  UNISEX SALON
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-[11px] xl:text-xs uppercase font-medium tracking-[0.12em] xl:tracking-[0.18em] text-white/85 hover:text-luxury-gold transition-colors duration-300 relative py-1.5 group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button and Mobile Menu Toggle */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <a
                href="#appointment"
                onClick={(e) => handleLinkClick(e, "#appointment")}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xs border border-luxury-gold text-xs font-semibold tracking-widest uppercase text-luxury-gold hover:text-luxury-black bg-transparent hover:bg-gold-gradient shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all duration-500 scale-100 hover:scale-[1.03] active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Session
              </a>

              {/* Mobile Menu Icon */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-luxury-gold border border-white/10 hover:border-luxury-gold/50 rounded-xs bg-white/5 transition-all duration-300 lg:hidden"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[1px] bg-gold-gradient transition-all duration-75" style={{ width: `${scrollProgress}%` }} />
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            className="fixed inset-0 z-80 bg-luxury-black/98 lg:hidden flex flex-col justify-center px-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Background geometric flare overlay */}
            <div className="absolute inset-0 bg-radial-at-c from-gold-dark/10 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-noise pointer-events-none" />

            <div className="flex flex-col items-center gap-8 text-center relative z-10 my-auto">
              {/* Glowing Icon */}
              <Logo className="w-16 h-16 mb-4" glow={true} />

              {/* Mobile Links */}
              <div className="flex flex-col gap-5 sm:gap-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-display text-2xl tracking-[0.2em] text-white hover:text-luxury-gold transition-colors block uppercase"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Action buttons inside mobile drawer */}
              <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
                <a
                  href="#appointment"
                  onClick={(e) => handleLinkClick(e, "#appointment")}
                  className="inline-flex justify-center items-center gap-2 w-full py-4 rounded-xs bg-gold-gradient text-xs font-bold text-luxury-black tracking-widest uppercase hover:brightness-110 shadow-[0_4px_15px_rgba(212,175,55,0.25)] transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  BOOK APPOINTMENT
                </a>
                <a
                  href="https://wa.me/919871555303"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center gap-2 w-full py-3.5 rounded-xs border border-white/15 text-xs font-semibold text-white/90 tracking-widest uppercase hover:bg-white/5 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-green-500" />
                  WHATSAPP CHAT
                </a>
              </div>
            </div>

            {/* Mobile Footer Area */}
            <div className="text-center pb-10 text-[10px] font-mono text-white/40 tracking-[0.15em] relative z-10">
              © 2026 DAMES & DUDES SALON · MAYUR VIHAR III, DELHI
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
