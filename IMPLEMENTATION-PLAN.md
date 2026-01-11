# Implementation Plan: Dr. John P. Krasting Academic Website
## Hybrid Template Strategy (Astrodeck + Litos + Astros)

**Goal**: Build a professional academic website optimized for tenure review by hybridizing three Astro templates.

**Status**: Agent 5 (Deployment) is COMPLETE. Infrastructure is live at https://johnkrasting.com. Agents 1-4 need execution.

---

## Executive Summary

**Hybridization Strategy**:
- **Skeleton**: Astrodeck (clean layout architecture, semantic HTML, SEO)
- **UI Skin**: Litos (visual styling, animations, publication card patterns)
- **Interactivity**: Astros (Alpine.js for CV accordion, lightweight interactions)
- **Branding**: Subtle Rutgers scarlet (#CC0033) as primary accent color

**New Site Location**: `/home/krasting/personal-website/krasting-site/`

**Deployment Target**: Existing infrastructure at https://johnkrasting.com

---

## Phase 1: Directory Structure & Foundation

### New Project Directory
```
/home/krasting/personal-website/krasting-site/
├── public/
│   ├── fonts/              # Lexend + GeistMono (from Litos)
│   ├── images/
│   │   ├── headshot-placeholder.jpg       # 400x400px professional photo placeholder
│   │   ├── research-sea-level.jpg         # 1200x600px research area hero
│   │   ├── research-ocean-dynamics.jpg    # 1200x600px research area hero
│   │   ├── research-carbon-cycle.jpg      # 1200x600px research area hero
│   │   ├── research-esm-development.jpg   # 1200x600px research area hero
│   │   ├── research-noaa-gfdl.jpg         # 1200x600px research area hero
│   │   └── og-image.jpg                   # 1200x630px social media preview
│   ├── cv/Krasting-CV.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── base/           # Header, Footer, SEO (from Astrodeck)
│   │   ├── ui/             # Button, Card, Badge (from Astrodeck)
│   │   ├── publications/   # CUSTOM (adapt Litos cards)
│   │   ├── research/       # CUSTOM
│   │   ├── cv/             # CUSTOM (Alpine.js accordion)
│   │   └── sections/       # Hero, MetricsDashboard
│   ├── layouts/
│   │   ├── BaseLayout.astro         # From Astrodeck
│   │   └── PublicationLayout.astro  # Custom
│   ├── pages/              # index, research, publications, teaching, cv, about
│   ├── content/
│   │   ├── config.ts       # Content Collections schema
│   │   ├── publications/   # Published papers (44+ MDX files)
│   │   ├── works-in-progress/ # Preprints, manuscripts in review
│   │   ├── research-areas/ # 5 MDX files
│   │   └── courses/        # 3 MDX files
│   ├── styles/
│   │   ├── globals.css     # HYBRID: Astrodeck OKLCH + Litos animations
│   │   └── publications.css
│   └── lib/
│       ├── utils.ts        # From Astrodeck
│       └── publications.ts # Filtering/sorting logic
├── astro.config.mjs        # Merged config
├── tailwind.config.ts      # OKLCH + Rutgers scarlet
└── package.json            # Merged dependencies
```

### Agent Outputs Directory
```
/home/krasting/personal-website/.agents-output/
├── agent-1-cv-data.json         # Structured CV data
├── agent-1-strategy.md          # Site architecture
├── agent-2-component-map.md     # Component selection
├── agent-2-design-system.md     # Design system spec
├── agent-3-content/             # All markdown content
└── agent-4-build-notes.md       # Implementation notes
```

---

## Phase 2: Design System Fusion

### Color System (OKLCH + Rutgers Scarlet)

**Base**: Astrodeck OKLCH system (better accessibility)

**Rutgers Scarlet Integration**:
```css
/* globals.css */
@theme {
  /* Astrodeck base colors */
  --color-background: oklch(100% 0 0);
  --color-foreground: oklch(9.8% 0.0016 286.75);

  /* CUSTOM: Rutgers scarlet as primary accent */
  --color-primary: oklch(48% 0.19 22);        /* #CC0033 in OKLCH */
  --color-primary-foreground: oklch(98% 0 0);
  --color-ring: oklch(48% 0.19 22);           /* Scarlet focus rings */

  /* Keep Astrodeck secondary/muted/border */
  --color-secondary: oklch(96.1% 0.0011 286.75);
  --color-muted: oklch(96.1% 0.0011 286.75);
  --color-border: oklch(91.4% 0.009 286.75);
}

.dark {
  --color-primary: oklch(60% 0.19 22);  /* Lighter scarlet for dark mode */
}
```

### Typography

**Fonts**:
- **Headings**: Lexend (from Litos) - elegant, scholarly
- **Body**: Lexend (unified system)
- **Code**: GeistMono (from Litos)

**Implementation**:
```css
--font-sans: 'Lexend', ui-sans-serif, system-ui, sans-serif;
--font-mono: 'GeistMono', 'Fira Code', monospace;
```

### Animations (from Litos)

**Inject fade-up pattern**:
```css
@layer base {
  .fade-up {
    opacity: 0;
    transform: translateY(2rem);
    animation: fadeUp 0.6s forwards;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(2rem); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animation-delay-100 { animation-delay: 100ms; }
  .animation-delay-150 { animation-delay: 150ms; }
  .animation-delay-200 { animation-delay: 200ms; }
}
```

**Apply to**: Publication cards, research area cards, metrics dashboard

---

## Phase 3: Component Hybridization

### Core Components from Astrodeck (Copy Directly)

| Component | Source | Modifications |
|-----------|--------|---------------|
| `BaseLayout.astro` | `astrodeck/src/layouts/BaseLayout.astro` | Update site title, SEO defaults |
| `Header.astro` | `astrodeck/src/components/Header.astro` | Simplify nav (Research, Publications, Teaching, CV, About) |
| `Footer.astro` | `astrodeck/src/components/Footer.astro` | Add Rutgers affiliation |
| `SEO.astro` | `astrodeck/src/components/SEO.astro` | Customize for Dr. Krasting |
| `utils.ts` | `astrodeck/src/lib/utils.ts` | Keep as-is (cn, clsx) |

**Critical File**: `/home/krasting/personal-website/template-code/astrodeck/src/layouts/BaseLayout.astro`

### Custom Components (Adapt from Litos)

#### 1. PublicationCard.astro
**Adapt from**: `litos/src/components/posts/card/Compact.astro`

**Key patterns to preserve**:
- Hover transform (`group-hover:translate-x-4`)
- Left accent bar (scales up on hover)
- Badge system for tags
- Recommend star icon (for featured publications)

**Modifications**:
- Replace `post.data` with `publication.data`
- Add: journal name, impact factor, year
- Add: DOI link (opens in new tab with `target="_blank" rel="noopener noreferrer"`)
- Add: Publication status badge (Published, In Review, Preprint)
- Keep: title, hover animations, badges

**DOI Link Implementation**:
```astro
{publication.data.doi && (
  <a
    href={`https://doi.org/${publication.data.doi}`}
    target="_blank"
    rel="noopener noreferrer"
    class="text-primary hover:underline"
  >
    DOI: {publication.data.doi}
  </a>
)}
```

**Critical File**: `/home/krasting/personal-website/template-code/litos/src/components/posts/card/Compact.astro`

#### 2. CVAccordion.astro
**Adapt from**: `astros/src/components/faq.astro`

**Key patterns to preserve**:
- Alpine.js `x-data="{ open: false }"` pattern
- Smooth transitions (200ms ease-out)
- Expand/collapse animations

**Modifications**:
- Replace FAQ items with CV sections
- Remove i18next dependency
- Style with Rutgers colors
- Print-friendly (all sections expand)

**Critical File**: `/home/krasting/personal-website/template-code/astros/src/components/faq.astro`

#### 3. MetricsDashboard.astro
**Adapt from**: `litos/src/components/base/NumberTicker.tsx`

**Display**:
- 44 Publications
- h-index: 31
- $8M+ Funding
- 10+ Years Teaching

**Pattern**: Animated counting on page load

**Critical File**: `/home/krasting/personal-website/template-code/litos/src/components/base/NumberTicker.tsx`

### New React Components (Build from Scratch)

#### 4. PublicationFilters.tsx
**Technology**: React 19 + nanostores (state management from Litos)

**Features**:
- Search (title/author)
- Filter by year, research area, journal type
- Sort by date, impact factor
- Export to BibTeX/RIS

**State management pattern**:
```typescript
import { atom, computed } from 'nanostores';

export const publicationsState = atom({
  searchQuery: '',
  selectedYears: [] as number[],
  selectedAreas: [] as string[],
  sortBy: 'year-desc',
});
```

---

## Phase 4: Five-Agent Workflow

### Agent 1: CV Analysis & Strategy

**Status**: NOT STARTED

**Input**:
- `/home/krasting/personal-website/template-code/Krasting CV 20251231.pdf`

**Tasks**:
1. Extract structured data (published papers, works in progress, grants, awards, teaching, mentoring)
2. Extract DOI identifiers for all publications with links
3. Categorize publication status (published, in-review, preprint)
4. Identify tenure review priorities
5. Propose site architecture
6. Calculate metrics (h-index, funding totals)

**Outputs**:
- `.agents-output/agent-1-cv-data.json` (structured JSON with all CV data)
- `.agents-output/agent-1-strategy.md` (site architecture, tenure priorities)

**JSON Schema**:
```json
{
  "personal": { "name": "...", "positions": [...] },
  "publications": [
    {
      "id": "pub-001",
      "title": "...",
      "authors": "Krasting, J.P., ...",
      "year": 2024,
      "journal": "Nature Climate Change",
      "impactFactor": 30.3,
      "doi": "10.1038/s41558-024-xxxxx",
      "status": "published",
      "researchAreas": ["sea-level-rise"],
      "featured": true
    }
  ],
  "worksInProgress": [
    {
      "id": "wip-001",
      "title": "...",
      "authors": "Krasting, J.P., ...",
      "status": "in-review",
      "journal": "Nature Geoscience",
      "researchAreas": ["ocean-dynamics"]
    }
  ],
  "researchAreas": [...],
  "funding": [...],
  "metrics": { "hIndex": 31, "totalFunding": 8000000 }
}
```

---

### Agent 2: Template & Component Selection

**Status**: NOT STARTED

**Inputs**:
- `.agents-output/agent-1-cv-data.json`
- `.agents-output/agent-1-strategy.md`
- Template directories (astrodeck, litos, astros)

**Tasks**:
1. Map components from templates to site needs
2. Design information architecture (pages, sections)
3. Create design system specification (colors, fonts, spacing)
4. Specify custom features (filtering, accordion, metrics)

**Outputs**:
- `.agents-output/agent-2-component-map.md` (which template → which use case)
- `.agents-output/agent-2-design-system.md` (complete design system spec)

**Component Mapping**:
| Site Component | Template Source | Adaptation Level |
|----------------|-----------------|------------------|
| BaseLayout.astro | Astrodeck | Minimal |
| PublicationCard.astro | Litos Compact.astro | Moderate |
| CVAccordion.astro | Astros faq.astro | Moderate |
| PublicationFilters.tsx | Custom (Litos patterns) | Build new |

---

### Agent 3: Content Creation

**Status**: NOT STARTED

**Inputs**:
- `.agents-output/agent-1-cv-data.json`
- `.agents-output/agent-2-design-system.md`

**Tasks**:
1. Write all web copy (homepage, research, teaching, about)
2. Create publication MDX files for published papers (44+)
3. Create works-in-progress MDX files for manuscripts in review/preprints
4. Write publication annotations for featured papers
5. Extract DOI identifiers from CV for all publications
6. Develop SEO metadata (titles, descriptions - no specific numbers)
7. Create accessibility content (alt text for all images including placeholders, ARIA labels)
8. Write image specifications (dimensions, purpose) for future replacement of placeholders

**Outputs**:
- `.agents-output/agent-3-content/` directory with:
  - `homepage.md` - Hero, metrics, recent pubs
  - `about.md` - Professional bio
  - `teaching.md` - Philosophy, courses
  - `publications/` - Published papers (44+ MDX files with DOIs)
  - `works-in-progress/` - Manuscripts in review/preprints (MDX files)
  - `research-areas/` - 5 MDX files
  - `seo-metadata.json` - All page SEO (generic descriptions, no numbers)
  - `image-specifications.json` - Alt text and specifications for all images

**Publication MDX Template**:
```mdx
---
title: "Climate Model Projections of Sea Level Rise"
authors: "Krasting, J.P., ..."
year: 2024
journal: "Nature Climate Change"
impactFactor: 30.3
doi: "10.1038/s41558-024-xxxxx"
status: "published"  # Options: published, in-review, preprint
researchAreas: ["sea-level-rise"]
featured: true
---

## Plain Language Summary
...

## Key Findings
...
```

**Works in Progress MDX Template**:
```mdx
---
title: "Novel Approach to Ocean Heat Uptake Analysis"
authors: "Krasting, J.P., ..."
status: "in-review"
journal: "Nature Geoscience"
submittedDate: "2025-11-15"
researchAreas: ["ocean-dynamics"]
---

## Abstract
...

## Significance for Tenure Review
...
```

---

### Agent 4: Implementation

**Status**: NOT STARTED

**Inputs**:
- All Agent 1-3 outputs
- Template directories (for copying files)
- This implementation plan

**Tasks**:

#### 4.1 Initialize Project
```bash
cd /home/krasting/personal-website
npm create astro@latest krasting-site -- --template minimal --typescript strict
cd krasting-site
```

#### 4.2 Install Dependencies
```bash
npm install \
  @astrojs/react@^4.4.2 \
  @astrojs/sitemap@^3.6.0 \
  @astrojs/rss@^4.0.14 \
  @astrojs/alpinejs@^0.4.0 \
  @astrojs/mdx@^4.2.3 \
  @tailwindcss/typography@^0.5.19 \
  @tailwindcss/vite@^4.1.18 \
  @iconify/tailwind4@^1.0.6 \
  @nanostores/react@^0.8.4 \
  alpinejs@^3.13.7 \
  astro@^5.16.6 \
  clsx@^2.1.1 \
  nanostores@^0.11.4 \
  react@^19.0.0 \
  react-dom@^19.0.0 \
  tailwind-merge@^3.4.0 \
  tailwindcss@^4.1.18 \
  typescript@^5.9.3
```

#### 4.3 Create Placeholder Images
Generate simple, professional placeholder images to visualize layout:

**Headshot Placeholder** (400x400px):
- Solid neutral background (light gray)
- Centered text: "Professional Photo"
- Save as: `public/images/headshot-placeholder.jpg`

**Research Area Placeholders** (1200x600px each):
- Gradient backgrounds with Rutgers scarlet accent
- Centered text with research area name:
  - "Sea Level Rise & Coastal Impacts"
  - "Ocean Dynamics & Circulation"
  - "Carbon Cycle & Biogeochemistry"
  - "Earth System Model Development"
  - "NOAA GFDL Model Infrastructure"
- Save as: `public/images/research-[area-name].jpg`

**Open Graph Image** (1200x630px):
- Rutgers scarlet accent
- Text: "Dr. John P. Krasting | Climate Scientist"
- Save as: `public/images/og-image.jpg`

**Implementation**: Use HTML Canvas or simple image generation tool to create labeled placeholders that clearly indicate image purpose and dimensions.

#### 4.4 Copy Foundation Files
From Astrodeck:
- `src/layouts/BaseLayout.astro`
- `src/components/SEO.astro`, `Header.astro`, `Footer.astro`
- `src/lib/utils.ts`
- `astro.config.mjs` (then merge Litos plugins)

#### 4.5 Create Hybrid CSS
**File**: `src/styles/globals.css`
- Base: Astrodeck OKLCH system
- Add: Rutgers scarlet as primary color
- Inject: Litos fade-up animations
- Add: Lexend font-face declarations

**Critical File**: `/home/krasting/personal-website/template-code/astrodeck/src/styles/globals.css`

#### 4.6 Build Custom Components
1. **PublicationCard.astro** - Adapt Litos Compact.astro
2. **CVAccordion.astro** - Adapt Astros faq.astro
3. **PublicationFilters.tsx** - New React component
4. **MetricsDashboard.astro** - Use Litos NumberTicker
5. **ResearchAreaCard.astro** - Hybrid component (use placeholder images)

#### 4.8 Create Content Collections
**File**: `src/content/config.ts`
```typescript
import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number(),
    journal: z.string(),
    impactFactor: z.number().optional(),
    doi: z.string().optional(),
    status: z.enum(['published', 'in-review', 'preprint']).default('published'),
    researchAreas: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

const worksInProgress = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    status: z.enum(['in-review', 'preprint', 'submitted']),
    journal: z.string(),
    submittedDate: z.string().optional(),
    researchAreas: z.array(z.string()),
  }),
});

export const collections = { publications, worksInProgress, researchAreas, courses };
```

#### 4.9 Populate Content
- Copy MDX files from `.agents-output/agent-3-content/publications/` to `src/content/publications/`
- Copy MDX files from `.agents-output/agent-3-content/works-in-progress/` to `src/content/works-in-progress/`
- Create pages in `src/pages/` with placeholder images
- Ensure all DOI links open in new tabs with proper `rel` attributes
- Reference placeholder images in hero sections and research area pages

#### 4.10 Build & Test
```bash
npm run dev          # Test locally
npm run build        # Production build
npx astro check      # TypeScript validation
```

**Outputs**:
- Complete Astro project in `/home/krasting/personal-website/krasting-site/`
- Built site in `dist/` folder
- `.agents-output/agent-4-build-notes.md` (implementation decisions, Lighthouse scores)

**Success Criteria**:
- Lighthouse scores >90 (all categories)
- WCAG 2.1 AA compliant
- <3s load time
- Publications filterable
- CV accordion works
- No TypeScript errors

---

### Agent 5: DevOps & Deployment

**Status**: ✅ INFRASTRUCTURE COMPLETE

**Inputs**:
- Built site from Agent 4 (`krasting-site/dist/`)
- Existing infrastructure at `/home/krasting/services/johnkrasting-site/`

**Tasks**:
1. Update site files:
   ```bash
   rm -rf /home/krasting/services/johnkrasting-site/site/dist/*
   cp -r /home/krasting/personal-website/krasting-site/dist/* \
         /home/krasting/services/johnkrasting-site/site/dist/
   ```

2. Rebuild container:
   ```bash
   cd /home/krasting/services/johnkrasting-site
   docker compose build
   docker compose up -d
   ```

3. Verify deployment:
   ```bash
   docker ps | grep johnkrasting-site
   curl -I https://johnkrasting.com
   ```

**Outputs**:
- Live website at https://johnkrasting.com
- Deployment documentation updated

**Infrastructure** (already configured):
- Domain: johnkrasting.com
- SSL: Cloudflare Origin Certificate
- Reverse Proxy: Caddy (caddy-net)
- Web Server: Nginx Alpine
- Container: Auto-restart, health checks

---

## Phase 5: Technical Specifications

### Astro Config
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://johnkrasting.com',
  integrations: [react(), alpinejs(), mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
```

### Tailwind Config
```typescript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',  // Rutgers scarlet
          foreground: 'var(--color-primary-foreground)',
        },
        // ... other Astrodeck colors
      },
      fontFamily: {
        sans: ['Lexend', 'ui-sans-serif'],
        mono: ['GeistMono', 'monospace'],
      },
    },
  },
};
```

### Page Architecture

**Homepage** (`src/pages/index.astro`):
- Hero (name, title, Rutgers transition, headshot placeholder image)
- Metrics Dashboard (44 pubs, h-index, funding, teaching)
- Recent Publications (5 featured)
- Research Highlights (3-4 areas with placeholder images)
- News/Updates

**Publications** (`src/pages/publications/index.astro`):
- Search/filter component (React)
- Tab navigation: Published | Works in Progress
- Publication list (paginated, 10 per page)
- Timeline view option
- Export citations (BibTeX, RIS)
- DOI links open in new tabs

**Research Areas** (`src/pages/research/[area].astro`):
- Hero image (placeholder with area name)
- Overview of research area
- Representative publications
- Funding associated with area
- Impact statement

**Teaching** (`src/pages/teaching/index.astro`):
- Teaching philosophy
- Course cards (3 courses)
- Mentoring timeline

**CV** (`src/pages/cv/index.astro`):
- Interactive accordion (Alpine.js)
- Sections: Education, Experience, Publications, Funding, Awards, Teaching, Service
- PDF download link

**About** (`src/pages/about.astro`):
- Professional bio (500-750 words)
- Career highlights
- Contact information

---

## Phase 6: Performance & Accessibility

### Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| Lighthouse Performance | >95 | Static generation, optimized images, minimal JS |
| Lighthouse Accessibility | >95 | WCAG 2.1 AA, semantic HTML, ARIA labels |
| Lighthouse Best Practices | >95 | Security headers, HTTPS, no console errors |
| Lighthouse SEO | 100 | Meta tags, sitemap, structured data |
| Load Time | <3s | Image optimization, font preloading |

**Critical Optimizations**:
1. Use Astro `<Image>` component (WebP, lazy loading)
2. Preload critical fonts (Lexend)
3. React islands: `client:visible` (load on viewport)
4. Total JS budget: <100KB

### Accessibility Checklist (WCAG 2.1 AA)

- [x] Color contrast: 4.5:1 minimum (text), 3:1 (UI components)
- [x] Keyboard navigation: All interactive elements accessible
- [x] Focus indicators: Visible (ring-2 ring-primary)
- [x] Skip to content link
- [x] Semantic HTML (h1, nav, main, article)
- [x] Alt text for images (including descriptive alt text for placeholders)
- [x] ARIA labels for icon buttons
- [x] Form labels associated with inputs
- [x] Touch targets: 44x44px minimum

**Image Accessibility**:
- All placeholder images must have descriptive alt text
- Example: `alt="Placeholder for professional headshot of Dr. John P. Krasting"`
- Example: `alt="Placeholder for sea level rise research visualization"`

**Testing**:
- Lighthouse accessibility audit
- axe DevTools (Chrome extension)
- Keyboard-only navigation test
- Screen reader test (NVDA, VoiceOver)

### SEO Strategy

**Title Tags** (unique per page):
```
Homepage: "Dr. John P. Krasting - Climate Scientist | Rutgers University"
Publications: "Publications - Dr. John P. Krasting"
```

**Meta Descriptions** (150-160 chars):
```
"Climate scientist at NOAA GFDL and Rutgers University. Expert in sea level rise, ocean dynamics, and Earth system modeling. Extensive research publications and funding."
```

**Note**: Avoid specific numbers in SEO metadata (publication counts, funding amounts) as these change frequently and would require constant updates.

**Structured Data** (JSON-LD for publications):
```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "...",
  "author": { "@type": "Person", "name": "John P. Krasting" },
  "datePublished": "2024",
  "publisher": { "@type": "Organization", "name": "Nature Climate Change" }
}
```

---

## Phase 7: Risk Mitigation

### Style Conflicts
**Problem**: Litos and Astrodeck CSS might clash

**Solutions**:
1. Single CSS entry point (`globals.css` only)
2. Cherry-pick Litos styles (don't import wholesale)
3. Use CSS layers if conflicts arise
4. Namespace Litos animations (`.litos-fade-up`)

### Incremental Testing

**Phase 1: Skeleton** → Verify homepage renders, navigation works
**Phase 2: Components** → Test publication cards in isolation
**Phase 3: Integration** → Test React/Alpine components
**Phase 4: Content** → Verify all 44 publications render
**Phase 5: Build** → Production build, Lighthouse audit

### Fallback Strategies

**If Litos animations fail**: Use Astrodeck view transitions only
**If Alpine.js has issues**: Replace with React accordion
**If filtering is slow**: Add Pagefind search (from Litos)
**If Rutgers scarlet contrast fails**: Darken to `oklch(40% 0.19 22)`

---

## Execution Summary

### Sequential Agent Workflow
```
Agent 1 (CV Analysis) → Structured JSON
  ↓
Agent 2 (Template Selection) → Component Map + Design System
  ↓
Agent 3 (Content Creation) → 44 Publication MDX Files
  ↓
Agent 4 (Implementation) → Built Astro Site (dist/)
  ↓
Agent 5 (Deployment) → Live Website at https://johnkrasting.com ✅
```

### Critical Files Reference

**Astrodeck (Skeleton)**:
- `/home/krasting/personal-website/template-code/astrodeck/src/layouts/BaseLayout.astro`
- `/home/krasting/personal-website/template-code/astrodeck/src/styles/globals.css`
- `/home/krasting/personal-website/template-code/astrodeck/src/components/SEO.astro`

**Litos (UI Skin)**:
- `/home/krasting/personal-website/template-code/litos/src/components/posts/card/Compact.astro`
- `/home/krasting/personal-website/template-code/litos/src/styles/global.css` (animations only)
- `/home/krasting/personal-website/template-code/litos/src/components/base/NumberTicker.tsx`

**Astros (Interactivity)**:
- `/home/krasting/personal-website/template-code/astros/src/components/faq.astro`

### Success Metrics

**Primary Goal**: Strengthen tenure review case
- ✅ All evidence easily accessible (<5 clicks)
- ✅ Professional, authoritative design
- ✅ Comprehensive (publications, funding, teaching, service)

**Technical Goals**:
- ✅ Lighthouse scores >90 (all categories)
- ✅ WCAG 2.1 AA compliant
- ✅ <3s load time
- ✅ Maintainable (easy for Dr. Krasting to update)

---

## Phase 8: Future Image Replacement

### Placeholder Image Replacement Process

When actual images are ready to replace placeholders:

**Required Images**:
1. **Professional Headshot** (400x400px minimum)
   - High resolution, professional quality
   - Neutral background, good lighting
   - Replace: `public/images/headshot-placeholder.jpg`
   - Update alt text in: `image-specifications.json`

2. **Research Area Hero Images** (1200x600px minimum)
   - High quality visualizations or field work photos
   - 5 images total (one per research area)
   - Replace: `public/images/research-*.jpg`
   - Suggested sources: Research figures, field photos, model outputs

3. **Open Graph Image** (1200x630px)
   - Professional banner for social media previews
   - Include headshot + branding
   - Replace: `public/images/og-image.jpg`

**Image Optimization**:
- Use WebP format for better compression (Astro `<Image>` component handles this)
- Provide 1x, 2x variants for retina displays
- Maintain aspect ratios specified in placeholders
- Run through image optimization tools (ImageOptim, Squoosh)

**Testing After Replacement**:
- Verify Lighthouse performance score remains >90
- Check responsive behavior at all breakpoints
- Validate alt text is descriptive and meaningful
- Test Open Graph preview on social platforms

---

## Next Steps

1. **Execute Agent 1**: Extract CV data into structured JSON
2. **Execute Agent 2**: Map template components to site needs
3. **Execute Agent 3**: Write all web content
4. **Execute Agent 4**: Build the Astro site (with placeholder images)
5. **Update Agent 5**: Replace test page with real site

**Estimated Workflow**: Sequential execution, each agent builds on previous outputs. Agent 5 infrastructure is ready for final deployment.

**Post-Launch**: Replace placeholder images with actual photos when available following Phase 8 guidelines.
