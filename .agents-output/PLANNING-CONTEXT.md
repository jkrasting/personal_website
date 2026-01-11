# Planning Session Context
## Dr. John P. Krasting Academic Website - Template Hybridization

**Date**: 2026-01-01
**Session Goal**: Design a strategy to hybridize three Astro templates (Astrodeck, Litos, Astros) to build an academic website optimized for tenure review.

---

## Key Decisions Made

### Hybridization Strategy
- **Skeleton**: Astrodeck (layout architecture, semantic HTML, SEO foundation)
- **UI Skin**: Litos (visual styling, animations, publication card patterns)
- **Interactivity**: Astros (Alpine.js for lightweight interactions)
- **Branding**: Rutgers scarlet (#CC0033) as subtle accent color in OKLCH format

### Site Location
- **Development**: `/home/krasting/personal-website/krasting-site/`
- **Deployment**: Existing infrastructure at https://johnkrasting.com (Agent 5 complete)
- **Agent Outputs**: `/home/krasting/personal-website/.agents-output/`

### Design System
**Color Approach**: Use Astrodeck's OKLCH system (better accessibility) with Rutgers scarlet as primary accent
- Primary color: `oklch(48% 0.19 22)` (Rutgers scarlet in OKLCH)
- Dark mode: `oklch(60% 0.19 22)` (lighter for contrast)

**Typography**: Lexend for headings and body (unified system), GeistMono for code

**Animations**: Inject Litos's `.fade-up` pattern for publication cards, research areas, metrics

---

## Template Analysis Summary

### Astrodeck Strengths (Use for Foundation)
- Clean `BaseLayout.astro` with max-w-5xl, semantic HTML, skip links
- Strong SEO component with OpenGraph/Twitter Cards
- OKLCH color system (better than Litos's HSL for accessibility)
- Tailwind CSS v4 integration
- Professional, authoritative aesthetic

**Critical Files**:
- `template-code/astrodeck/src/layouts/BaseLayout.astro`
- `template-code/astrodeck/src/styles/globals.css`
- `template-code/astrodeck/src/components/SEO.astro`

### Litos Strengths (Use for Visual Polish)
- Publication card variants (Compact.astro has perfect hover animations)
- Badge system for tags
- Rich animation framework (fade-up, delays)
- NumberTicker component for metrics dashboard
- Lexend typography (elegant, scholarly)

**Critical Files**:
- `template-code/litos/src/components/posts/card/Compact.astro`
- `template-code/litos/src/styles/global.css` (animations section only)
- `template-code/litos/src/components/base/NumberTicker.tsx`

### Astros Strengths (Use Selectively)
- Alpine.js integration for lightweight interactivity
- FAQ accordion pattern (perfect for CV sections)
- Simple, effective interaction patterns

**Critical Files**:
- `template-code/astros/src/components/faq.astro`

### What NOT to Use
- ❌ Litos i18n system (English-only site)
- ❌ Astros CMS integration (not needed)
- ❌ Litos PWA features (not needed for academic site)
- ❌ Litos Chinese font optimization
- ❌ Astros gradient-heavy hero animations (too playful)

---

## Component Adaptation Strategy

### Direct Copy (Astrodeck → New Site)
1. `BaseLayout.astro` - Main layout (minimal modifications: title, SEO defaults)
2. `Header.astro` - Navigation (simplify to: Research, Publications, Teaching, CV, About)
3. `Footer.astro` - Footer (add Rutgers affiliation)
4. `SEO.astro` - SEO component (customize for Dr. Krasting)
5. `utils.ts` - Utility functions (keep as-is)

### Adapt (Litos → New Site)
1. **PublicationCard.astro** (from `Compact.astro`):
   - Keep: hover transform, left accent bar, badge system, star icon
   - Modify: Replace post data with publication data (journal, impact factor, year)

2. **MetricsDashboard.astro** (from `NumberTicker.tsx`):
   - Display: 44 Publications, h-index 31, $8M+ Funding, 10+ Years Teaching
   - Keep: Animated counting effect

### Adapt (Astros → New Site)
1. **CVAccordion.astro** (from `faq.astro`):
   - Keep: Alpine.js accordion pattern, smooth transitions
   - Modify: Replace FAQ items with CV sections, remove i18next, style with Rutgers colors

### Build New (Inspired by Litos Patterns)
1. **PublicationFilters.tsx** (React + nanostores):
   - Search, filter by year/area, sort by date/impact, export BibTeX/RIS

2. **ResearchAreaCard.astro** (Hybrid):
   - Combine Astrodeck Card structure with Litos styling

---

## Five-Agent Workflow

### Agent 1: CV Analysis & Strategy (NOT STARTED)
**Input**: `template-code/Krasting CV 20251231.pdf`
**Output**:
- `.agents-output/agent-1-cv-data.json` (structured data for 44 publications, grants, etc.)
- `.agents-output/agent-1-strategy.md` (site architecture, tenure priorities)

### Agent 2: Template & Component Selection (NOT STARTED)
**Inputs**: Agent 1 outputs + template directories
**Output**:
- `.agents-output/agent-2-component-map.md` (detailed component mapping)
- `.agents-output/agent-2-design-system.md` (complete design system spec)

### Agent 3: Content Creation (NOT STARTED)
**Inputs**: Agent 1-2 outputs
**Output**:
- `.agents-output/agent-3-content/` (all MDX files, homepage copy, SEO metadata)

### Agent 4: Implementation (NOT STARTED)
**Inputs**: All Agent 1-3 outputs + this plan
**Output**:
- `krasting-site/` (complete Astro project with dist/ folder)
- `.agents-output/agent-4-build-notes.md` (implementation notes, Lighthouse scores)

### Agent 5: DevOps & Deployment (✅ COMPLETE)
**Status**: Infrastructure is live and tested at https://johnkrasting.com
**Action Needed**: Replace test page with real site after Agent 4 completes

---

## Technical Specifications

### Dependencies (Merged from All Templates)
```json
{
  "@astrojs/react": "^4.4.2",
  "@astrojs/sitemap": "^3.6.0",
  "@astrojs/alpinejs": "^0.4.0",
  "@astrojs/mdx": "^4.2.3",
  "@tailwindcss/vite": "^4.1.18",
  "@iconify/tailwind4": "^1.0.6",
  "@nanostores/react": "^0.8.4",
  "alpinejs": "^3.13.7",
  "astro": "^5.16.6",
  "react": "^19.0.0",
  "nanostores": "^0.11.4",
  "tailwindcss": "^4.1.18"
}
```

### Content Collections Schema
```typescript
const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number(),
    journal: z.string(),
    impactFactor: z.number().optional(),
    researchAreas: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});
```

### Page Structure
- Homepage: Hero, Metrics Dashboard, Recent Publications, Research Highlights, News
- Publications: Filterable list (React component), pagination, export
- Research: 5 area pages (dynamic routes)
- Teaching: Philosophy, course cards, mentoring timeline
- CV: Interactive accordion (Alpine.js), PDF download
- About: Professional bio, career highlights

---

## Success Criteria

### Tenure Review Focus (Primary Goal)
- ✅ All evidence accessible in <5 clicks
- ✅ Professional, authoritative design
- ✅ Comprehensive (publications, funding, teaching, service, mentoring)

### Technical Goals
- ✅ Lighthouse scores >90 (Performance, Accessibility, Best Practices, SEO)
- ✅ WCAG 2.1 AA compliant
- ✅ <3s load time
- ✅ Maintainable (Dr. Krasting can update publications/news)

---

## Exploration Findings

### Template Directory Structure Verified
```
template-code/
├── astrodeck/        ✅ Confirmed - Modern Astro 5, OKLCH colors, clean architecture
├── litos/            ✅ Confirmed - Publication cards, animations, rich styling
└── astros/           ✅ Confirmed - Alpine.js patterns, FAQ accordion
```

### Key Files Read and Verified
1. **Astrodeck BaseLayout.astro**: Confirmed max-w-5xl, ViewTransitions, SEO, skip links
2. **Litos Compact.astro**: Confirmed hover animations, badge system, star icon, accent bar
3. **Astrodeck globals.css**: Confirmed OKLCH system, design tokens

### User Preferences Confirmed
- **Rutgers Branding**: Subtle accent (scarlet for links/buttons, not full branding)
- **Template Preservation**: Create new `krasting-site/` directory, don't modify originals

---

## Risk Mitigation Strategies

### CSS Conflicts
- Single entry point (`globals.css` only)
- Cherry-pick Litos styles, don't import wholesale
- Use CSS layers if conflicts arise

### Incremental Testing Plan
1. Skeleton test (homepage renders, nav works)
2. Component test (publication cards in isolation)
3. Integration test (React/Alpine components)
4. Content test (all 44 publications render)
5. Build test (production, Lighthouse audit)

### Fallback Options
- If Litos animations fail → Use Astrodeck view transitions only
- If Alpine.js issues → Replace with React accordion
- If filtering is slow → Add Pagefind search
- If scarlet contrast fails → Darken to `oklch(40% 0.19 22)`

---

## Next Steps for User

### Option 1: Recommend Changes
Review `IMPLEMENTATION-PLAN.md` and provide feedback on:
- Design system decisions (colors, fonts, animations)
- Component hybridization approach
- Agent workflow
- Technical specifications
- Page architecture

### Option 2: Start Building
Execute the five-agent workflow sequentially:
1. Run Agent 1 (CV Analysis)
2. Run Agent 2 (Template Selection) - using this plan as guide
3. Run Agent 3 (Content Creation)
4. Run Agent 4 (Implementation)
5. Update Agent 5 (Deployment) - replace test page with real site

---

## Files Created During Planning

1. **IMPLEMENTATION-PLAN.md** - Main implementation plan (in project root)
2. **.claude/plans/quirky-prancing-hennessy.md** - Plan file for Claude Code
3. **PLANNING-CONTEXT.md** - This file (context for resuming session)

---

## Agent IDs for Resuming

If you need to resume exploration work from this session:
- **Template Exploration Agent**: `acdf860`
- **Workflow Analysis Agent**: `ae9ca63`
- **Plan Agent**: `ad7de6f`

---

## Context for Implementation Session

When starting the implementation:
1. Read `IMPLEMENTATION-PLAN.md` for detailed strategy
2. Start with Agent 1 to extract CV data
3. Use this context file to understand decisions made during planning
4. Reference critical files listed in each section
5. Follow the sequential agent workflow (1→2→3→4→5)

**Key Principle**: Each agent produces concrete deliverables (JSON, markdown) that the next agent consumes, eliminating the need to re-read the CV or re-make decisions.
