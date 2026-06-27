import React from "react";
import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, Award, Star, Calendar } from "lucide-react";
import { STYLISTS_DATA } from "../data";
import { Stylist } from "../types";

export default function Experts() {
  
  const handleSelectStylist = (stylistName: string) => {
    const appointmentSection = document.querySelector("#appointment");
    if (appointmentSection) {
      // Prefill Message or Stylist preferences if we can
      const msgElem = document.getElementById("appointment-message") as HTMLTextAreaElement;
      if (msgElem) {
        msgElem.value = `I would love to book my session specifically with ${stylistName}.`;
      }
      
      // Scroll to appointment section
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = appointmentSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="experts" className="relative py-24 bg-luxury-black border-t border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold-dark/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
              THE MASTER ARTISTS
            </span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Meet Our <span className="text-gold-gradient">Elite Specialists</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Our award-winning stylists, colorists, and aestheticians are certified by global institutions and bring standard-setting craftsmanship to Delhi.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STYLISTS_DATA.map((stylist, index) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between glass-panel backdrop-blur-md rounded-xs p-6 hover:border-luxury-gold/30 hover:shadow-[0_15px_30px_rgba(212,175,55,0.1)] transition-all duration-500 h-full text-center overflow-hidden"
            >
              <div>
                {/* Circular Portrait with rotating gold border on hover */}
                <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 mb-6">
                  {/* Decorative rotating border */}
                  <div className="absolute -inset-1 rounded-full border border-luxury-gold/20 group-hover:border-luxury-gold group-hover:rotate-45 transition-all duration-700 ease-out" />
                  
                  {/* Glowing aura */}
                  <div className="absolute inset-0 rounded-full bg-luxury-gold/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                  
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-luxury-gold/30 group-hover:border-luxury-gold/60 transition-all duration-500">
                    <img
                      src={stylist.imageUrl}
                      alt={stylist.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Hover social media icons drawer */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-luxury-black/75 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stylist.socials.instagram && (
                      <a
                        href={stylist.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full border border-luxury-gold/30 text-white hover:text-luxury-black hover:bg-gold-gradient transition-all duration-300"
                        aria-label={`${stylist.name}'s Instagram`}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {stylist.socials.facebook && (
                      <a
                        href={stylist.socials.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full border border-luxury-gold/30 text-white hover:text-luxury-black hover:bg-gold-gradient transition-all duration-300"
                        aria-label={`${stylist.name}'s Facebook`}
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                    )}
                    {stylist.socials.twitter && (
                      <a
                        href={stylist.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full border border-luxury-gold/30 text-white hover:text-luxury-black hover:bg-gold-gradient transition-all duration-300"
                        aria-label={`${stylist.name}'s Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-serif text-xl font-bold tracking-wide text-white group-hover:text-gold-gradient transition-colors duration-300 mb-1">
                  {stylist.name}
                </h3>
                <span className="font-sans text-[10px] font-bold text-luxury-gold uppercase tracking-[0.18em] block mb-4">
                  {stylist.role}
                </span>

                {/* Experience & Specialty Badges */}
                <div className="flex flex-col gap-2 bg-white/3 rounded-xs p-3.5 border border-white/5 text-left mb-6">
                  <div className="flex justify-between font-mono text-[9px] text-white/50 tracking-wider">
                    <span>EXPERIENCE:</span>
                    <span className="text-white font-semibold">{stylist.experience}</span>
                  </div>
                  <div className="h-[1px] bg-white/5" />
                  <p className="font-sans text-xs text-white/70 leading-relaxed font-light">
                    <span className="font-semibold text-[9px] block text-white/45 tracking-wider mb-0.5">SPECIALIZATION:</span>
                    {stylist.specialization}
                  </p>
                </div>

                {/* Achievements block */}
                <div className="text-left mb-6">
                  <span className="font-mono text-[9px] font-bold text-white/40 tracking-wider uppercase block mb-2">
                    KEY ACCOMPLISHMENTS:
                  </span>
                  <ul className="space-y-1.5">
                    {stylist.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-white/60 font-light">
                        <Award className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Book With Stylist Button */}
              <button
                onClick={() => handleSelectStylist(stylist.name)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xs border border-luxury-gold/35 text-xs font-semibold text-luxury-gold hover:text-luxury-black hover:bg-gold-gradient tracking-widest uppercase transition-all duration-300 shadow-[0_0_8px_rgba(212,175,55,0.05)] hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book With {stylist.name.split(" ")[0]}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
