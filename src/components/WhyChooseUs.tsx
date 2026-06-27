import React from "react";
import { motion } from "motion/react";
import { 
  Sparkles, Award, Crown, Percent, HeartHandshake, 
  Settings, ShieldCheck, Heart 
} from "lucide-react";

const FEATURES = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Luxury Ambience",
    description: "Immerse yourself in a meticulously crafted matte black and gold lounge with private suites, sensory lounge music, and dim backlighting."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certified Professionals",
    description: "Our artists are trained by L'Oreal and Schwarzkopf Academies, with years of high-end experience in premium Delhi salons."
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Premium Products",
    description: "We use only top-tier organic imported formulations from Estée Lauder, MAC, Schwarzkopf, O3+, and Aveda."
  },
  {
    icon: <Percent className="w-6 h-6" />,
    title: "Affordable Luxury",
    description: "Indulge in a 5-star international salon experience at reasonable, transparent prices tailored directly for our local Delhi guests."
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Personalized Consultation",
    description: "No templates here. Every service begins with a professional analysis of your hair porosity, skin type, and facial contours."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Modern Equipment",
    description: "Equipped with state-of-the-art hair steamers, premium adjustable styling bays, and advanced micro-mist deep spa processors."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Hygienic Environment",
    description: "Your safety is non-negotiable. We maintain a 100% sterile clinic with single-use eco-friendly sheets, disposables, and autoclave-sterilized metals."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Customer Satisfaction",
    description: "Our legacy is built on the love of thousands of happy guests, as reflected by our outstanding 4.9-star average Google rating."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 bg-matte-black/60 border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute left-10 top-1/4 w-80 h-80 bg-gold-dark/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-gold font-medium">
              THE EXCELLENCE STANDARDS
            </span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Why Discerning Clients <span className="text-gold-gradient">Choose Us</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Dames & Dudes combines the high-fashion vision of international salons with the warm, personalized hospitality that Mayur Vihar III deserves.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ 
                scale: 1.03, 
                translateY: -5,
                boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.15)"
              }}
              className="group relative p-6 sm:p-8 rounded-xs glass-panel backdrop-blur-md border border-white/5 hover:border-luxury-gold/30 transition-all duration-500 flex flex-col items-start"
            >
              {/* Card Hover Light Tracking backdrop */}
              <div className="absolute inset-0 bg-radial-at-t from-luxury-gold/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xs" />

              {/* Glowing Icon holder */}
              <div className="p-3.5 rounded-xs border border-luxury-gold/20 text-luxury-gold bg-luxury-gold/5 group-hover:bg-gold-gradient group-hover:text-luxury-black transition-all duration-500 shadow-[0_0_12px_rgba(212,175,55,0.05)] mb-6">
                {feat.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-gold-gradient transition-colors duration-300 mb-3">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light mt-auto">
                {feat.description}
              </p>

              {/* Decorative side tag */}
              <span className="absolute bottom-4 right-4 font-mono text-[9px] font-bold text-white/5 group-hover:text-luxury-gold/20 transition-colors">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
