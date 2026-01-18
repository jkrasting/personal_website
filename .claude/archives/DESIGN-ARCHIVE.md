# Design Archive - johnkrasting-site

This document archives the original design requirements and specifications from the project's initial development phase (December 2025 - January 2026). These are preserved for historical reference.

---

## Design Requirements (Original)

### Must-Haves

- **Professional & Authoritative**: Credible academic portfolio
- **Scannable**: Visitors can find key information quickly
- **Comprehensive**: All relevant professional information in one place
- **Evidence-Based**: Metrics, publications, awards prominent
- **Accessible**: WCAG 2.1 AA compliant
- **Fast**: <3s load time, >90 Lighthouse performance
- **SEO-Optimized**: Discoverable by name/research area

### Technical Stack

- **Framework**: Astro 5.x (static site generation)
- **Styling**: Tailwind CSS 4 (OKLCH color format)
- **Interactivity**: React 19 for dynamic components (filtering, search)
- **Content**: MDX + Content Collections
- **Deployment**: Self-hosted (Docker + Nginx + Caddy reverse proxy)
  - **Domain**: johnkrasting.com
  - **Location**: /home/krasting/services/johnkrasting-site/
  - **SSL**: Cloudflare Origin Certificate
  - **Infrastructure**: Containerized with Docker Compose

### Key Features (Implemented)

1. **Publication Management**
   - Filterable/sortable list (44+ publications)
   - Group by year, journal impact factor, research area
   - Search functionality
   - Export citations (BibTeX, RIS)

2. **Research Areas**
   - 5 main areas with detailed pages
   - Representative publications
   - Impact statements
   - Ongoing work

3. **Interactive CV**
   - Expandable sections
   - PDF download
   - Print-optimized

4. **Teaching Portfolio**
   - Course descriptions (3 courses)
   - Teaching philosophy
   - Student mentoring outcomes

5. **Analytics**
   - Track page views, CV downloads
   - Privacy-friendly implementation

---

## Content Priorities (Original)

### Homepage Must Include

- Professional headshot
- Clear positioning: "Climate Scientist" + "Sea Level Rise Expert"
- Quick metrics: 44 publications, $8M funding, NOAA awards
- 3-4 research highlights
- Recent publications (5 most impactful)
- News: Recent awards, publications

### Key Information to Highlight

- **Research Impact**: High-IF journals, citation counts, research funding
- **Leadership**: PI roles, model development leadership, task force co-lead
- **Independence**: First-author publications, conceptualization percentages
- **Teaching**: 10+ years at Rutgers/Princeton, course development
- **Mentoring**: 4 postdocs, 5+ undergrads, successful placements
- **Service**: 47+ journal reviews, symposia organization, community leadership

---

## Design Constraints (Original)

- **No dark patterns** - Clean, honest, professional
- **No unnecessary JavaScript** - Static where possible
- **No third-party tracking** - Privacy-respecting analytics only
- **No slow loading** - Optimize everything

---

## Success Criteria (All Achieved)

1. **Showcase qualifications**: Present credentials comprehensively
2. **Be maintainable**: Easy for Dr. Krasting to update
3. **Perform excellently**: >90 Lighthouse scores
4. **Be accessible**: WCAG 2.1 AA compliant
5. **Load quickly**: <3s to interactive
6. **Look professional**: Polished, authoritative design
7. **Work everywhere**: Responsive, cross-browser
8. **Be discoverable**: SEO-optimized
9. **Be complete**: All relevant professional information
10. **Be ready**: Production-ready, deployable

---

## Source Templates (Reference Only)

Three Astro templates were evaluated during development:
- `template-code/astrodeck/` - Professional landing pages, SEO-focused
- `template-code/litos/` - Blog/portfolio with publications layout
- `template-code/astros/` - CMS integration, multilingual support

---

*Archived: January 2026*
