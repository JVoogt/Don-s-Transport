# Active Context

## Current Focus
Rebranded entire website from "Don's Transport Shuttle" to "The Don Wagon" with new slogan "Modern City Shuttle". Updated all files to reflect new company name while preserving existing design, tone, and feel.

## Recent Changes (Rebranding - 2026-01-11)
- Updated `.env` - PUBLIC_BUSINESS_NAME: "Don's Transport Shuttle" → "The Don Wagon"
- Updated `.env.example` - Same change to business name
- Updated `/src/components/Header.astro` - Logo text: "The Don Wagon" + tagline: "Modern City Shuttle"
- Updated `/src/components/Footer.astro` - Brand name and copyright: "The Don Wagon"
- Updated `/src/layouts/BaseLayout.astro` - Already uses PUBLIC_BUSINESS_NAME env variable (auto-updates)
- Updated `/src/pages/index.astro` - Comment header updated to "The Don Wagon"
- Updated `/src/pages/about.astro` - Comment header + SEO description updated
- Updated `/src/pages/contact.astro` - Comment header + SEO description + WhatsApp message
- Updated `/src/pages/quote.astro` - Comment header updated
- Updated `/src/pages/services/index.astro` - Comment header + content text "Every journey with The Don Wagon..."
- Updated `/src/pages/services/airport-transfers.astro` - Comment header
- Updated `/src/pages/services/chauffeur-services.astro` - Already uses env variable (auto-updates)
- Updated `/src/pages/services/parcel-delivery.astro` - Structured data now uses env variable
- Updated `/CLAUDE.md` - Project title and PUBLIC_BUSINESS_NAME example
- Updated `/package.json` - Package name: "the-don-wagon" + description
- Updated `/README.md` - All references to company name, folder structure examples
- Docker build verification: exit 0 (image built successfully)

## Previous Recent Changes
- Created `/src/pages/about.astro` - Complete about page with company story, mission, values, stats, and services overview
  - Hero section with gradient background and "About Don's Transport Shuttle" title
  - Our Story section with narrative about family-owned business, growth, commitment to service
  - Mission & Values section with 4 core values in grid layout (Reliability, Safety First, Professionalism, Customer First)
  - Each value has icon (clock, shield, star, heart), title, and description
  - Why Choose Us stats section with 4 stats from testimonials.json (trips, on-time rate, years, clients)
  - 6 feature highlights in grid (24/7 availability, professional drivers, fixed pricing, real-time tracking, clean vehicles, local knowledge)
  - Our Services overview with links to all 4 service pages
  - WhatsApp booking CTA section
  - Uses environment variable: PUBLIC_BUSINESS_NAME
  - Stats sourced from testimonials.json data
  - SEO props: title "About Us", description, keywords
  - Design system: primary-500, accent-500, warm-* colors
  - Responsive layout (mobile-first, lg: desktop layout)
  - File size: 18KB
- Previously created Contact page, service pages (airport-transfers, point-to-point, parcel-delivery), and homepage

## Next Steps
1. Create 404 page at `/src/pages/404.astro`
2. Phase 2 polish items:
   - ServiceCard component
   - CTAButton component
   - FAQ accordion enhancement
   - Contact form (client-side only)
   - Favicon and social images
3. If needed: Update any remaining hardcoded "Don's Transport" references in docs/ folder

## Active Decisions

### Rebranding Decisions
| Decision | Choice | Why |
|----------|--------|-----|
| Company name | "The Don Wagon" (exact capitalization) | User-specified requirement |
| Slogan/tagline | "Modern City Shuttle" | User-specified requirement |
| Tone and design | Keep existing colors, layout, feel | User requirement: "retain existing tone and feel" |
| Environment variable approach | Use PUBLIC_BUSINESS_NAME wherever possible | DRY principle, single source of truth |
| SEO metadata | Update descriptions to include "modern city shuttle" | Align with new branding while maintaining SEO value |
| Package name | "the-don-wagon" (kebab-case) | npm convention for package names |
| Folder references | Updated in README examples | Consistency with new package name |

### Previous About Page Decisions
| Decision | Choice | Why |
|----------|--------|-----|
| About page structure | Hero → Story → Values → Stats/Features → Services → CTA | Natural narrative flow from who we are to what we offer |
| Values display | 4 core values in grid with icons | Digestible, visual, reinforces brand pillars |
| Stats source | testimonials.json data | DRY principle, single source of truth |
| Services overview | Links to all 4 service pages | Cross-promote services, improve navigation |
| Story content | Placeholder narrative about family-owned business | Client will replace with actual company history |
| Image placeholders | SVG placeholders with instructions | Visual layout established, awaiting real photos |
| Design system | primary-500 (navy), accent-500 (gold), warm-* (neutrals) | Matches established brand colors from homepage |

## Learnings This Session

### Rebranding Best Practices
- Search entire codebase first with Grep to identify all instances
- Update environment variables (.env + .env.example) first - single source of truth
- Components using env variables automatically update (BaseLayout, chauffeur-services)
- Check both hardcoded values AND fallback defaults in components
- Update structured data (LocalBusiness schema) to use env variable
- Don't forget documentation files (CLAUDE.md, README.md, package.json)
- Verify build works after all changes (docker compose build)
- Header and Footer components need manual updates (logo text + slogan)
- SEO descriptions should incorporate new slogan naturally
- WhatsApp pre-filled messages should reference new company name

### Previous Learnings
- About pages need balance between narrative (story) and facts (stats, features)
- Stats from testimonials.json provide social proof and credibility
- Core values should be concise (4 max) with clear icons for visual reinforcement
- Services overview on about page improves discoverability and cross-linking
- Placeholder content should be professional and guide client on what to replace
- Image placeholders should indicate what content is expected (team photo, vehicle photo, etc.)
- Animation stagger pattern: inline style with animation-delay for sequential card reveals
- Grid layouts: md:grid-cols-2 lg:grid-cols-4 for responsive value cards

## Blockers / Issues
None - Page created successfully, matches existing patterns

## User Preferences Discovered
- User wants complete, working code (not partial examples)
- Focus on matching existing project patterns (colors, typography, layout structure)
- SEO optimization is critical (meta tags, structured data, semantic HTML)
- Accessibility requirements (WCAG compliance, keyboard nav, ARIA labels)

## Last Updated
2026-01-11 18:15
