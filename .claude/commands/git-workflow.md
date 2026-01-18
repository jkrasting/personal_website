# Git Workflow for johnkrasting-site

## Repository
- URL: git@github.com:jkrasting/personal_website.git
- Branch: main

## Submodules
- `documents/cv/` → CV2025 repo (resume.pdf)
- `documents/teaching/` → teaching_portfolio repo

## Commit Guidelines
- NO co-author tags (project convention)
- Keep commits focused and descriptive

## Before Committing
1. If PDFs changed, update submodules: `git submodule update --remote`
2. Stage changes: `git add .`
3. Commit with descriptive message

## After Committing
Rebuild site to pick up document changes:
```bash
docker compose build && docker compose up -d
```

## Compiling LaTeX (if needed)
CV: `cd documents/cv && latexmk -pdf resume.tex`
Teaching: `cd documents/teaching && xelatex teaching_portfolio.tex`
