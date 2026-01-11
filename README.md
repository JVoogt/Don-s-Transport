# The Don Wagon - Website Project

## Overview

Professional transport shuttle website for **The Don Wagon**, a Gauteng-based transport company offering premium shuttle and logistics services.

**Live URL (temporary):** `https://transport.voogt.co.za`  
**Future URL:** TBD (will move to shared Linux hosting via cPanel)

## Services Offered

1. **Airport Transfers** - OR Tambo, Lanseria, and regional airports
2. **Point-to-Point Transfers** - City-to-city and local transport
3. **Chauffeur Services** - Executive and VIP transport
4. **Specialized Parcel Delivery** - Secure, time-sensitive deliveries

## Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | Astro 4.x | Static-first, excellent SEO, easy migration to shared hosting |
| Styling | Tailwind CSS 3.x | Utility-first, small bundle, no build required for production |
| Icons | Lucide Icons | Clean, consistent SVG icons |
| Fonts | Self-hosted Google Fonts | Performance + reliability |
| Build | Vite (via Astro) | Fast builds, modern tooling |
| Deployment | Docker Compose (dev) → Static export (prod) | Portable, cPanel-friendly |

## Why Astro?

- **Static output**: Generates pure HTML/CSS/JS that works on any hosting
- **SEO-first**: Built-in optimizations, sitemap generation, structured data
- **No runtime**: No Node.js required on production server
- **Island architecture**: JS only where needed (contact forms, etc.)
- **Easy migration**: `astro build` produces a `dist/` folder that works on cPanel

## Project Structure

```
the-don-wagon/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ServiceCard.astro
│   │   ├── CTAButton.astro
│   │   ├── TestimonialSlider.astro
│   │   └── ContactSection.astro
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout with SEO meta
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── services/
│   │   │   ├── index.astro  # Services overview
│   │   │   ├── airport-transfers.astro
│   │   │   ├── point-to-point.astro
│   │   │   ├── chauffeur-services.astro
│   │   │   └── parcel-delivery.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── quote.astro      # Quote request (WhatsApp/Email)
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css
│   └── data/
│       ├── services.json
│       ├── testimonials.json
│       └── faqs.json
├── public/
│   ├── images/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml          # Auto-generated
├── docs/
│   ├── DESIGN_SYSTEM.md
│   ├── SEO_STRATEGY.md
│   ├── CONTENT_GUIDE.md
│   └── DEPLOYMENT.md
├── .claude/
│   ├── SKILL.md             # Claude Code agent skill
│   └── context.md           # Project context
├── docker-compose.yml
├── Dockerfile
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## Design Direction

### Aesthetic: **"Premium African Mobility"**

A refined, professional aesthetic that conveys trust and reliability while feeling distinctly South African. Not luxury for luxury's sake, but confident professionalism.

**Tone:** Clean, trustworthy, efficient, warm

### Color Palette

```css
:root {
  /* Primary - Deep Navy (Trust, Professionalism) */
  --color-primary: #1a365d;
  --color-primary-light: #2c5282;
  --color-primary-dark: #0f2444;
  
  /* Accent - Warm Gold (Premium, African heritage) */
  --color-accent: #d69e2e;
  --color-accent-light: #ecc94b;
  --color-accent-dark: #b7791f;
  
  /* Neutral - Warm grays */
  --color-gray-50: #faf9f7;
  --color-gray-100: #f5f3f0;
  --color-gray-200: #e8e4de;
  --color-gray-700: #4a4541;
  --color-gray-900: #1c1917;
  
  /* Semantic */
  --color-success: #38a169;
  --color-error: #e53e3e;
}
```

### Typography

- **Display/Headings:** Outfit (Google Fonts) - Modern, geometric, professional
- **Body:** Source Sans 3 - Highly readable, friendly, professional

### Key Visual Elements

1. **Diagonal lines** - Suggest motion and progress
2. **Subtle gradient overlays** - Add depth without being flashy
3. **High-quality imagery** - South African landscapes, modern vehicles
4. **Generous whitespace** - Premium, uncluttered feel

## SEO Strategy

### Target Keywords

**Primary:**
- gauteng airport shuttle
- johannesburg airport transfer
- pretoria to or tambo shuttle
- executive chauffeur johannesburg
- parcel delivery gauteng

**Long-tail:**
- affordable airport shuttle johannesburg
- point to point transfer pretoria
- reliable shuttle service gauteng
- door to door airport transfer sandton

### Technical SEO Requirements

1. **Page Speed**: Target 90+ Lighthouse score
2. **Mobile-first**: All pages responsive
3. **Structured Data**: LocalBusiness, Service schemas
4. **Meta Tags**: Unique title/description per page
5. **Semantic HTML**: Proper heading hierarchy
6. **Image Optimization**: WebP with fallbacks, lazy loading
7. **Sitemap**: Auto-generated XML sitemap
8. **Robots.txt**: Proper crawl directives

### Content Strategy

Each service page needs:
- H1 with primary keyword
- 300+ words of unique content
- FAQ section with schema markup
- Clear CTA with WhatsApp/Email options
- Location mentions (Gauteng, Johannesburg, Pretoria, etc.)

## Contact Integration

**No backend required** - All bookings via:

1. **WhatsApp Business**: Click-to-chat with pre-filled message
2. **Email**: mailto: link with subject line template
3. **Phone**: Click-to-call on mobile

```javascript
// WhatsApp integration example
const whatsappNumber = "27XXXXXXXXX"; // The Don Wagon's number
const message = encodeURIComponent("Hi, I'd like to book a shuttle...");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
```

## Development

### Prerequisites

- Node.js 18+
- Docker & Docker Compose (for local dev)

### Local Development

```bash
# Clone and install
git clone <repo-url>
cd the-don-wagon
npm install

# Start dev server
npm run dev

# Or with Docker
docker-compose up
```

### Building for Production

```bash
# Generate static site
npm run build

# Output in dist/ folder - ready for cPanel upload
```

### Deployment Options

**Option 1: Docker (Current - Raspberry Pi)**
```bash
docker-compose -f docker-compose.prod.yml up -d
```

**Option 2: cPanel (Future)**
1. Run `npm run build`
2. Upload contents of `dist/` to `public_html/`
3. Configure `.htaccess` for clean URLs

## Competition Analysis

Key competitors in Gauteng shuttle market:
- Kwathlano (kwathlano.co.za)
- Airport Shuttle Johannesburg
- Magic Transfers
- Gauteng Shuttle Services

**Differentiation opportunities:**
1. Better mobile experience
2. Faster page loads
3. Clearer pricing information
4. Stronger local SEO
5. Professional, trustworthy design

## Content Needed from Client

- [ ] Business phone number
- [ ] WhatsApp Business number
- [ ] Email address
- [ ] Physical address (for local SEO)
- [ ] Operating hours
- [ ] Service area details
- [ ] Vehicle photos (or approval to use stock)
- [ ] Testimonials (real or approval for placeholders)
- [ ] Pricing structure (even if just "from R XXX")
- [ ] Unique selling points / Why choose The Don Wagon?
- [ ] The Don Wagon story / About section content
- [ ] Any certifications or affiliations

## License

Private - All rights reserved The Don Wagon
