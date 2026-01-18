# Git Procedures - johnkrasting-site

This document contains detailed Git and submodule procedures for the johnkrasting-site project.

---

## Repository Information

- **Repository**: https://github.com/jkrasting/personal_website (private)
- **Remote**: `git@github.com:jkrasting/personal_website.git`
- **Branch**: `main`

---

## Git Submodules (LaTeX Documents)

This repository uses **Git submodules** to keep CV and teaching portfolio documents in sync with their source LaTeX repositories.

### Submodule Structure

```
documents/
├── cv/           → git@github.com:jkrasting/CV2025.git
└── teaching/     → git@github.com:jkrasting/teaching_portfolio.git
```

### PDF Locations

- **CV**: `documents/cv/resume.pdf` (17 pages, ~309K)
  - Compiled by GitHub Actions in CV2025 repo, or locally with latexmk
  - Note: May show LaTeX warnings about incomplete conditionals (non-fatal)

- **Teaching Portfolio**: `documents/teaching/teaching_portfolio.pdf` (42 pages, ~2.1M)
  - Compiled locally with xelatex
  - Note: May show undefined control sequence errors (ignored by XeLaTeX, PDF still generates correctly)

### Docker Build Integration

The `Dockerfile` automatically copies these PDFs to `site/public/` during the build:
- `documents/cv/resume.pdf` → `site/public/Krasting_CV.pdf`
- `documents/teaching/teaching_portfolio.pdf` → `site/public/teaching_portfolio.pdf`

---

## Cloning This Repository

```bash
# Clone with submodules
git clone --recurse-submodules git@github.com:jkrasting/personal_website.git

# Or if already cloned without submodules:
git submodule update --init --recursive
```

---

## Updating CV or Teaching Portfolio

1. Make changes in the respective submodule repository (CV2025 or teaching_portfolio)
2. The CV PDF is compiled automatically by GitHub Actions on push
3. Pull updated submodules in this repo:
   ```bash
   git submodule update --remote
   ```
4. Rebuild and redeploy the website to pick up changes:
   ```bash
   docker compose build
   docker compose up -d
   ```

---

## Before Building the Website

Ensure these files exist:
- `documents/cv/resume.pdf` (compile locally or pull from CV2025 repo)
- `documents/teaching/teaching_portfolio.pdf`

---

## Compiling Documents Locally

### CV (pdflatex)

```bash
cd documents/cv
latexmk -pdf -file-line-error -halt-on-error -interaction=nonstopmode resume.tex
cd ../..
```

### Teaching Portfolio (xelatex)

```bash
cd documents/teaching
xelatex -interaction=nonstopmode teaching_portfolio.tex
xelatex -interaction=nonstopmode teaching_portfolio.tex  # Run twice for references
cd ../..
```

Note: LaTeX is installed on the server (TeX Live 2025) for local compilation when needed.

---

## Committing Submodule Updates

When you update submodules, commit the new submodule pointer:

```bash
git add documents/cv documents/teaching
git commit -m "Update CV and teaching portfolio submodules"
git push
```

---

## What's Tracked vs. Excluded

### Tracked in Git
- All source code in `site/` directory
- Docker deployment configs (docker-compose.yml, Dockerfile, nginx.conf)
- Documentation (all .md files)
- Agent workflow outputs (`.agents-output/`)
- Git submodules (CV and teaching portfolio LaTeX repositories)

### Excluded (see `.gitignore`)
- `template-code/` - Reference templates and CV PDF (155M)
- `site-backup/` - Old backup directory (310M)
- `site/node_modules/` - Dependencies (250M)
- `site/dist/` - Build artifacts (1.2M)
- `photo.png`, `issue-badge-color.png` - Duplicate/reference files
- `site/public/assets/preview.png`, `mockup*.png` - Template mockup images

### Repository Size
~3-4M (optimized for essential files only)

---

## Commit Guidelines

**IMPORTANT: Commit Attribution**
- **DO NOT** add co-author attribution to commits (no `Co-Authored-By: Claude` tags)
- Keep all commits attributed solely to the repository owner
- This applies to all git operations including initial commits, feature additions, and bug fixes

---

*Last updated: January 2026*
