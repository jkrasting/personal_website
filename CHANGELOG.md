# Changelog - johnkrasting-site

All notable changes to the Dr. John P. Krasting academic website.

## [Unreleased]

### Added
- Archive files for design documentation and Git procedures
- Command reference for Git workflow

---

## [January 2026]

### January 18, 2026
- Added Rutgers visual identity colors and updated badge styling
- Updated teaching page with outreach section, testimonials, and logos

### January 17, 2026
- **Session-Based Authentication**: Replaced HTTP Basic Auth with JavaScript session-based authentication
  - New component: `site/src/components/SessionAuth.astro`
  - Password prompt once per browser session
  - Suitable for preview/staging environments

### January 11, 2026
- **Publication ID Migration**: Converted from numbered IDs (`pub-001`) to semantic IDs (`krasting-2024-steric-sea-level`)
  - Format: `lastname-year-keyword` for better readability and SEO
  - All 45 publications migrated
  - Tool: `convert_publication_ids.py`

- **Author Contributions Feature**: Added contribution percentages to publications
  - Extracted from CV LaTeX (`documents/cv/my_publications.tex`)
  - Fields: `contributionStatement` and `contributions` (percentages)
  - Categories: Conceptualization, Data Production, Analysis, Interpretation, Writing
  - UI: Toggle button at bottom of publications page (default: OFF)
  - Tool: `extract_contributions.py`

### January 8, 2026
- Teaching section with courses, philosophy, and metrics
- Teaching portfolio PDF integration via Git submodule

### January 1, 2026
- Initial site deployment to https://johnkrasting.com
- Docker containerization with Nginx
- Caddy reverse proxy integration
- SSL via Cloudflare Origin Certificate

---

## [December 2025]

### December 31, 2025
- Project initialization
- 5-agent workflow established
- Template evaluation and selection
- CV data extraction and structuring
- Content creation for all pages
- Implementation of Astro site with Tailwind CSS 4
- Publication management system (44 publications)
- Research areas pages
- Interactive CV with PDF download

---

## Notes

- Site is live at https://johnkrasting.com
- Docker builds required (local builds crash due to memory constraints)
- See CLAUDE.md for full project documentation
