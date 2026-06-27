import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ArrowRight, Sparkles } from "lucide-react";
import { GALLERY_DATA } from "../data";
import { GalleryItem } from "../types";

const FILTER_TAGS = [
  { id: "all", label: "ALL WORK" },
  { id: "hair", label: "HAIRCUTS" },
  { id: "color", label: "COLOR CONTOURS" },
  { id: "bridal", label: "BRIDAL GLOW" },
  { id: "styling", label: "TREATMENTS" },
  { id: "men", label: "GENTLEMEN" }
];

export default function BeforeAfter() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [showBeforeInLightbox, setShowBeforeInLightbox] = useState(false);

  const filteredItems = activeFilter === "all"
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 bg-luxury-black border-t border-white/5 overflow-hidden">
      <div className="absolute right-0 bottom-10 w-96 h-96 bg-gold-dark/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
              THE PRECISION GALLERY
            </span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Visual <span className="text-gold-gradient">Before & After</span> Transformations
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Witness the breathtaking precision and artistic craftsmanship of Delhi's premier unisex stylists. Filter below to inspect our work.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {FILTER_TAGS.map(tag => (
            <button
              key={tag.id}
              onClick={() => setActiveFilter(tag.id)}
              className={`px-4 sm:px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-xs border-b-2 ${
                activeFilter === tag.id
                  ? "border-luxury-gold text-luxury-gold bg-luxury-gold/5"
                  : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => {
                  setActiveLightbox(item);
                  setShowBeforeInLightbox(false);
                }}
                className="group relative cursor-pointer overflow-hidden border border-white/5 hover:border-luxury-gold/30 rounded-xs bg-matte-black aspect-4/3"
              >
                {/* Main image shown (After version) */}
                <img
                  src={item.afterUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* "Before" bubble thumbnail in the corner */}
                <div className="absolute top-4 left-4 z-10 p-1 bg-luxury-black/80 rounded-full border border-luxury-gold/40 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={item.beforeUrl}
                      alt="Before thumbnail"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="font-mono text-[8px] font-extrabold text-white tracking-widest">BEFORE</span>
                    </div>
                  </div>
                </div>

                {/* Hover overlay and zoom */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-mono text-[9px] text-luxury-gold uppercase tracking-widest mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {item.category.toUpperCase()} TRANSFORMATION
                  </span>
                  
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide mb-3 leading-tight">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-[10px] font-bold text-white/90 tracking-widest uppercase">
                    <span>VIEW DETAILS</span>
                    <Maximize2 className="w-3.5 h-3.5 text-luxury-gold" />
                  </div>
                </div>
                
                {/* Visual glow on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-luxury-gold/30 transition-all duration-500 pointer-events-none rounded-xs" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Luxury Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            id="gallery-lightbox"
            className="fixed inset-0 z-100 bg-luxury-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Click backdrop to exit */}
            <div className="absolute inset-0" onClick={() => setActiveLightbox(null)} />

            {/* Lightbox Container */}
            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-5xl glass-panel-heavy p-6 sm:p-8 rounded-xs z-10 border border-luxury-gold/25 shadow-2xl flex flex-col gap-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-luxury-gold bg-white/5 hover:bg-white/10 rounded-full transition-colors duration-300"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Info */}
              <div>
                <span className="font-mono text-[9px] text-luxury-gold tracking-widest uppercase block mb-1">
                  TRANSFORMATION PORTFOLIO
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {activeLightbox.title}
                </h3>
              </div>

              {/* Toggle controls / Compare instructions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/5 pb-4">
                <span className="font-sans text-xs text-white/50 tracking-wide font-light">
                  Compare our master styling outcomes using the interactive slider toggler below.
                </span>

                {/* Compare Toggles */}
                <div className="flex rounded-xs border border-white/10 p-1 bg-luxury-black shrink-0">
                  <button
                    onClick={() => setShowBeforeInLightbox(true)}
                    className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-xs ${
                      showBeforeInLightbox
                        ? "bg-gold-gradient text-luxury-black font-extrabold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    BEFORE STATE
                  </button>
                  <button
                    onClick={() => setShowBeforeInLightbox(false)}
                    className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-xs ${
                      !showBeforeInLightbox
                        ? "bg-gold-gradient text-luxury-black font-extrabold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    AFTER TRANSFORMATION
                  </button>
                </div>
              </div>

              {/* Image Comparison stage */}
              <div className="relative aspect-16/10 sm:aspect-16/9 bg-black rounded-xs overflow-hidden max-h-[50vh] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {showBeforeInLightbox ? (
                    <motion.img
                      key="before"
                      src={activeLightbox.beforeUrl}
                      alt="Before state image"
                      className="w-full h-full object-cover rounded-xs"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.35 }}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <motion.img
                      key="after"
                      src={activeLightbox.afterUrl}
                      alt="After state image"
                      className="w-full h-full object-cover rounded-xs"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.35 }}
                      referrerPolicy="no-referrer"
                    />
                  )}
                </AnimatePresence>
                
                {/* Before/After badges in the stage corner */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-luxury-black/85 rounded-xs border border-luxury-gold/30">
                  <span className="font-mono text-[10px] tracking-widest font-bold text-luxury-gold">
                    {showBeforeInLightbox ? "BEFORE CUSTOMER STATE" : "AFTER LUXURY TRANSFORM"}
                  </span>
                </div>
              </div>

              {/* Back to salon button */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="px-6 py-3 rounded-xs border border-white/10 hover:border-luxury-gold/50 text-white hover:text-luxury-gold text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  Return to Gallery
                </button>
                <button
                  onClick={() => {
                    setActiveLightbox(null);
                    const appointmentSection = document.getElementById("appointment");
                    if (appointmentSection) {
                      appointmentSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-6 py-3 rounded-xs bg-gold-gradient text-luxury-black text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all duration-300 flex items-center gap-2"
                >
                  Book Makeover Look
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
