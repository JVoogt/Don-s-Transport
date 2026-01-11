# Project Patterns

## Architecture Patterns
- **Static Site Generator**: Astro 4.x with static output (no backend)
- **Component-based**: Astro components (.astro files) for reusable UI
- **Data-driven**: JSON files in `/src/data/` for services, testimonials
- **SEO-first**: Structured data, meta tags, semantic HTML

## Code Conventions
- **File naming**: kebab-case for files (`airport-transfers.astro`)
- **Component naming**: PascalCase for imports (`BaseLayout`, `Header`)
- **Props interface**: TypeScript interfaces in frontmatter for component props
- **Comments**: JSDoc-style block comments at file top

## File Structure
- `/src/layouts/` - Page layouts (BaseLayout.astro)
- `/src/components/` - Reusable components (Header, Footer)
- `/src/pages/` - Routes (index.astro, services/*, etc.)
- `/src/data/` - JSON data files (services.json, testimonials.json)
- `/public/` - Static assets (images, favicon, robots.txt)

## Styling Patterns
- **Framework**: Tailwind CSS 3.x
- **Color system**: Custom tokens (primary-*, accent-*, warm-*)
  - `primary-500` (#1a365d) - Navy blue (trust, professionalism)
  - `accent-500` (#d69e2e) - Gold (premium, heritage)
  - `warm-*` - Neutral grays for backgrounds and text
- **Typography**:
  - `font-display` - Outfit (headings)
  - `font-body` - Source Sans 3 (body text)
  - Display sizes: `text-display-xl`, `text-display-lg`, `text-display-md`
- **Shadows**: `shadow-soft`, `shadow-soft-lg`, `shadow-accent`
- **Animations**: `animate-fade-in`, `animate-fade-in-up`, `animation-delay` inline styles

## Component Patterns
- **BaseLayout**: Wraps all pages, handles SEO meta tags, fonts, structured data
  - Props: `title`, `description`, `keywords`, `canonical`, `ogImage`, `structuredData`
  - Slots: `header`, default (main content), `footer`
- **Header**: Fixed navigation with mobile menu, optional transparent background
- **Footer**: Contact info, service links, company links, social placeholders
- **Service Cards**: Icon + title + description + price + CTA link

## SEO Patterns
- **Title format**: `{page title} | Don's Transport Shuttle`
- **Meta tags**: title, description, keywords, canonical, OG tags, Twitter cards
- **Structured data**: LocalBusiness (default), FAQPage (service pages), Service schemas
- **Geo tags**: `geo.region="ZA-GP"`, `geo.placename="Johannesburg"`

## Booking/Contact Patterns
- **NO backend** - All bookings via external channels:
  - WhatsApp: `https://wa.me/{number}?text={encodedMessage}`
  - Email: `mailto:{email}?subject={subject}`
  - Phone: `tel:{number}`
- **WhatsApp message template**: Pre-fill with service name + booking fields (Pickup, Dropoff, Date, Time, Passengers)
- **Environment variables**: `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_EMAIL`, `PUBLIC_PHONE`, `PUBLIC_ADDRESS`

## Common Gotchas
- **Environment variables**: Must start with `PUBLIC_` prefix to be accessible in Astro frontmatter
- **Astro slots**: Use `slot="header"` syntax, not children props like React
- **Tailwind classes**: Must use `class:list` or `class` attribute, not `className`
- **SVG icons**: Inline SVG strings with `set:html` or `<Fragment set:html={icon} />`
- **Animation delays**: Use inline `style="animation-delay: {value}ms"` for staggered animations

## Accessibility
- **Color contrast**: 4.5:1 minimum for text, 3:1 for large text
- **Keyboard nav**: All interactive elements keyboard accessible
- **ARIA labels**: `aria-label` on icon buttons, `aria-expanded` on menus
- **Skip link**: "Skip to main content" link at top of page
- **Semantic HTML**: Use `<nav>`, `<main>`, `<article>`, `<section>`, etc.
- **Focus styles**: `:focus-visible` with outline

## Performance
- **Static output**: No server-side rendering overhead
- **Font loading**: Preconnect to Google Fonts, `display=swap`
- **Image optimization**: Use WebP format, provide alt text
- **Code splitting**: Astro handles automatically for pages
- **Lazy loading**: Native `loading="lazy"` on images below fold
