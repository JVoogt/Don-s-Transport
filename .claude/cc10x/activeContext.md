# Active Context

## Current Focus
Rebranded website from "Don's Transport Shuttle" to "The Don Wagon" with new slogan "Modern City Shuttle".

## Recent Changes
- **Rebranding Complete** - All company name references updated across 26 files
  - Company name: "Don's Transport Shuttle" → "The Don Wagon"
  - Slogan: Added "Modern City Shuttle" to header and footer
  - Environment variable: PUBLIC_BUSINESS_NAME=The Don Wagon
  - Package name: the-don-wagon
  - All SEO meta tags, structured data (LocalBusiness), and visible text updated

## Files Updated
- `.env`, `.env.example` - PUBLIC_BUSINESS_NAME
- `src/components/Header.astro`, `Footer.astro` - Logo text + slogan
- `src/layouts/BaseLayout.astro` - Fallback default
- `src/pages/*.astro` - All pages (index, about, contact, quote, services/*)
- `src/data/services.json`, `testimonials.json` - Service descriptions and testimonials
- `Dockerfile`, `nginx.conf`, `public/robots.txt` - Comment headers
- `docs/DEPLOYMENT.md`, `docs/SEO_STRATEGY.md` - Documentation
- `.claude/settings.local.md`, `.claude/skills/transport-development.md` - Plugin files
- `CLAUDE.md`, `package.json`, `README.md` - Project documentation

## Deployment
- Committed to git: `6811747 Rebrand to The Don Wagon with Modern City Shuttle slogan`
- Deployed to production: https://transport.voogt.co.za
- Docker container rebuilt and restarted
- Traefik routing refreshed

## Active Decisions
| Decision | Choice | Why |
|----------|--------|-----|
| Company name | "The Don Wagon" | Client request |
| Slogan | "Modern City Shuttle" | Client request - reflects modern urban transport focus |
| Slogan placement | Header + Footer | Consistent branding, visible on all pages |
| Documentation updates | All files updated | Maintain consistency across project |

## Next Steps
1. Verify all pages render correctly on production
2. Update any external references (Google Business, social media) if applicable
3. Consider updating og-default.jpg with new branding

## Learnings This Session
- Rebranding requires systematic search across all file types
- Don't forget documentation files, config comments, and data files
- Environment variables provide single source of truth for dynamic branding
- Traefik may need restart after container rebuild to refresh routing

## Blockers / Issues
None - Rebranding complete and deployed

## Last Updated
2026-01-11 17:48
