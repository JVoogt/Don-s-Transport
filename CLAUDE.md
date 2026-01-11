# CLAUDE.md

Don's Transport Shuttle - Static marketing website for a Gauteng-based transport company.

## Quick Reference

| Item | Details |
|------|---------|
| **Project** | Don's Transport Shuttle Website |
| **Framework** | Astro 4.x (static output) |
| **Styling** | Tailwind CSS 3.x |
| **Icons** | Lucide (lucide-astro) |
| **Fonts** | Outfit (display) + Source Sans 3 (body) |
| **Deployment** | Docker + Nginx / cPanel static |

---

## Commands

```bash
# Docker (preferred)
docker compose up dev       # Start dev server (http://localhost:8210)
docker compose build dev    # Rebuild dev container
docker compose down         # Stop all containers

# Direct npm (if needed)
npm install                 # Install dependencies
npm run dev                 # Dev server (internal port 4321)
npm run build               # Production build (outputs to dist/)
npm run preview             # Preview production build

# Quality
npm run astro check         # Type check Astro files
npm run format              # Format with Prettier
npm run lint                # Lint source files
```

---

## Docker Configuration

| Service | Port | Description |
|---------|------|-------------|
| `dev` | **8210** | Development server with hot reload |
| `prod` | 80 | Production Nginx server |

**Important:** Development server is accessible at `http://localhost:8210`

The Docker setup uses:
- Node 20 Alpine for building
- Nginx Alpine for production serving
- Volume mounts for hot reload in development

---

## Project Structure

```
src/
├── components/       # Reusable Astro components (Header, Footer)
├── layouts/          # Page layouts (BaseLayout.astro)
├── pages/            # Routes (index.astro)
│   └── services/     # Service pages (TODO)
├── data/             # JSON data (services.json, testimonials.json)
└── styles/           # Global CSS (if needed)

public/
├── images/           # Static images
├── favicon.ico       # Favicon files
└── robots.txt        # Crawl directives
```

---

## Design System

### Colors (Tailwind Classes)

```
Primary (Navy):   primary-500 (#1a365d) - Trust, professionalism
Accent (Gold):    accent-500 (#d69e2e)  - Premium, African heritage
Warm Neutrals:    warm-50 to warm-900   - Background and text
```

### Typography

- **Headings:** `font-display` (Outfit)
- **Body:** `font-body` (Source Sans 3)
- **Display sizes:** `text-display-xl`, `text-display-lg`, `text-display-md`

### Shadows & Effects

- `shadow-soft` / `shadow-soft-lg` - Soft card shadows
- `shadow-accent` - Gold accent glow
- Animations: `animate-fade-in`, `animate-fade-in-up`, `animate-float`

---

## Business Rules

### Booking Integration

**NO backend system** - All bookings via:

1. **WhatsApp:** Click-to-chat with pre-filled message
2. **Email:** mailto: links with subject templates
3. **Phone:** Click-to-call on mobile

```astro
const whatsappNumber = import.meta.env.PUBLIC_WHATSAPP_NUMBER || "27XXXXXXXXX";
const message = encodeURIComponent("Hi, I'd like to book...");
const url = `https://wa.me/${whatsappNumber}?text=${message}`;
```

### Services (4 Total)

1. **Airport Transfers** - OR Tambo, Lanseria (from R350)
2. **Point-to-Point** - Door-to-door Gauteng (from R250)
3. **Chauffeur Services** - Executive/VIP (from R650)
4. **Parcel Delivery** - Same-day secure (from R200)

---

## Development Guidelines

### Component Patterns

```astro
---
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---

<div class="component-class">
  <h2>{title}</h2>
  <slot />
</div>
```

### SEO Requirements

Every page must include:
- Unique `<title>` and `<meta description>`
- Canonical URL
- Open Graph tags
- Structured data (LocalBusiness, Service schemas)

### Accessibility

- Color contrast: 4.5:1 minimum
- All interactive elements keyboard accessible
- ARIA labels on icons/buttons
- Skip navigation link (already in BaseLayout)

### Performance Targets

- Lighthouse Performance: 90+
- LCP: <2.5s
- FCP: <1.5s

---

## Current Status

### Completed

- [x] Project scaffold
- [x] Design system (colors, typography, Tailwind config)
- [x] BaseLayout with SEO
- [x] Header (desktop + mobile menu)
- [x] Footer with contact info
- [x] Homepage (hero, services, testimonials, CTA)
- [x] Services data (services.json)
- [x] Testimonials data (testimonials.json)
- [x] Docker configuration

### TODO

**Phase 1 - Core Pages**
- [ ] Services index page
- [ ] 4 individual service pages
- [ ] About page
- [ ] Contact page
- [ ] Quote request page
- [ ] 404 page

**Phase 2 - Polish**
- [ ] ServiceCard component
- [ ] CTAButton component
- [ ] FAQ accordion
- [ ] Contact form (client-side only)
- [ ] Favicon and social images

---

## Environment Variables

Copy `.env.example` to `.env` and configure. Current values in `.env`:

```bash
PUBLIC_SITE_URL=https://transport.voogt.co.za
PUBLIC_WHATSAPP_NUMBER=27773642006
PUBLIC_EMAIL=donstransport@voogt.co.za
PUBLIC_PHONE=+27 77 364 2006
PUBLIC_ADDRESS=Pretoria, Gauteng
PUBLIC_BUSINESS_NAME=Don's Transport Shuttle
```

**Usage in components:**
```astro
const whatsappNumber = import.meta.env.PUBLIC_WHATSAPP_NUMBER || '27773642006';
const email = import.meta.env.PUBLIC_EMAIL || 'donstransport@voogt.co.za';
```

---

## Content Pending from Client

- [x] Business phone number (+27 77 364 2006)
- [x] WhatsApp Business number (27773642006)
- [x] Email address (donstransport@voogt.co.za)
- [x] Physical address (Pretoria, Gauteng)
- [ ] Vehicle photos
- [ ] Real testimonials
- [ ] About/story content

---

## Do NOT

- Add a database or backend
- Create user accounts or payment systems
- Use client-side routing (Astro MPA only)
- Over-engineer - this is a simple marketing site
- Use generic stock photos
