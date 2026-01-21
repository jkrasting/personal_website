# Dr. John P. Krasting Academic Website

## Quick Reference
- **Site**: https://www.johnkrasting.com (LIVE) - canonical URL uses www
- **Build**: `docker compose build && docker compose up -d`
- **Sitemap**: https://www.johnkrasting.com/sitemap-index.xml (submitted to Google Search Console)

## Critical Constraints

**NEVER run `npm run build` locally** - use Docker only (server memory issues will crash the build)

## About Dr. Krasting
- Physical Scientist (ZP-IV) at NOAA GFDL (2009-present)
- Lecturer at Princeton University; Adjunct Lecturer at Rutgers University
- Research: Climate modeling, sea level rise, ocean dynamics, Earth system models
- 45 peer-reviewed publications (h-index: 31)
- $8M+ research funding

## Directory Structure
```
site/src/
├── pages/           # Astro pages (index, publications, research, teaching, cv, achievements)
├── content/         # Content collections
│   ├── publications/  # 45 publication markdown files (use DOI-based names for new pubs)
│   ├── research/      # 5 research area pages
│   ├── honors/        # Awards and distinctions
│   └── softwares/     # Software and data products
├── components/      # React + Astro components
│   └── publications/  # Filtering and search components
├── data/            # cv-data.json (teaching, metrics, testimonials)
└── lib/             # Utilities (researchAreaColors.ts)
```

## Common Tasks
- **Edit content**: Modify files in `site/src/content/`
- **Edit UI text**: Update `site/src/i18n/ui.ts` (translations control most page text, not HTML templates)
- **Rebuild & deploy**: `docker compose build && docker compose up -d`
- **View logs**: `docker compose logs -f`
- **Test locally**: Visit https://johnkrasting.com after deploy

## Git
- Repository: `git@github.com:jkrasting/personal_website.git`
- Branch: `main`
- Submodules: `documents/cv/` and `documents/teaching/` (LaTeX sources)
- **No co-author tags** on commits (per project convention)
- See `.claude/commands/git-workflow.md` for detailed git procedures

## Archives
Historical design docs and procedures in `.claude/archives/`
