# Privé Hills Residence Website

A luxury residential property landing page built with **Next.js 14** and **Tailwind CSS**, inspired by [privehillsresidence.com](https://www.privehillsresidence.com/).

## ✨ Features

- **Full-screen hero** with parallax background, animated reveal, and location badges
- **Sticky navbar** with scroll-aware transparency, mobile hamburger menu
- **Stats banner** with animated counters
- **Promo section** with banner image and feature cards
- **Unit Types** — tabbed gallery with image carousel, specs accordion, 3 unit types (Agave, Birch, Cedar)
- **Facilities grid** with hover effects and photo strip
- **Interactive location** section with embedded Google Map and tabbed landmark list
- **Contact section** with WhatsApp-integrated form
- **Floating WhatsApp button** with subtle animation
- **Footer** with navigation, contact info, and social links
- Scroll-triggered reveal animations throughout
- Gold shimmer text effect
- Grain texture overlay
- Custom gold scrollbar

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
open http://localhost:3000
```

## 🏗 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Main page assembling all sections
│   └── globals.css      # Global styles, animations, utilities
└── components/
    ├── Navbar.tsx        # Sticky nav with mobile menu
    ├── Hero.tsx          # Full-screen hero section
    ├── Stats.tsx         # Animated stats bar
    ├── Promo.tsx         # Promo banner & cards
    ├── Units.tsx         # Unit types with gallery & specs
    ├── Facilities.tsx    # Facilities grid
    ├── Location.tsx      # Map + landmark tabs
    ├── Contact.tsx       # Contact form + WhatsApp
    ├── Footer.tsx        # Site footer
    └── FloatingWhatsApp.tsx  # Fixed WhatsApp CTA
```

## 🎨 Design Choices

- **Typography**: Cormorant Garamond (display/serif) + Jost (body/sans)
- **Color palette**: Deep charcoal `#0f0e0c` background + warm gold `#c8a96e` accents
- **Aesthetic**: Luxury/refined dark mode with gold ornamental elements
- **Animations**: CSS-based scroll reveal, shimmer text, float, accordion

## 🔧 Customization

Update the following in the components:
- WhatsApp number: replace `628111234567` with your actual number
- Unit prices and specs in `Units.tsx`
- Facility descriptions in `Facilities.tsx`
- Location/landmark data in `Location.tsx`
- Contact details in `Contact.tsx` and `Footer.tsx`

## 📦 Dependencies

- `next` 14.x
- `react` 18.x
- `tailwindcss` 3.x
- Google Fonts: Cormorant Garamond + Jost

> Images are loaded from Unsplash CDN. Replace with your actual property photos for production.
