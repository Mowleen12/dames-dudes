import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Award, Scissors, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-luxury-black overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold-dark/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual Grid */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            {/* Glow backing */}
            <div className="absolute inset-0 bg-luxury-gold/10 blur-xl rounded-2xl transform rotate-3" />

            {/* Main Picture Frame */}
            <div className="relative border border-luxury-gold/25 p-3 bg-matte-black/40 backdrop-blur-md rounded-xs">
              <img
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1000&q=80"
                alt="Dames & Dudes Salon Ambience"
                className="w-full h-[380px] sm:h-[480px] object-cover rounded-xs"
                referrerPolicy="no-referrer"
              />
              {/* Floating Award Label inside image */}
              <div className="absolute bottom-8 right-8 glass-panel backdrop-blur-md p-4 flex items-center gap-3 border border-luxury-gold/35 animate-float">
                <div className="bg-gold-gradient p-2.5 rounded-full text-luxury-black">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-sm text-gold-gradient tracking-wider">L'ORÉAL</span>
                  <span className="font-sans text-[10px] text-white/70 uppercase tracking-widest">Certified Partner</span>
                </div>
              </div>
            </div>

            {/* Decorative geometrical line borders */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-luxury-gold opacity-60" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-luxury-gold opacity-60" />
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Sub-header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-luxury-gold" />
              <span className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
                THE LEGACY OF PRECISION
              </span>
            </div>

            {/* Header */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Welcome to <span className="text-gold-gradient signboard-font">Dames & Dudes</span>
            </h2>

            {/* Editorial Description */}
            <div className="space-y-6 font-sans text-white/80 leading-relaxed text-sm sm:text-base font-light">
              <p className="font-medium text-white">
                Where beauty meets clinical precision. Dames & Dudes Unisex Salon has been a beacon of luxury styling in Mayur Vihar Phase-3, Delhi.
              </p>
              <p>
                Our team of experienced hair and skin professionals specializes in premium haircuts, modern color melting, revitalizing hair spas, bespoke bridal makeups, clean grooming, luxury facials, and advanced skincare transformations. We operate in a highly sterile, ultra-hygienic, and beautifully comforting black and gold environment.
              </p>
              <p>
                Guided by the vision of Salon Director Rohit, we treat hair and skin not as mere daily maintenance, but as high fashion. Every client who sits in our chairs receives a personalized geometric analysis to pair their haircut and coloring precisely to their facial bone structure.
              </p>
            </div>

            {/* List of high-end features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-xs uppercase text-white tracking-widest">Premium Import Products</span>
                  <span className="text-xs text-white/60">L'Oreal, Schwarzkopf & O3+</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Scissors className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-xs uppercase text-white tracking-widest">Master Sculpting</span>
                  <span className="text-xs text-white/60">Led by Director Rohit</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-xs uppercase text-white tracking-widest">Sterile Hygiene Care</span>
                  <span className="text-xs text-white/60">Single-use disposables, UV sterilized tools</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-xs uppercase text-white tracking-widest">Awarded Delhi Lounge</span>
                  <span className="text-xs text-white/60">Rated 4.9⭐ by thousands</span>
                </div>
              </div>
            </div>

            {/* Signature Area */}
            <div className="flex items-center gap-6 mt-4 border-t border-white/5 pt-6">
              <div className="flex flex-col">
                <span className="font-serif italic text-3xl text-luxury-gold tracking-wider select-none font-medium">
                  Rohit
                </span>
                <span className="font-serif text-[10px] uppercase text-white/50 tracking-[0.2em] mt-1">
                  Rohit · Founder & Director
                </span>
              </div>
              
              {/* Vertical elegant stamp */}
              <div className="h-10 w-[1px] bg-white/10" />
              <div className="border border-luxury-gold/30 px-3 py-1 text-[8px] font-mono text-champagne tracking-[0.25em] uppercase">
                Est. Sept 2025
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
