# SEO Strategy - Don's Transport Shuttle

## Overview

This document outlines the SEO strategy for Don's Transport Shuttle website, focusing on local search dominance in the Gauteng transport/shuttle market.

## Target Market

**Primary Geographic Areas:**
- Johannesburg (CBD, Northern Suburbs, Sandton, Rosebank)
- Pretoria (CBD, East, Centurion)
- Midrand
- OR Tambo International Airport corridor
- Lanseria International Airport corridor

**Target Audience:**
- Business travelers
- Tourists visiting Gauteng
- Corporates needing regular transport
- Individuals needing reliable point-to-point transport
- Businesses requiring urgent parcel delivery

## Keyword Strategy

### Primary Keywords (High Volume, High Competition)

| Keyword | Monthly Search Volume (Est.) | Competition |
|---------|------------------------------|-------------|
| airport shuttle johannesburg | 1,000-2,500 | High |
| or tambo airport transfer | 500-1,000 | High |
| johannesburg shuttle service | 300-500 | Medium |
| gauteng transport | 200-400 | Medium |

### Secondary Keywords (Medium Volume, Medium Competition)

| Keyword | Monthly Search Volume (Est.) | Competition |
|---------|------------------------------|-------------|
| pretoria airport shuttle | 200-400 | Medium |
| sandton to or tambo shuttle | 100-200 | Medium |
| executive chauffeur johannesburg | 100-200 | Medium |
| lanseria airport transfer | 100-200 | Low |

### Long-Tail Keywords (Lower Volume, Lower Competition)

These are easier to rank for and often have higher conversion intent:

- "affordable airport shuttle johannesburg"
- "reliable shuttle service gauteng"
- "24 hour airport transfer johannesburg"
- "point to point transfer pretoria to johannesburg"
- "same day parcel delivery johannesburg"
- "corporate chauffeur service sandton"
- "door to door airport shuttle centurion"

### Location-Based Keywords

Each service page should target location variations:
- [service] + johannesburg
- [service] + pretoria
- [service] + sandton
- [service] + midrand
- [service] + centurion
- [service] + gauteng

## On-Page SEO Requirements

### Every Page Must Have:

1. **Unique Title Tag** (55-60 characters)
   - Format: `[Primary Keyword] | Don's Transport Shuttle`
   - Example: `Airport Transfers Johannesburg | Don's Transport Shuttle`

2. **Meta Description** (150-160 characters)
   - Include primary keyword naturally
   - Include call-to-action
   - Example: "Reliable airport shuttle service in Johannesburg. 24/7 transfers to OR Tambo & Lanseria. Book via WhatsApp for instant quotes. Professional drivers, fixed rates."

3. **Heading Hierarchy**
   - One H1 per page (include primary keyword)
   - H2s for main sections
   - H3s for subsections
   - Never skip heading levels

4. **Content Requirements**
   - Minimum 300 words per service page
   - Natural keyword inclusion (1-2% density max)
   - Location mentions where relevant
   - Internal links to related pages

5. **Image Optimization**
   - WebP format with JPG fallback
   - Descriptive alt text with keywords where natural
   - Compressed file sizes (<100KB for thumbnails, <500KB for heroes)
   - Lazy loading for below-fold images

### Structured Data (Schema.org)

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Don's Transport Shuttle",
  "description": "...",
  "url": "https://transport.voogt.co.za",
  "telephone": "+27...",
  "address": {...},
  "areaServed": [...],
  "priceRange": "$$"
}
```

**Service Pages:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Airport Transfer",
  "provider": {...},
  "areaServed": [...],
  "description": "...",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {...}
  }
}
```

**FAQ Sections:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

## Technical SEO Checklist

### Performance
- [ ] Lighthouse Performance score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Total page size < 1MB

### Crawlability
- [ ] XML sitemap generated and submitted to Google Search Console
- [ ] robots.txt properly configured
- [ ] No orphan pages (all pages linked from navigation/other pages)
- [ ] Canonical tags on all pages
- [ ] No duplicate content issues

### Mobile
- [ ] Mobile-responsive design
- [ ] Tap targets at least 48x48px
- [ ] No horizontal scrolling
- [ ] Readable text without zooming (16px minimum)

### Security
- [ ] HTTPS enabled
- [ ] No mixed content
- [ ] Security headers configured

## Content Strategy

### Blog/Resources Section (Future)

Consider adding a blog section for additional keyword targeting:

**Potential Topics:**
- "Complete Guide to OR Tambo Airport: Everything You Need to Know"
- "Best Time to Travel to Johannesburg Airport"
- "Business Travel Tips for Gauteng Visitors"
- "Comparing Transport Options in Johannesburg"

### Local Content

Include South African-specific content:
- Reference to local areas and landmarks
- ZAR pricing
- Local contact numbers
- References to local events/seasons

## Link Building Strategy

### Local Citations
- Google My Business (critical - set up immediately)
- Bing Places
- Apple Maps
- Local directories (SA Yellow Pages, etc.)

### Industry Directories
- Tourism boards
- Business directories
- Chamber of commerce

### Partnership Opportunities
- Hotels and guest houses
- Travel agents
- Corporate HR departments
- Event planners

## Tracking & Measurement

### Key Metrics
- Organic traffic (Google Analytics)
- Keyword rankings (Google Search Console)
- Click-through rates
- Bounce rate
- Conversion rate (WhatsApp/email clicks)

### Tools to Set Up
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Google My Business
- [ ] Bing Webmaster Tools

## Competitor Analysis Summary

Based on Gauteng shuttle market research:

**Key Competitors:**
1. Kwathlano - Established player, good SEO
2. Airport Shuttle SA - Strong brand recognition
3. Magic Transfers - Good local presence

**Differentiation Opportunities:**
1. Better mobile experience
2. Faster website (performance advantage)
3. Clearer, upfront pricing
4. More personal service messaging
5. Better local content targeting

## Implementation Priority

### Phase 1 (Launch)
- All technical SEO requirements
- Core service pages optimized
- Google My Business setup
- Basic analytics

### Phase 2 (Month 1-3)
- Content expansion
- Local citation building
- Monitor and adjust keywords

### Phase 3 (Month 3+)
- Blog/resources section
- Link building
- Review strategy refinement
