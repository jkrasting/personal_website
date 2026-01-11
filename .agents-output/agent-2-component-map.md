# Agent 2: Component Mapping & Template Selection

**Date**: January 2026
**Project**: Dr. John P. Krasting Academic Website
**Purpose**: Map template components to site requirements for tenure review

---

## Executive Summary

After analyzing three Astro templates (Astrodeck, Litos, Astros), the recommended approach is:

**PRIMARY FOUNDATION: Astrodeck**
- Modern stack (Astro 5.x, Tailwind v4 OKLCH, React 19)
- Professional layouts and structure
- Comprehensive SEO and accessibility
- Clean, academic-appropriate design

**SPECIALTY COMPONENTS: Litos**
- Publication card layouts (perfect for 44 papers)
- Research project displays
- Skills showcase (adaptable for research areas)
- Animated metrics (NumberTicker)

**NOT RECOMMENDED: Astros**
- Older versions (Astro v2.6)
- Less relevant features (AlpineJS, localization, CMS)
- Generic components

---

## Template Analysis Summary

### Astrodeck (⭐ PRIMARY CHOICE)

**Strengths:**
- ✅ Modern tech stack (Astro 5.x, Tailwind v4, React 19, TypeScript)
- ✅ OKLCH color format (perceptually uniform, professional)
- ✅ Multiple layouts (Boxed, FullWidth, Minimal, Auth, Article)
- ✅ Comprehensive SEO component (OpenGraph, Twitter Cards, sitemap, RSS)
- ✅ Professional header/footer with responsive navigation
- ✅ Dark mode with persistence
- ✅ Accessibility features (skip to content, WCAG compliant)
- ✅ View transitions for smooth navigation
- ✅ Production-ready (Vercel Analytics, optimized builds)
- ✅ AI-friendly (AGENTS.md standard, Claude Code agent)

**Key Components:**
- `/layouts/BaseLayout.astro` - Boxed layout (max-w-5xl), perfect for content-focused pages
- `/layouts/FullWidthLayout.astro` - Full-width for showcase pages
- `/layouts/MinimalLayout.astro` - No header/footer (404, standalone)
- `/layouts/ArticleLayout.astro` - Blog/article layout with rich content support
- `/components/SEO.astro` - Comprehensive SEO meta tags
- `/components/Header.astro` - Sticky header with navigation, theme toggle, mobile menu
- `/components/Footer.astro` - Site footer
- `/components/sections/Hero.astro` - Large centered hero with decorative background
- `/components/sections/Features.astro` - Grid of feature cards with icons
- `/components/sections/CTA.astro` - Call-to-action sections
- `/components/sections/ContentBlock.astro` - Content sections
- `/components/ui/` - shadcn/ui components (Button, Card, Badge, Input, Label)
- `/components/ThemeToggle.astro` - Dark/light mode switcher

**Use For:**
- Site foundation and structure
- All layouts
- Navigation (header/footer)
- SEO and metadata
- Homepage hero section
- Research areas overview (Features grid)
- Basic UI components

---

### Litos (⭐ SPECIALTY COMPONENTS)

**Strengths:**
- ✅ Excellent publication card layouts (multiple variants)
- ✅ Research project display components
- ✅ Skills showcase (perfect for research expertise)
- ✅ Animated metrics (NumberTicker)
- ✅ Clean, modern design system
- ✅ Table of contents components (for long pages)
- ✅ Prose component (for rich content)
- ✅ Modern stack (Astro 5, React 19, Tailwind v4)

**Key Components to Integrate:**
- `/components/posts/card/Compact.astro` - Clean publication card with hover effects
- `/components/posts/card/List.astro` - List-style publication card
- `/components/posts/card/Cover.astro` - Publication card with cover image
- `/components/posts/card/Minimal.astro` - Minimal publication card
- `/components/posts/card/TimeLine.astro` - Timeline-style publication card
- `/pages/projects/index.astro` - Research project layout structure
- `/components/base/SkillsShowcase.astro` - Skills showcase (adapt for research areas)
- `/components/base/NumberTicker.tsx` - Animated number counter (for metrics)
- `/components/base/PageTitle.astro` - Page title component
- `/components/base/SectionDivider.astro` - Section divider
- `/components/base/Pagination.astro` - Pagination for publications list
- `/components/posts/base/Badge.astro` - Tag/badge component
- `/components/posts/toc/TableOfContents.astro` - Table of contents
- `/components/posts/toc/BackToTop.astro` - Back to top button
- `/components/posts/base/Prose.astro` - Rich content prose styles

**Use For:**
- Publication cards (44 publications)
- Research area/project displays
- Metrics dashboard (NumberTicker for 44 pubs, h-index 31, $8M funding)
- Page titles and section dividers
- Table of contents (for CV page, long research pages)
- Tag/badge system (for publication filtering)

---

### Astros (❌ NOT RECOMMENDED)

**Weaknesses:**
- ❌ Older versions (Astro v2.6 vs v5.x in others)
- ❌ AlpineJS instead of React (less modern, smaller ecosystem)
- ❌ Localization adds unnecessary complexity
- ❌ CMS (Sveltia) may not be needed
- ❌ Generic components (not as refined)
- ❌ Less suitable for academic website

**Components:**
- Pricing, Testimonials, FAQ - Not relevant for academic site
- Blog structure - Better alternatives in Litos
- Hero, Features - Better versions in Astrodeck

**Decision:** Skip this template entirely. Use Astrodeck + Litos instead.

---

## Component Mapping by Site Section

### Homepage (/)

**Layout:** `BaseLayout` (Astrodeck)

**Components:**
1. **Hero Section** (Astrodeck `Hero.astro` - ADAPT)
   - Professional headshot image
   - Name: "Dr. John P. Krasting"
   - Title: "Climate Scientist | Sea Level Rise Expert"
   - Subtitle: "Joining Rutgers University Department of Environmental Sciences"
   - Primary CTA: "View Publications"
   - Secondary CTA: "Download CV"
   - Remove: Badge (not needed)

2. **Metrics Dashboard** (Litos `NumberTicker.tsx` + Custom Grid)
   - Create new component: `MetricsDashboard.astro`
   - 4 key metrics in grid:
     - 44 Publications
     - h-index: 31
     - $8.75M Funding
     - 10+ Years Teaching
   - Use NumberTicker for animated counts
   - Clean, professional styling

3. **Featured Publications** (Litos `Compact.astro` - ADAPT)
   - Component: `FeaturedPublicationsSection.astro`
   - Show 5 highest-impact publications:
     - Nature Climate Change (pub-017)
     - Nature Geoscience (pub-009)
     - Annual Review of Earth & Planetary Sciences (pub-042)
     - Communications Earth & Environment (pub-027)
     - PNAS (pub-003)
   - Use Litos Compact card design
   - Add journal name and impact factor
   - Add "View All Publications" CTA

4. **Research Highlights** (Astrodeck `Features.astro` - ADAPT)
   - Component: `ResearchAreasGrid.astro`
   - 5 research areas in 3-column grid (2 rows):
     - Sea Level Rise & Coastal Impacts
     - Ocean Dynamics & Circulation
     - Carbon Cycle & Biogeochemistry
     - Earth System Model Development
     - Model Diagnostics & Evaluation
   - Replace generic icons with custom research icons
   - Link to dedicated research area pages

5. **Recent News** (Custom Component)
   - Component: `NewsSection.astro`
   - 3 recent items:
     - Rutgers tenure-track appointment (2025)
     - NOAA/OAR Employee of the Year (2021)
     - Department of Commerce Bronze Medal (2024)
   - Timeline or card layout
   - Link to full awards/news page

6. **Call-to-Action** (Astrodeck `CTA.astro` - ADAPT)
   - Simple centered CTA
   - "Explore My Research" or "Download CV"
   - Professional, understated

---

### Research Pages (/research/*)

**Layout:** `BaseLayout` (Astrodeck)

**Research Overview Page (/research):**

**Components:**
1. **Page Title** (Litos `PageTitle.astro`)
   - Title: "Research"
   - Introduction paragraph

2. **Research Areas Grid** (Custom + Astrodeck Features)
   - Component: `ResearchAreasDetail.astro`
   - 5 research areas, each with:
     - Icon or image
     - Title and description
     - Key publications (3-5)
     - Ongoing work
     - Funding associated
     - Link to dedicated page

**Individual Research Area Pages (/research/sea-level-rise, etc.):**

**Layout:** `ArticleLayout` (Astrodeck)

**Components:**
1. **Page Header** (Custom)
   - Research area name
   - Brief description (1-2 sentences)
   - Icon/image

2. **Table of Contents** (Litos `TableOfContents.astro`)
   - Sections: Overview, Key Publications, Ongoing Work, Funding, Impact

3. **Overview Section** (Prose + Custom)
   - Litos `Prose.astro` for rich content styling
   - Detailed research description
   - Methodology and approach
   - Collaborators and institutions

4. **Key Publications** (Litos Publication Cards)
   - Filter publications by research area
   - Use `List.astro` or `Compact.astro` layout
   - Show relevant publications with full details

5. **Ongoing Work** (Custom)
   - Works in progress related to this area
   - Use similar card layout to publications

6. **Funding** (Custom Cards)
   - Grants related to this research area
   - Amount, funder, role, dates

7. **Impact Statement** (Custom)
   - Real-world applications
   - Policy influence
   - Media coverage

8. **Back to Top** (Litos `BackToTop.astro`)

---

### Publications Page (/publications)

**Layout:** `BaseLayout` (Astrodeck)

**Components:**
1. **Page Title** (Litos `PageTitle.astro`)
   - Title: "Publications"
   - Subtitle: "44 peer-reviewed publications in leading climate science journals"

2. **Publication Filters** (Custom React Component)
   - Component: `PublicationFilters.tsx`
   - Filter by:
     - Year (dropdown: 2025, 2024, 2023, etc.)
     - Research Area (checkboxes)
     - Journal Impact Factor (slider: 0-30)
     - First Author Only (toggle)
     - Featured Only (toggle)
   - Search bar (title, authors, keywords)
   - Export options (BibTeX, RIS)

3. **Publication Count** (Litos `NumberTicker.tsx`)
   - "Showing X of 44 publications"
   - Updates dynamically based on filters

4. **Publication List** (Litos Publication Cards)
   - Component: `PublicationList.astro` with `PublicationCard.astro`
   - Use Litos `Compact.astro` as base
   - Enhancements:
     - Journal name and impact factor
     - DOI link
     - Research area tags (badges)
     - First author indicator
     - Contribution percentages (hover tooltip)
   - Default: 20 per page
   - Pagination (Litos `Pagination.astro`)

5. **Publication Sort** (Custom)
   - Sort by:
     - Year (newest first - default)
     - Impact Factor (highest first)
     - Citations (if available)

6. **Works in Progress Section** (Separate Section)
   - Title: "Works in Progress"
   - 5 manuscripts in review/preparation
   - Similar card layout but distinct styling

---

### CV Page (/cv)

**Layout:** `BaseLayout` (Astrodeck)

**Components:**
1. **CV Header** (Custom)
   - Component: `CVHeader.astro`
   - Name, title, contact info
   - Download PDF button (primary CTA)
   - Print-optimized version button

2. **Interactive CV Sections** (Custom Accordion)
   - Component: `CVSection.astro` (accordion-style)
   - Sections (expandable):
     - Education
     - Professional Experience
     - Publications (with filter/search)
     - Research Funding
     - Awards & Honors
     - Teaching Experience
     - Mentoring
     - Service & Leadership
     - Conference Presentations
     - Skills & Expertise
   - Default: First 3 sections expanded
   - Smooth expand/collapse animations

3. **Table of Contents** (Litos `TableOfContents.astro`)
   - Sticky sidebar (desktop)
   - Mobile: Collapsible at top

4. **Publication Section** (Within CV)
   - Reuse `PublicationList` component
   - Compact view
   - Link to full publications page

5. **Print Stylesheet** (Custom CSS)
   - Hide: Navigation, footer, interactive elements
   - Show: All expanded sections
   - Page breaks after major sections

---

### Teaching Page (/teaching)

**Layout:** `BaseLayout` (Astrodeck)

**Components:**
1. **Page Title** (Litos `PageTitle.astro`)
   - Title: "Teaching"
   - Subtitle: "10+ years of teaching experience at Princeton and Rutgers"

2. **Teaching Philosophy** (Litos `Prose.astro`)
   - 2-3 paragraphs
   - Rich content formatting

3. **Current Courses** (Custom Cards)
   - Component: `CourseCard.astro`
   - 3 courses:
     - Climate Dynamics (AOS-562) - Princeton
     - Introduction to Meteorology (11:670:101) - Rutgers
     - Climate Dynamics (16:107:545) - Rutgers
   - Each card shows:
     - Course name and code
     - Institution and department
     - Level (graduate/undergraduate)
     - Years taught
     - Description
     - Materials developed

4. **Mentoring Section** (Litos `SectionDivider.astro` + Custom)
   - Title: "Mentoring"
   - Two subsections:

     **Postdoctoral Researchers:**
     - Component: `MenteeCard.astro`
     - 4 postdocs with:
       - Name and current position
       - Project title
       - Years advised
       - Advising effort percentage
       - Outcomes/placements

     **Undergraduate Researchers:**
     - 5 undergrads with:
       - Name and institution
       - Program (NOAA Hollings, Princeton CIMES)
       - Project title
       - Year
       - Outcomes

5. **Student Success Stories** (Custom)
   - Highlight successful placements
   - Publications with mentees
   - Awards won by students

---

### About Page (/about)

**Layout:** `BaseLayout` (Astrodeck)

**Components:**
1. **Professional Biography** (Litos `Prose.astro`)
   - 4-5 paragraphs
   - Career trajectory
   - Research interests
   - Current work

2. **Career Highlights Timeline** (Custom)
   - Component: `CareerTimeline.astro`
   - Key milestones:
     - 2025: Joining Rutgers (tenure-track)
     - 2025: Princeton Lecturer
     - 2021: NOAA/OAR Employee of the Year
     - 2015: Promoted to ZP-IV
     - 2015: Rutgers Adjunct Lecturer
     - 2009: Joined NOAA GFDL
     - 2008: Ph.D. from Rutgers
   - Visual timeline with icons

3. **Research Impact** (Custom Section)
   - IPCC contributions (GFDL models)
   - Policy influence
   - Media appearances
   - Community software (MDTF diagnostics)

4. **Awards Section** (Custom Cards)
   - 5 major awards
   - Card layout with year, organization, description

5. **Contact Information** (Custom)
   - Email (work)
   - GitHub: jkrasting
   - LinkedIn: krasting
   - Office location
   - Professional social links

---

### 404 Page (/404)

**Layout:** `MinimalLayout` (Astrodeck)

**Components:**
- Simple centered message
- "Page Not Found"
- Search box or link back to home
- No header/footer (MinimalLayout)

---

## Custom Components to Build

These components need to be created by combining/adapting template components:

### 1. **MetricsDashboard.astro**
**Source:** Litos `NumberTicker.tsx` + Custom Grid
**Purpose:** Homepage metrics display (44 pubs, h-index, funding, teaching years)
**Features:**
- 4-column responsive grid (2x2 on mobile)
- NumberTicker for animated counts
- Icon for each metric
- Label and sublabel

### 2. **PublicationCard.astro**
**Source:** Litos `Compact.astro` (adapt)
**Purpose:** Display publication with all metadata
**Features:**
- Title (linked to details or DOI)
- Authors (highlight "Krasting, J. P.")
- Year
- Journal name + impact factor badge
- DOI link
- Research area tags (badges)
- Contribution percentages (tooltip on hover)
- First author indicator
- Featured/recommend indicator

### 3. **PublicationFilters.tsx** (React)
**Source:** Custom (use shadcn/ui components from Astrodeck)
**Purpose:** Filter and search 44 publications
**Features:**
- Year dropdown
- Research area checkboxes
- Impact factor slider
- First author toggle
- Featured toggle
- Search input (debounced)
- Export buttons (BibTeX, RIS)
- Clear filters button
- State management (React useState)

### 4. **PublicationList.astro**
**Source:** Litos card layouts + Astrodeck layout
**Purpose:** Display filtered/sorted list of publications
**Features:**
- Props: publications array, filters
- Maps over publications
- Uses PublicationCard component
- Pagination (20 per page)
- "No results" state

### 5. **ResearchAreasGrid.astro**
**Source:** Astrodeck `Features.astro` (adapt)
**Purpose:** Homepage overview of 5 research areas
**Features:**
- 3-column grid (responsive to 1-column mobile)
- Custom research icons
- Area title
- Brief description (2 sentences)
- Link to detailed page

### 6. **ResearchAreaDetail.astro**
**Source:** Custom + Litos Prose
**Purpose:** Full research area page
**Features:**
- Hero header with icon
- Table of contents
- Overview section (prose)
- Key publications section (PublicationCard)
- Ongoing work section
- Funding section
- Impact section
- Back to top button

### 7. **CVSection.astro** (Accordion)
**Source:** Custom (use shadcn/ui Accordion from Astrodeck)
**Purpose:** Expandable CV sections
**Features:**
- Accordion component from shadcn/ui
- Smooth expand/collapse
- Icon indicator (chevron)
- Default expanded state configurable
- Print-friendly (expand all for print)

### 8. **CVHeader.astro**
**Source:** Custom
**Purpose:** CV page header with download/print options
**Features:**
- Name, title, contact
- Download PDF button
- Print button (triggers window.print())
- Last updated date

### 9. **CourseCard.astro**
**Source:** Astrodeck Card + Custom
**Purpose:** Display course information
**Features:**
- Course name and code
- Institution badge
- Level indicator (grad/undergrad)
- Years taught
- Description
- Materials developed
- Hover effects

### 10. **MenteeCard.astro**
**Source:** Custom
**Purpose:** Display mentee information
**Features:**
- Name and current position
- Photo (optional)
- Project title
- Years advised
- Advising effort
- Outcomes/publications
- Link to their website/LinkedIn

### 11. **FundingCard.astro**
**Source:** Custom
**Purpose:** Display grant information
**Features:**
- Grant title
- Funder name
- Role (PI, Co-PI, Lead)
- Amount (formatted as $X.XM)
- Duration (YYYY-YYYY)
- Status (active/completed)
- Research areas linked
- Hover effects

### 12. **CareerTimeline.astro**
**Source:** Custom
**Purpose:** Visual timeline of career milestones
**Features:**
- Vertical timeline (desktop), horizontal scroll (mobile)
- Year markers
- Milestone cards with:
  - Date
  - Title
  - Organization
  - Icon
  - Description
- Connecting line between milestones

### 13. **NewsSection.astro**
**Source:** Custom
**Purpose:** Recent news/announcements on homepage
**Features:**
- 3 recent news items
- Date
- Title
- Brief description
- Link to full story (optional)
- Card or list layout

---

## Integration Strategy

### Phase 1: Foundation (Astrodeck)
1. Install Astrodeck as base
2. Configure layouts (BaseLayout, FullWidthLayout, ArticleLayout)
3. Set up Header with navigation
4. Set up Footer
5. Configure SEO component
6. Set up dark mode theme
7. Configure Tailwind theme (colors, fonts)

### Phase 2: Litos Component Integration
1. Copy Litos components to project:
   - `/components/posts/card/Compact.astro` → `/components/publications/PublicationCard.astro`
   - `/components/base/NumberTicker.tsx`
   - `/components/base/PageTitle.astro`
   - `/components/base/SectionDivider.astro`
   - `/components/base/Pagination.astro`
   - `/components/posts/base/Badge.astro`
   - `/components/posts/toc/TableOfContents.astro`
   - `/components/posts/base/Prose.astro`

2. Adapt Litos components:
   - Update import paths
   - Adjust styling to match Astrodeck theme
   - Remove Litos-specific dependencies
   - Ensure TypeScript compatibility

### Phase 3: Custom Component Development
1. Build custom components (listed above)
2. Test responsiveness
3. Test dark mode
4. Test accessibility

### Phase 4: Content Integration
1. Create content collections for:
   - Publications (44 items)
   - Works in progress (5 items)
   - Research areas (5 pages)
   - Funding (7 grants)
   - Awards (5 awards)
   - Teaching (3 courses)
   - Mentoring (4 postdocs, 5 undergrads)

2. Populate pages with structured data from `agent-1-cv-data.json`

### Phase 5: Features & Interactivity
1. Publication filtering (React component)
2. Search functionality
3. CV accordion
4. Print stylesheets
5. Citation export (BibTeX, RIS)

### Phase 6: SEO & Performance
1. Configure SEO meta tags for all pages
2. Add structured data (schema.org) for publications
3. Optimize images
4. Run Lighthouse audits
5. Test accessibility (WCAG 2.1 AA)

---

## File Structure (Proposed)

```
krasting-website/
├── public/
│   ├── favicon.svg
│   ├── cv-john-krasting.pdf
│   ├── images/
│   │   ├── headshot.jpg
│   │   ├── og-image.png
│   │   └── research-icons/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.astro (from Astrodeck, adapted)
│   │   │   ├── MetricsDashboard.astro (custom)
│   │   │   ├── ResearchAreasGrid.astro (custom)
│   │   │   ├── FeaturedPublicationsSection.astro (custom)
│   │   │   └── NewsSection.astro (custom)
│   │   ├── publications/
│   │   │   ├── PublicationCard.astro (from Litos, adapted)
│   │   │   ├── PublicationFilters.tsx (custom React)
│   │   │   ├── PublicationList.astro (custom)
│   │   │   └── ExportButtons.tsx (custom React)
│   │   ├── research/
│   │   │   ├── ResearchAreaDetail.astro (custom)
│   │   │   └── ResearchAreaCard.astro (custom)
│   │   ├── cv/
│   │   │   ├── CVHeader.astro (custom)
│   │   │   ├── CVSection.astro (custom accordion)
│   │   │   └── CVPrint.astro (print styles)
│   │   ├── teaching/
│   │   │   ├── CourseCard.astro (custom)
│   │   │   └── MenteeCard.astro (custom)
│   │   ├── funding/
│   │   │   └── FundingCard.astro (custom)
│   │   ├── about/
│   │   │   ├── CareerTimeline.astro (custom)
│   │   │   └── AwardCard.astro (custom)
│   │   ├── base/
│   │   │   ├── NumberTicker.tsx (from Litos)
│   │   │   ├── PageTitle.astro (from Litos)
│   │   │   ├── SectionDivider.astro (from Litos)
│   │   │   ├── Pagination.astro (from Litos)
│   │   │   ├── Badge.astro (from Litos)
│   │   │   ├── TableOfContents.astro (from Litos)
│   │   │   ├── BackToTop.astro (from Litos)
│   │   │   └── Prose.astro (from Litos)
│   │   ├── ui/
│   │   │   ├── button.tsx (from Astrodeck)
│   │   │   ├── card.tsx (from Astrodeck)
│   │   │   ├── badge.tsx (from Astrodeck)
│   │   │   ├── accordion.tsx (from Astrodeck/shadcn)
│   │   │   ├── tooltip.tsx (from Astrodeck/shadcn)
│   │   │   └── ... (other shadcn components)
│   │   ├── Header.astro (from Astrodeck, adapted)
│   │   ├── Footer.astro (from Astrodeck, adapted)
│   │   ├── SEO.astro (from Astrodeck)
│   │   ├── ThemeToggle.astro (from Astrodeck)
│   │   └── FontPreload.astro (from Astrodeck)
│   ├── layouts/
│   │   ├── BaseLayout.astro (from Astrodeck)
│   │   ├── FullWidthLayout.astro (from Astrodeck)
│   │   ├── ArticleLayout.astro (from Astrodeck)
│   │   └── MinimalLayout.astro (from Astrodeck)
│   ├── pages/
│   │   ├── index.astro (homepage)
│   │   ├── publications.astro
│   │   ├── research/
│   │   │   ├── index.astro
│   │   │   ├── sea-level-rise.astro
│   │   │   ├── ocean-dynamics.astro
│   │   │   ├── carbon-cycle.astro
│   │   │   ├── esm-development.astro
│   │   │   └── model-diagnostics.astro
│   │   ├── cv.astro
│   │   ├── teaching.astro
│   │   ├── about.astro
│   │   ├── 404.astro
│   │   ├── sitemap.xml.ts
│   │   └── rss.xml.ts
│   ├── content/
│   │   ├── config.ts
│   │   └── publications/
│   │       ├── pub-001.json
│   │       ├── pub-002.json
│   │       ├── ... (44 publications)
│   │       └── wip-001.json (5 works in progress)
│   ├── data/
│   │   ├── cv-data.json (from Agent 1)
│   │   ├── research-areas.json
│   │   ├── funding.json
│   │   ├── teaching.json
│   │   └── awards.json
│   ├── styles/
│   │   ├── globals.css (from Astrodeck, customized)
│   │   └── print.css (custom for CV printing)
│   ├── lib/
│   │   └── utils.ts (from Astrodeck)
│   └── env.d.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## Navigation Structure

### Header Navigation
- **Home** (/)
- **Research** (/research) - Dropdown menu:
  - Overview (/research)
  - Sea Level Rise (/research/sea-level-rise)
  - Ocean Dynamics (/research/ocean-dynamics)
  - Carbon Cycle (/research/carbon-cycle)
  - Model Development (/research/esm-development)
  - Diagnostics (/research/model-diagnostics)
- **Publications** (/publications)
- **Teaching** (/teaching)
- **CV** (/cv)
- **About** (/about)

### Footer Links
- **Quick Links:**
  - Home
  - Research
  - Publications
  - Teaching
  - CV
  - About
- **Resources:**
  - Download CV (PDF)
  - NOAA GFDL
  - Rutgers Environmental Sciences
  - Princeton AOS Program
- **Connect:**
  - Email
  - GitHub
  - LinkedIn
- **Legal:**
  - Privacy Policy (if needed)
  - Site Credits

---

## Responsive Breakpoints

Following Tailwind's default breakpoints (Astrodeck standard):

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 768px (sm - md)
- **Desktop**: 768px - 1024px (md - lg)
- **Large Desktop**: 1024px+ (lg - xl)

**Key Responsive Considerations:**
- Header: Mobile hamburger menu < 768px
- MetricsDashboard: 2x2 grid on mobile, 4 columns on desktop
- ResearchAreasGrid: 1 column mobile, 2 columns tablet, 3 columns desktop
- PublicationList: Full cards on desktop, compact on mobile
- CV Sections: Full width on mobile, sidebar TOC on desktop
- Footer: Stacked on mobile, multi-column on desktop

---

## Print Styles (CV Page)

**Print-Specific CSS:**
- Hide: Header, Footer, Navigation, Theme Toggle, Interactive elements
- Show: All CV sections expanded (no accordions)
- Page breaks: After major sections
- Font: Serif for body, Sans-serif for headings
- Colors: Black text on white background
- Links: Show URL in parentheses after link text
- Margins: 0.5in all sides
- Font size: 10-11pt body, 14-16pt headings

---

## Agent 2 Deliverable Summary

✅ **Template Analysis Complete**: Astrodeck (primary), Litos (specialty), Astros (skip)
✅ **Component Mapping Complete**: All site sections mapped to template components
✅ **Custom Components Identified**: 13 custom components to build
✅ **Integration Strategy Defined**: 6-phase implementation plan
✅ **File Structure Proposed**: Complete directory structure
✅ **Navigation Designed**: Header, footer, and page hierarchy

**Next Step**: Agent 3 (Content Creation) will use this component map to write all copy, create publication annotations, and develop page content using the structured CV data from Agent 1.

---

## Key Decisions for Agent 3

1. **Color Scheme**: Define in Design System (Agent 2 task 2)
   - Primary: Professional blue or Rutgers scarlet?
   - Accent colors for research areas
   - Dark mode palette

2. **Typography**: Define in Design System
   - Headings: Sans-serif (Inter, Geist, or similar)
   - Body: Sans-serif or serif?
   - Code: Monospace (for technical content)

3. **Tone of Voice** (for Agent 3):
   - Professional but approachable
   - Scholarly without jargon
   - Evidence-based (cite CV data)
   - Forward-looking (emphasize ongoing work)

4. **Publication Annotations** (for Agent 3):
   - Each publication needs:
     - 1-2 sentence summary
     - Significance/impact statement
     - Methodology note (if first author)
     - Links to related work

5. **Research Area Content** (for Agent 3):
   - Each area page needs:
     - Overview (3-4 paragraphs)
     - Key findings
     - Ongoing work
     - Collaborators
     - Impact statement

---

**Status**: Agent 2 Component Mapping COMPLETE. Ready for Design System specification.
