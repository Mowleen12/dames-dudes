import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import WhyChooseUs from "./components/WhyChooseUs";
import Experts from "./components/Experts";
import Offers from "./components/Offers";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import InteriorShowcase from "./components/InteriorShowcase";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* 1. Page Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* 2. Main Luxury Stage */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-luxury-black text-white relative min-h-screen selection:bg-luxury-gold selection:text-luxury-black"
          >
            {/* Fine-grained Noise texture over the entire site for an expensive filmic look */}
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-15" />

            {/* Hardware Accelerated Mouse Spotlights & Cursor */}
            <CustomCursor />

            {/* Sticky Floating Transparent Navbar */}
            <Navbar />

            {/* Main Section Flows */}
            <main>
              {/* Cinematic Ken-Burns Hero Row with Statistics cards */}
              <Hero />

              {/* Split Layout Editorial About */}
              <About />

              {/* Grid Layout Categorized Tariff & Menu */}
              <Services />

              {/* Before & After Interactive Lightbox Portfolio */}
              <BeforeAfter />

              {/* 3D-Perspective Hover Feature Cards */}
              <WhyChooseUs />

              {/* Rotating Interior Showcase Carousel */}
              <InteriorShowcase />

              {/* Stylist profile blocks with pre-booking select hooks */}
              <Experts />

              {/* Promo Offers with gold ribbons and copyable clipboards */}
              <Offers />

              {/* Verify Google Reviews slider */}
              <Testimonials />

              {/* VIP Reservation Scheduler form with booking slot feedback overlay */}
              <Appointment />

              {/* Accordion FAQ block */}
              <FAQ />

              {/* Grayscale styled Iframe Map, Call & WhatsApp float triggers */}
              <Contact />
            </main>

            {/* Luxury Footer with back to top anchor */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
