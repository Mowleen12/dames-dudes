# 💇 Dames & Dudes — Unisex Salon

A modern, fully responsive unisex salon website built with **React**, **TypeScript**, and **Vite**. Features a premium dark-themed design with smooth animations, a service showcase, appointment booking, testimonials, and more.

---

## ✨ Features

- 🎨 **Premium Dark UI** — Glassmorphism, gradients, and micro-animations throughout
- 💼 **Services Showcase** — Detailed listing of haircuts, coloring, skincare, and spa treatments
- 📅 **Appointment Booking** — Integrated booking form for scheduling sessions
- 🧑‍🎨 **Meet the Experts** — Team section with stylist profiles
- 🖼️ **Before & After Gallery** — Visual transformations with interactive slider
- 🏠 **Interior Showcase** — Salon ambiance and facility highlights
- ⭐ **Testimonials** — Client reviews and ratings
- 🎁 **Offers & Promotions** — Current deals and packages
- ❓ **FAQ Section** — Common questions answered
- 📞 **Contact & Location** — Map integration and contact form
- 🌀 **Custom Cursor** — Branded interactive cursor experience
- ⚡ **Preloader Animation** — Smooth entry experience

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 6 | Build tool & dev server |
| Tailwind CSS 4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icon library |
| Express.js | Backend server |
| Gemini API | AI-powered features |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- A **Gemini API Key** (free at [aistudio.google.com](https://aistudio.google.com))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mowleen12/dames-dudes.git
   cd dames-dudes
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then open `.env.local` and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open your browser at **[http://localhost:3000](http://localhost:3000)**

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run TypeScript type checks |
| `npm run clean` | Clean build artifacts |

---

## 📁 Project Structure

```
dames-dudes/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Appointment.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Experts.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── InteriorShowcase.tsx
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── Offers.tsx
│   │   ├── Preloader.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyChooseUs.tsx
│   ├── App.tsx
│   ├── data.ts
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License

This project is for personal/commercial use by **Dames & Dudes Unisex Salon**. All rights reserved.
