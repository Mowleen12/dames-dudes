export interface Service {
  id: string;
  name: string;
  category: "hair" | "skincare" | "makeup" | "grooming" | "nails" | "spa";
  price: string;
  duration: string;
  description: string;
  iconName: string; // Used to dynamically render Lucide icons
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  achievements: string[];
  imageUrl: string;
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface Offer {
  id: string;
  title: string;
  tagline: string;
  discount: string;
  terms: string;
  code?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  role: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "hair" | "color" | "bridal" | "styling" | "men" | "women";
  beforeUrl: string;
  afterUrl: string;
}
