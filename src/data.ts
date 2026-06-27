import { Service, Stylist, Offer, Review, FAQItem, GalleryItem } from "./types";

export const SERVICES_DATA: Service[] = [
  // Haircut & Styling
  {
    id: "1",
    name: "Couture Haircut",
    category: "hair",
    price: "₹800",
    duration: "45 mins",
    description: "Personalized luxury scissor haircut including signature hair wash, scalp massage, and expert blow-dry style.",
    iconName: "Scissors"
  },
  {
    id: "2",
    name: "Luxury Blow-Dry & Styling",
    category: "hair",
    price: "₹600",
    duration: "30 mins",
    description: "Shine-inducing premium wash followed by volume blowouts, red-carpet waves, or sleek geometric straightening.",
    iconName: "Wind"
  },
  {
    id: "3",
    name: "Precision Beard Grooming",
    category: "grooming",
    price: "₹350",
    duration: "25 mins",
    description: "Detailed beard shaping, hot towel charcoal treatment, premium beard oil application, and sharp razor finish.",
    iconName: "Sparkles"
  },
  // Coloring & Treatment
  {
    id: "4",
    name: "High-End Balayage & Ombre",
    category: "hair",
    price: "₹4,500+",
    duration: "150 mins",
    description: "Hand-painted premium color melting that creates sun-kissed, dimensional gradients styled by our master colorists.",
    iconName: "Palette"
  },
  {
    id: "5",
    name: "Keratin Treatment",
    category: "hair",
    price: "₹5,000+",
    duration: "180 mins",
    description: "Premium formaldehyde-free Brazilian protein infusion that eliminates frizz, adds mirror-like shine, and strengthens hair.",
    iconName: "Zap"
  },
  {
    id: "6",
    name: "Signature Hair Smoothening",
    category: "hair",
    price: "₹4,000+",
    duration: "180 mins",
    description: "Advanced deep-hydration straightening system that delivers perfectly sleek, smooth, and easily manageable tresses.",
    iconName: "Layers"
  },
  {
    id: "7",
    name: "Caviar Deep Restorative Hair Spa",
    category: "hair",
    price: "₹1,800",
    duration: "60 mins",
    description: "L'Oreal Professional Mythic Oil or luxury caviar cell repair spa featuring hot steam treatment and sensory scalp massage.",
    iconName: "Flame"
  },
  // Skincare & Facials
  {
    id: "8",
    name: "O3+ Luxury Radiance Facial",
    category: "skincare",
    price: "₹2,500",
    duration: "75 mins",
    description: "Award-winning brightening oxygenation facial that deeply purifies pores, reduces hyperpigmentation, and boosts collagen.",
    iconName: "Flower"
  },
  {
    id: "9",
    name: "Detoxifying Charcoal Clean-Up",
    category: "skincare",
    price: "₹1,200",
    duration: "40 mins",
    description: "Revitalizing botanical exfoliation with blackhead removal and refreshing gold gel mask for a crisp, glowing face.",
    iconName: "Activity"
  },
  {
    id: "10",
    name: "Gold Threading & Waxing",
    category: "skincare",
    price: "₹400+",
    duration: "20 mins",
    description: "Organic pain-reducing Rica wax treatment and precise geometric organic cotton eyebrow contouring.",
    iconName: "Heart"
  },
  // Makeup
  {
    id: "11",
    name: "Royal HD Bridal Makeup",
    category: "makeup",
    price: "₹15,000+",
    duration: "240 mins",
    description: "The ultimate bridal beauty experience including premium HD contouring, luxury lashes, hair setting, and drape styling.",
    iconName: "Crown"
  },
  {
    id: "12",
    name: "Red Carpet Party Makeup",
    category: "makeup",
    price: "₹3,500",
    duration: "90 mins",
    description: "Luminous, photographic-grade professional makeup customized for cocktail parties, engagements, or galas.",
    iconName: "Sparkle"
  },
  // Nails & Grooming
  {
    id: "13",
    name: "Paraffin Therapy Manicure",
    category: "nails",
    price: "₹800",
    duration: "45 mins",
    description: "Nourishing warm paraffin wax soak, nail shaping, cuticle therapy, dead skin buffing, and luxurious massage.",
    iconName: "Smile"
  },
  {
    id: "14",
    name: "Pedicure with Sea Salt Scrub",
    category: "nails",
    price: "₹1,000",
    duration: "50 mins",
    description: "Invigorating volcanic mud pack, bubbling foot spa, mint sea-salt exfoliation, and high-gloss gel polish finishing.",
    iconName: "Footprints"
  },
  {
    id: "15",
    name: "Aroma Stress-Relief Spa Treatments",
    category: "spa",
    price: "₹2,200",
    duration: "60 mins",
    description: "Soothing aromatherapy neck, back, and shoulder pressure-point therapy using organic essential oils.",
    iconName: "Coffee"
  }
];

export const STYLISTS_DATA: Stylist[] = [
  {
    id: "s1",
    name: "Rohit Kumar",
    role: "Salon Director & Master Hair Sculptor",
    experience: "12+ Years",
    specialization: "Couture Haircuts, Creative Styling & High-End Makeovers",
    achievements: ["Voted Best Delhi Hair Stylist 2024", "Looks Salon Alumnus", "L'Oreal Certified Art Director"],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80",
    socials: {
      instagram: "https://instagram.com/dames_and_dudes",
      facebook: "https://facebook.com/dames_and_dudes"
    }
  },
  {
    id: "s2",
    name: "Priya Sen",
    role: "Senior Bridal & HD Makeup Alchemist",
    experience: "8+ Years",
    specialization: "Airbrush Bridal Makeup, Skin Radiance Artistry",
    achievements: ["MAC Certified Senior Artist", "Worked with Top Delhi Models", "Bridal Specialist Portfolio Award"],
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=600&q=80",
    socials: {
      instagram: "https://instagram.com/dames_and_dudes"
    }
  },
  {
    id: "s3",
    name: "Rohit Singh",
    role: "Creative Color Specialist & Chemical Expert",
    experience: "7 Years",
    specialization: "Balayage, Metallic Blonding, Keratin & Smoothening Infusions",
    achievements: ["Schwarzkopf Color Trophy Finalist", "Advanced Hair Spa Certified"],
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=600&q=80",
    socials: {
      instagram: "https://instagram.com/dames_and_dudes",
      twitter: "https://twitter.com/dames_and_dudes"
    }
  },
  {
    id: "s4",
    name: "Elena Rostova",
    role: "Elite Skincare Therapist & Aesthetician",
    experience: "10 Years",
    specialization: "O3+ Face Sculpting, Advanced Facials & Organic Skincare",
    achievements: ["Cidesco Switzerland Diploma Holder", "Acne & Pigmentation Therapy Specialist"],
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=600&q=80",
    socials: {
      facebook: "https://facebook.com/dames_and_dudes"
    }
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Dimensional Blonde Balayage Transformation",
    category: "color",
    beforeUrl: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=500&q=80",
    afterUrl: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "g2",
    title: "Elite Razor Fade & Beard Sculpting",
    category: "men",
    beforeUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=500&q=80",
    afterUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "g3",
    title: "HD Royal Bridal Glow & Draping",
    category: "bridal",
    beforeUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
    afterUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "g4",
    title: "Couture Pixie Scissor Cut",
    category: "hair",
    beforeUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=500&q=80",
    afterUrl: "https://images.unsplash.com/photo-1605497746444-ac9dbd324ce8?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "g5",
    title: "Smooth Keratin Restorative Treatment",
    category: "styling",
    beforeUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80",
    afterUrl: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "g6",
    title: "Vibrant Copper Sunset Melt",
    category: "color",
    beforeUrl: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=500&q=80",
    afterUrl: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=500&q=80"
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "r1",
    name: "Kunal Sharma",
    rating: 5,
    text: "Personally nice staff, great work and luxury environment.",
    role: "Verified Google Customer",
    date: "2 months ago"
  },
  {
    id: "r2",
    name: "Yash Sharma",
    rating: 5,
    text: "The place is well maintained, hygienic and has a very welcoming vibe. Truly stands out as the finest premium salon in Mayur Vihar.",
    role: "Verified Google Customer",
    date: "1 month ago"
  },
  {
    id: "r3",
    name: "Vineeta",
    rating: 5,
    text: "Clean ambience, great service, and lovely results. Elena and Rohit took amazing care of my hair spa and O3+ facial treatment.",
    role: "Verified Google Customer",
    date: "3 weeks ago"
  },
  {
    id: "r4",
    name: "Meenakshi Joshi",
    rating: 5,
    text: "I booked their Royal HD Bridal package and the results were stunning! All my wedding photos are absolute perfection. Highly recommended!",
    role: "Verified Google Customer",
    date: "4 days ago"
  },
  {
    id: "r5",
    name: "Aditya Roy",
    rating: 5,
    text: "Been coming to Rohit since they opened in September. The precision haircut and beard contouring is consistent and superior. Outstanding black and gold ambience.",
    role: "Verified Google Customer",
    date: "1 week ago"
  }
];

export const OFFERS_DATA: Offer[] = [
  {
    id: "o1",
    title: "Caviar Gold Hair Spa Offer",
    tagline: "Unwind with luxurious scalp repair therapy and complimentary trimming.",
    discount: "Flat 25% OFF",
    terms: "Applicable on weekdays (Mon-Thu). Cannot be clubbed with other promos.",
    code: "SPA25"
  },
  {
    id: "o2",
    title: "HD Royal Bridal Packages",
    tagline: "Pre-bridal glowing rituals + elite drapes, makeup & premium hair styling.",
    discount: "Save up to ₹3,500",
    terms: "Requires advanced booking deposit. Offers customizable skincare trials.",
    code: "BRIDEGLOW"
  },
  {
    id: "o3",
    title: "Signature Festive Makeover Trio",
    tagline: "Precision Haircut + Organic Facials + Premium Nourishing Beard Shaping.",
    discount: "Combo at just ₹1,999",
    terms: "Valued at ₹3,200. Limited time festive offer for both ladies & gentlemen.",
    code: "FESTIVE99"
  },
  {
    id: "o4",
    title: "D&D Platinum Membership Plan",
    tagline: "Unlimited trims, direct fast-track styling & 15% flat off all individual products.",
    discount: "Annual VIP Card",
    terms: "Subscribed annually. Direct priority booking with Salon Director Rohit.",
    code: "PLATINUM_VIP"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq1",
    question: "Do you recommend booking an appointment beforehand?",
    answer: "To ensure you receive our signature luxury focus and avoid waiting, we strongly recommend booking your session online or over WhatsApp. Walk-ins are accommodated based on current availability."
  },
  {
    id: "faq2",
    question: "Where is Dames & Dudes Salon located?",
    answer: "Our flagship lounge is located at 1175, First Floor, Above Aao Ji Aao Restaurant, GD Colony, Mayur Vihar Phase III, Delhi 110096. It features comfortable premium parking and an outstanding gold exterior storefront."
  },
  {
    id: "faq3",
    question: "What premium hair and skincare brands do you use?",
    answer: "We never compromise on health or results. We exclusively use international premium brands including L'Oreal Professional, Schwarzkopf Professional, O3+, MAC, Estée Lauder, and Aveda."
  },
  {
    id: "faq4",
    question: "Can I choose my specific stylist when booking?",
    answer: "Yes, absolutely! You can explicitly select Salon Director Rohit Kumar or any of our specific specialists in the online booking form or when calling us directly."
  },
  {
    id: "faq5",
    question: "Do you offer wedding and pre-bridal services on-site?",
    answer: "Yes, we have custom-curated VIP rooms for pre-bridal rituals, makeup, and heavy drapes to ensure a quiet, hygienic, and relaxing experience for your special day."
  }
];

export const INTERIOR_SHOWCASE_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&h=600&q=80",
    title: "Modern Minimal Luxury Styling Bays"
  },
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&h=600&q=80",
    title: "Ultra-Premium Reclining Backwash Lounge"
  },
  {
    url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&h=600&q=80",
    title: "Barber Station & Shave Parlor Room"
  },
  {
    url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&h=600&q=80",
    title: "Elite Makeup Suite & Hair Color Bar"
  }
];
