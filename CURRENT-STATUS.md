# Dr. John P. Krasting Website - Current Status

**Last Updated**: January 3, 2026
**Status**: ✅ LIVE at https://johnkrasting.com
**Workflow**: Edit & Deploy (iterative refinement phase)

---

## Quick Start for Edits

**User provides**: Specific edit requests
**Assistant executes**:
1. Make the code change
2. Test build: `cd /home/krasting/services/johnkrasting-site/site && npm run build`
3. Deploy: `cd /home/krasting/services/johnkrasting-site && docker compose build && docker compose up -d`
4. Verify: `curl -I https://johnkrasting.com`

---

## Project Overview

Professional academic website for Dr. John P. Krasting, climate scientist at NOAA GFDL.

**Primary Audience**: Collaborators, students, general public
**Key Metrics**: 44 publications, h-index 31, $8M+ funding, 14+ years teaching

---

## Site Structure

**Live URL**: https://johnkrasting.com

**Pages**:
- `/` - Homepage with hero, metrics, research areas, featured publications
- `/publications/` - All 44 publications with filters
- `/research/` - Research areas overview + 5 individual area pages
- `/teaching/` - Teaching portfolio and philosophy
- `/cv/` - Interactive CV
- `/about/` - Biography and contact

**Content Collections**:
- `publications/` - 44 JSON files (pub-001.json to pub-044.json)
- `research/` - 5 MDX files (sea-level-rise, ocean-dynamics, carbon-cycle, esm-development, model-diagnostics)

---

## Key File Locations

### Site Source Code
```
/home/krasting/services/johnkrasting-site/site/
├── src/
│   ├── pages/              # Page routes
│   │   ├── index.astro     # Homepage
│   │   ├── publications.astro
│   │   ├── teaching.astro
│   │   ├── cv.astro
│   │   ├── about.astro
│   │   └── research/
│   ├── components/
│   │   ├── sections/       # Hero, MetricsDashboard, ResearchAreasGrid, FeaturedPublications
│   │   ├── publications/   # PublicationCard, PublicationList, PublicationFilters
│   │   ├── base/           # Header, Footer, Badge, NumberTicker, PageTitle, Prose
│   │   └── ui/             # shadcn/ui components (Button, Card, Input, Label)
│   ├── content/
│   │   ├── publications/   # 44 publication JSON files
│   │   └── research/       # 5 research area MDX files
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── styles/
│   │   └── globals.css     # OKLCH color system, Tailwind base
│   └── data/
│       └── site-config.ts  # Site metadata, metrics, research areas
├── public/
│   ├── images/             # Headshot, research images, og-image
│   └── cv/                 # CV PDF
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

### Deployment Infrastructure
```
/home/krasting/services/johnkrasting-site/
├── docker-compose.yml      # Container orchestration
├── Dockerfile             # Multi-stage build (Node → Nginx)
├── nginx.conf             # Web server config
└── site/                  # Astro project (above)
```

### Agent Outputs (Reference Only)
```
/home/krasting/personal-website/.agents-output/
├── agent-1-cv-data.json        # Structured CV data
├── agent-3-copy/               # All written content
└── agent-2-design-system.md    # Design specs
```

---

## Technology Stack

- **Framework**: Astro 5.x (static site generation)
- **Styling**: Tailwind CSS v3.4.19 (OKLCH colors)
- **Interactivity**: React 19 (islands for filters, animations)
- **Content**: Content Collections (JSON for publications, MDX for research)
- **Deployment**: Docker + Nginx + Caddy reverse proxy
- **SSL**: Cloudflare Origin Certificate
- **CDN**: Cloudflare

---

## Design System

**Colors**: OKLCH format for perceptual uniformity
- Primary: `oklch(45% 0.15 250)` - Professional blue
- Accent: `oklch(55% 0.12 200)` - Ocean teal
- Background: `oklch(100% 0 0)` - White
- Dark mode: Toggle in header

**Typography**:
- Sans: Inter Variable
- Mono: JetBrains Mono
- Responsive scaling with clamp()

**Layout**:
- Max width: 1280px (container)
- Mobile-first responsive
- Sticky header with navigation
- Footer with links

---

## Current Build Status

**Last successful build**: January 3, 2026
**Build time**: ~4 seconds
**Output**: 12 static HTML pages
**Bundle size**: 182 KB (gzipped: 57 KB)
**Container status**: Running, healthy

---

## Common Edit Patterns

### Text/Content Changes
- **Homepage**: Edit `/home/krasting/services/johnkrasting-site/site/src/pages/index.astro`
- **About page**: Edit `/home/krasting/services/johnkrasting-site/site/src/pages/about.astro`
- **Research areas**: Edit MDX files in `/home/krasting/services/johnkrasting-site/site/src/content/research/`
- **Publications**: Edit JSON files in `/home/krasting/services/johnkrasting-site/site/src/content/publications/`

### Component Changes
- **Hero section**: `/home/krasting/services/johnkrasting-site/site/src/components/sections/Hero.astro`
- **Metrics dashboard**: `/home/krasting/services/johnkrasting-site/site/src/components/sections/MetricsDashboard.astro`
- **Publication card**: `/home/krasting/services/johnkrasting-site/site/src/components/publications/PublicationCard.astro`

### Style Changes
- **Global styles**: `/home/krasting/services/johnkrasting-site/site/src/styles/globals.css`
- **Tailwind config**: `/home/krasting/services/johnkrasting-site/site/tailwind.config.mjs`
- **Color variables**: In `globals.css` using OKLCH format

### Site Config Changes
- **Metadata, metrics, research areas**: `/home/krasting/services/johnkrasting-site/site/src/data/site-config.ts`

---

## Deployment Commands

```bash
# Test build locally
cd /home/krasting/services/johnkrasting-site/site
npm run build

# Rebuild Docker image
cd /home/krasting/services/johnkrasting-site
docker compose build

# Deploy new version
docker compose up -d

# Check container status
docker ps --filter "name=johnkrasting"

# View logs
docker logs johnkrasting-site

# Verify live site
curl -I https://johnkrasting.com
```

---

## Known Working State

✅ All pages build successfully
✅ 44 publications load correctly
✅ Filters work (React component props fixed)
✅ Dark mode toggle functional
✅ Mobile responsive
✅ SSL certificate valid
✅ Container healthy
✅ Cloudflare CDN caching

---

## Important Notes

- **Build must succeed** before deploying (check for errors)
- **Container health check** takes ~10 seconds after deploy
- **Cloudflare cache** may take 1-5 minutes to update
- **No git commits** are being made (pure deployment workflow)
- **Tailwind CSS v3** is in use (not v4) - config is stable

---

## Workflow Summary

1. User: "Change X to Y"
2. Assistant: Make edit → Build → Deploy → Verify
3. Assistant: Confirm change is live
4. Repeat

**No planning, no documentation, just fast iteration.**

Ready for edits!
