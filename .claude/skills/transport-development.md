---
name: transport-development
description: Use this skill when working on Don's Transport Shuttle website - Astro static site development, Tailwind styling, component creation, or page development.
---

# Don's Transport Shuttle - Development Skill

## Project Context

**Client:** Don's Transport Shuttle (Gauteng-based transport company)
**Type:** Static marketing website
**Stack:** Astro 4.x + Tailwind CSS + Lucide Icons

## Tech Stack Rules

### Framework: Astro 4.x

- Use `.astro` components for all static content
- Only add client-side JS when necessary (forms, sliders)
- Leverage Astro's built-in optimizations
- Output mode: `static` (no Node.js runtime needed)

### Styling: Tailwind CSS

- Use Tailwind utilities exclusively, avoid custom CSS
- Follow the color palette in `tailwind.config.mjs`:
  - Primary: `primary-*` (deep navy - trust)
  - Accent: `accent-*` (warm gold - premium)
  - Neutrals: `warm-*` (warm grays)
- Mobile-first: use `sm:`, `md:`, `lg:` prefixes
- Typography: `font-display` for headings, `font-body` for text

### Fonts

- Display: Outfit (Google Fonts, via CDN)
- Body: Source Sans 3 (Google Fonts, via CDN)
- Use `font-display: swap` for performance

## Component Patterns

### Astro Component Structure

```astro
---
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---

<div class="component-wrapper">
  <h2 class="font-display text-primary-500">{title}</h2>
  <slot />
</div>
```

### SEO Requirements per Page

Every page MUST include:

```astro
---
interface Props {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}
---

<head>
  <title>{title} | Don's Transport Shuttle</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <link rel="canonical" href={canonical} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />

  <!-- Structured Data -->
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</head>
```

## File Naming Conventions

- **Components:** PascalCase (`ServiceCard.astro`)
- **Pages:** kebab-case (`airport-transfers.astro`)
- **Data files:** kebab-case (`services.json`)
- **Images:** kebab-case (`shuttle-vehicle.webp`)

## Content Data Structures

### Services (`src/data/services.json`)

```json
{
  "services": [{
    "id": "airport-transfers",
    "slug": "airport-transfers",
    "title": "Airport Transfers",
    "shortDescription": "Brief description...",
    "longDescription": "Full description...",
    "icon": "plane",
    "features": ["Feature 1", "Feature 2"],
    "priceFrom": "R350",
    "ctaText": "Book Now",
    "faqs": [{ "question": "...", "answer": "..." }]
  }]
}
```

### Testimonials (`src/data/testimonials.json`)

```json
{
  "testimonials": [{
    "id": 1,
    "name": "John M.",
    "location": "Sandton",
    "text": "Review text...",
    "rating": 5,
    "service": "airport-transfers"
  }],
  "stats": {
    "totalTrips": "5000+",
    "onTimeRate": "98%"
  }
}
```

## WhatsApp/Email Integration

**NO backend booking systems.** All CTAs use:

```astro
---
const whatsappNumber = import.meta.env.PUBLIC_WHATSAPP_NUMBER || "27XXXXXXXXX";
const emailAddress = import.meta.env.PUBLIC_EMAIL || "bookings@donstransport.co.za";

function getWhatsAppUrl(service: string) {
  const message = encodeURIComponent(
    `Hi, I'd like to enquire about ${service}.\n\nPickup:\nDropoff:\nDate:\nTime:\nPassengers:`
  );
  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

function getEmailUrl(service: string) {
  const subject = encodeURIComponent(`Booking Enquiry: ${service}`);
  return `mailto:${emailAddress}?subject=${subject}`;
}
---
```

## Image Guidelines

- Format: WebP with JPG fallback
- Use Astro's `<Image>` component
- Sizes:
  - Hero: 1920x1080 max
  - Cards: 800x600 max
  - Thumbnails: 400x300 max
- Always include descriptive `alt` text

## Accessibility Requirements

- Keyboard accessible interactive elements
- Color contrast: 4.5:1 minimum
- Skip navigation link (in BaseLayout)
- ARIA labels on icon buttons
- Proper form labels
- Visible focus states

## Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 100
- FCP: <1.5s
- LCP: <2.5s

## Common Tasks

### Adding a New Service Page

1. Ensure service data exists in `src/data/services.json`
2. Create `src/pages/services/{slug}.astro`
3. Use BaseLayout with proper SEO props
4. Include FAQ section with schema markup
5. Add WhatsApp/Email CTAs

### Adding a New Component

1. Create in `src/components/` using PascalCase
2. Define Props interface with TypeScript
3. Use Tailwind classes from design system
4. Make mobile-first responsive
5. Add accessibility attributes

### Updating Contact Information

Edit `.env` file (copy from `.env.example`):

```env
PUBLIC_WHATSAPP_NUMBER=27XXXXXXXXX
PUBLIC_EMAIL=bookings@donstransport.co.za
PUBLIC_PHONE=+27 XX XXX XXXX
PUBLIC_ADDRESS=Johannesburg, Gauteng
```

## Do NOT

- Add a database or backend
- Create user accounts or login
- Build a payment system
- Use client-side routing (stick to Astro MPA)
- Over-engineer - this is a simple marketing site
- Use generic stock photos without approval
