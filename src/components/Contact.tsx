import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, Phone, Clock, MessageSquare, ExternalLink, 
  Copy, Check, Navigation, AlertCircle 
} from "lucide-react";

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopyText = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <section id="contact" className="relative py-24 bg-matte-black/60 border-t border-white/5 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-dark/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
              LOCATIONS, HOURS & TALK
            </span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Find Us & <span className="text-gold-gradient">Connect Today</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Our premium flagship unisex salon is easily accessible in Mayur Vihar, with private parking and safe security guards. Stop by or schedule your consultation.
          </p>
        </div>

        {/* Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Information Cards */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Address Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-xs border border-white/5 relative group hover:border-luxury-gold/30 transition-all duration-300">
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => handleCopyText("1175, Above Aao Ji Aao Restaurant, GD Colony, Mayur Vihar Phase III, Delhi 110096", "address")}
                  className="p-1.5 rounded-full hover:bg-white/5 text-white/40 hover:text-luxury-gold transition-colors"
                  aria-label="Copy Address"
                >
                  {copiedText === "address" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href="https://maps.google.com/?q=1175+GD+Colony+Mayur+Vihar+Phase+III+Delhi"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-full hover:bg-white/5 text-white/40 hover:text-luxury-gold transition-colors"
                  aria-label="Open in Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-start gap-4 text-left">
                <div className="p-3 rounded-xs bg-luxury-gold/10 text-luxury-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-white/45 tracking-widest block mb-1">OUR ADDRESS</span>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">Mayur Vihar Lounge</h3>
                  <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    1175, Above Aao Ji Aao Restaurant,<br />
                    GD Colony, Mayur Vihar Phase III,<br />
                    Delhi 110096, India
                  </p>
                  
                  {copiedText === "address" && (
                    <span className="text-[9px] font-mono text-green-500 mt-2 block animate-pulse">
                      Address copied to clipboard!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Phone & Talk Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-xs border border-white/5 relative group hover:border-luxury-gold/30 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => handleCopyText("09871555303", "phone")}
                  className="p-1.5 rounded-full hover:bg-white/5 text-white/40 hover:text-luxury-gold transition-colors"
                  aria-label="Copy Phone Number"
                >
                  {copiedText === "phone" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-start gap-4 text-left">
                <div className="p-3 rounded-xs bg-luxury-gold/10 text-luxury-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-white/45 tracking-widest block mb-1">TELEPHONE CONCIERGE</span>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">Direct Booking Hotline</h3>
                  <p className="font-sans text-2xl font-display font-extrabold text-gold-gradient tracking-widest my-2 select-all">
                    09871555303
                  </p>
                  <p className="font-sans text-xs text-white/60 font-light leading-relaxed">
                    Tap to dial directly from your smartphone or request a callback.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <a
                      href="tel:09871555303"
                      className="inline-flex justify-center items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-luxury-black bg-gold-gradient rounded-xs hover:brightness-110 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      CALL NOW
                    </a>
                    <a
                      href="https://wa.me/919871555303"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex justify-center items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 hover:bg-white/5 rounded-xs transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-green-500" />
                      WHATSAPP CHAT
                    </a>
                  </div>

                  {copiedText === "phone" && (
                    <span className="text-[9px] font-mono text-green-500 mt-2 block animate-pulse">
                      Phone number copied to clipboard!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-xs border border-white/5 relative group hover:border-luxury-gold/30 transition-all duration-300">
              <div className="flex items-start gap-4 text-left">
                <div className="p-3 rounded-xs bg-luxury-gold/10 text-luxury-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-white/45 tracking-widest block mb-1">WORKING TIMINGS</span>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">Hours of Luxury</h3>
                  <div className="space-y-1 mt-2">
                    <div className="flex justify-between w-48 sm:w-56 font-sans text-xs text-white/70">
                      <span>Mon - Sun:</span>
                      <span className="font-mono text-white font-semibold">9:00 AM – 9:00 PM</span>
                    </div>
                    <div className="flex justify-between w-48 sm:w-56 font-sans text-xs text-white/40">
                      <span>Public Holidays:</span>
                      <span className="font-mono">Open (Call to Confirm)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Maps embed with luxury filter styling */}
          <motion.div
            className="lg:col-span-7 h-full min-h-[380px] relative border border-luxury-gold/20 p-2 bg-matte-black/40 rounded-xs overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* The Google Map iframe has high-end inline styles applying a gorgeous dark-theme filter */}
            <iframe
              title="Dames & Dudes Salon Google Map location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2081545645395!2d77.3292434!3d28.6085521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5cf3c07923%3A0xe5eb6c934f8fb2c0!2sAao%20Ji%20Aao%20Restaurant!5e0!3m2!1sen!2sin!4v1703274291883!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: "2px",
                filter: "grayscale(1) invert(0.92) contrast(1.15) brightness(0.85)",
                width: "100%",
                height: "100%",
                minHeight: "360px"
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Floating marker instructions */}
            <div className="absolute top-4 left-4 glass-panel backdrop-blur-md p-3.5 rounded-xs border border-luxury-gold/30 flex items-center gap-2.5 shadow-md">
              <Navigation className="w-4 h-4 text-luxury-gold animate-bounce" />
              <div className="text-left">
                <span className="font-serif text-xs font-bold text-white tracking-wide block">Mayur Vihar Phase III</span>
                <span className="font-sans text-[9px] text-white/50 tracking-wider">Above Aao Ji Aao Restraunt</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Floating Viewport Widgets: Quick Dial */}
      {/* Floating Call trigger (shown only on mobile) */}
      <a
        id="floating-call-trigger"
        href="tel:09871555303"
        className="fixed bottom-6 left-6 z-100 sm:hidden flex items-center justify-center p-4 bg-gold-gradient text-luxury-black rounded-full shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition-all duration-300 transform scale-100 hover:scale-110 cursor-pointer"
        aria-label="Call salon directly"
      >
        <Phone className="w-5 h-5 text-luxury-black fill-current" />
      </a>
    </section>
  );
}
