# Dr. John P. Krasting Academic Website Project

## Project Overview

This project is a professional academic website for **Dr. John P. Krasting**, a climate scientist at NOAA's Geophysical Fluid Dynamics Laboratory. The site serves as a professional portfolio showcasing research, publications, and teaching.

**CURRENT STATUS (January 3, 2026)**: ✅ Site is LIVE at https://johnkrasting.com. Now in **iterative refinement phase** - see CURRENT-STATUS.md for edit-and-deploy workflow.

## Key Context

### About Dr. Krasting

- **Current Position**: Physical Scientist (ZP-IV) at NOAA GFDL (2009-present)
- **Teaching**: Lecturer at Princeton University; Adjunct Lecturer at Rutgers University
- **Research Focus**: Climate modeling, sea level rise, ocean dynamics, Earth system models
- **Notable Achievements**:
  - 44 peer-reviewed publications (h-index: 31)
  - Publications in Nature Climate Change, Nature Geoscience, PNAS
  - $8M+ in research funding (PI/Co-PI)
  - Led $5.8M Bipartisan Infrastructure Law project
  - NOAA/OAR Employee of the Year (2021)
  - Co-developed models used in IPCC reports (GFDL CM4, ESM4, OM5)
  - Led NOAA Model Diagnostics Task Force

### Primary Audience

1. **Potential Collaborators & Graduate Students** (PRIMARY)
2. **General Public & Media** (SECONDARY)

## Project Structure

### Source Materials

- **CV**: `template-code/Krasting CV 20251231.pdf` (16 pages, comprehensive)
- **Templates**: Three Astro templates to piece together
  - `template-code/astrodeck/` - Professional landing pages, SEO-focused
  - `template-code/litos/` - Blog/portfolio with publications layout
  - `template-code/astros/` - CMS integration, multilingual support

### Agent Workflow

This project uses a 5-agent workflow to manage context efficiently:

1. **CV Analysis & Strategy Agent** (`.claude/agents/cv-analysis-strategy.md`)
   - Reads CV once, extracts all data to structured JSON
   - Proposes site architecture
   - Identifies key achievements for tenure review

2. **Template & Component Selection Agent** (`.claude/agents/template-component-selection.md`)
   - Maps template components to site needs
   - Designs information architecture
   - Creates design system specification

3. **Content Creation Agent** (`.claude/agents/content-creation.md`)
   - Writes all copy (homepage, research areas, teaching, bio, etc.)
   - Creates publication annotations
   - Develops SEO and accessibility content

4. **Implementation Agent** (`.claude/agents/implementation.md`)
   - Builds the Astro site
   - Integrates components from templates
   - Implements custom features (publication filtering, CV download, etc.)

5. **DevOps & Deployment Agent** (`.claude/agents/devops-deployment.md`)
   - Containerizes the Astro site (Docker + Nginx)
   - Manages Docker Compose configuration
   - Integrates with Caddy reverse proxy
   - Deploys to johnkrasting.com
   - Handles updates and maintenance

### Workflow Principle

**Each agent produces concrete deliverables that the next agent consumes**, eliminating the need to re-read the CV or re-make decisions:

```
CV (PDF) → Agent 1 → JSON Data → Agent 2 → Component Map → Agent 3 → Content Files → Agent 4 → Built Site → Agent 5 → Live Website
```

## Design Requirements

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

### Key Features

1. **Publication Management**
   - Filterable/sortable list (44 publications)
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
   - Privacy-friendly (Vercel Analytics or Umami)

## Content Priorities

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

## Working with This Project

### If You're Starting Fresh

1. Read this CLAUDE.md file (you're doing it!)
2. Review the agent that matches your task
3. Check what deliverables previous agents have produced
4. Execute your agent's responsibilities
5. Produce the specified outputs for the next agent

### If You're Continuing Work

1. Check `/agents/` for what's been completed
2. Look for output files (JSON, markdown, component specs)
3. Pick up where the last agent left off
4. Don't re-read the CV unless absolutely necessary

### If You're Implementing

1. You should have:
   - Structured CV data (JSON)
   - Component mapping document
   - All written content (markdown files)
2. Follow the implementation agent guide
3. Build incrementally: setup → components → content → features → deploy

## Important Constraints

### Context Management

- **Don't re-read the CV repeatedly** - Use structured outputs
- **Don't duplicate work** - Check what previous agents produced
- **Keep prompts focused** - Each agent has a specific job
- **Pass data forward** - Structured outputs enable handoffs

### Content Guidelines

- **No jargon without explanation** - Accessible to non-experts
- **Evidence-based claims** - Back statements with CV data
- **Professional tone** - Scholarly but not pompous
- **Forward-looking** - Emphasize ongoing work, future plans

### Design Constraints

- **No dark patterns** - Clean, honest, professional
- **No unnecessary JavaScript** - Static where possible
- **No third-party tracking** - Privacy-respecting analytics only
- **No slow loading** - Optimize everything

## File Organization

**Note**: As of January 1, 2026, all project files have been consolidated into a single directory.

```
/home/krasting/services/johnkrasting-site/  # Main project directory
├── CLAUDE.md                          # This file - project instructions
├── CURRENT-STATUS.md                  # Current status and workflow
├── IMPLEMENTATION-PLAN.md             # Implementation planning document
├── .claude/
│   └── agents/
│       ├── cv-analysis-strategy.md    # Agent 1
│       ├── template-component-selection.md  # Agent 2
│       ├── content-creation.md        # Agent 3
│       ├── implementation.md          # Agent 4
│       └── devops-deployment.md       # Agent 5
├── template-code/                     # Reference templates
│   ├── Krasting CV 20251231.pdf       # Source CV
│   ├── astrodeck/                     # Template option 1
│   ├── litos/                         # Template option 2
│   └── astros/                        # Template option 3
├── .agents-output/                    # Agent work products
├── photo.png                          # Headshot/profile photo
├── docker-compose.yml                 # Container orchestration
├── Dockerfile                         # Multi-stage build
├── nginx.conf                         # Web server config
├── site/                              # Astro project (live site)
│   ├── src/
│   ├── public/
│   └── astro.config.ts
├── README-DEPLOYMENT.md               # Deployment documentation
├── DEPLOYMENT-COMPLETE.md             # Deployment verification
├── EDITING.md                         # Edit and deploy workflow
└── QUICK-START.md                     # Quick reference guide
```

## Success Criteria

The final website must:

1. ✅ **Showcase qualifications**: Present credentials comprehensively
2. ✅ **Be maintainable**: Easy for Dr. Krasting to update
3. ✅ **Perform excellently**: >90 Lighthouse scores
4. ✅ **Be accessible**: WCAG 2.1 AA compliant
5. ✅ **Load quickly**: <3s to interactive
6. ✅ **Look professional**: Polished, authoritative design
7. ✅ **Work everywhere**: Responsive, cross-browser
8. ✅ **Be discoverable**: SEO-optimized
9. ✅ **Be complete**: All relevant professional information
10. ✅ **Be ready**: Production-ready, deployable

## Deployment Infrastructure (Verified & Working)

**Agent 5 has been tested and deployment infrastructure is operational.**

- **Domain**: https://johnkrasting.com (live and accessible)
- **Location**: /home/krasting/services/johnkrasting-site/
- **Container**: johnkrasting-site (running, healthy)
- **Network**: caddy-net (integrated with Caddy reverse proxy)
- **SSL**: Cloudflare Origin Certificate (valid, working)
- **Web Server**: Nginx (Alpine, optimized for static files)
- **Build**: Multi-stage Docker build (Node.js → Nginx)
- **Status**: Production-ready, currently serving test page

**Deployment Process (Proven)**:
1. Update site content in `/home/krasting/services/johnkrasting-site/site/`
2. Rebuild: `cd /home/krasting/services/johnkrasting-site && docker compose build`
3. Deploy: `docker compose up -d`
4. Verify: `curl -I https://johnkrasting.com`

**Infrastructure Details**:
- Docker Compose orchestration
- Health checks and auto-restart
- Gzip/Zstd compression
- Security headers (HSTS, CSP, X-Frame-Options)
- Resource limits (128 MB RAM, 0.5 CPU)
- **Watchtower**: Excluded from auto-updates (no `com.centurylinklabs.watchtower.enable` label)
  - Reason: Custom-built site requiring manual testing before deployment
  - Updates require: content changes → rebuild → manual deployment
- Comprehensive documentation in README-DEPLOYMENT.md

## Next Steps

### If Starting the Project

Run Agent 1 (CV Analysis & Strategy):
- Read the CV: `template-code/Krasting CV 20251231.pdf`
- Extract all data to structured JSON
- Propose site architecture
- Identify content priorities
- Output: JSON file + strategy document

### If You Have Structured Data

Run Agent 2 (Template & Component Selection):
- Review the three templates
- Map components to site needs
- Design the information architecture
- Create design system
- Output: Component mapping + design specs

### If You Have Component Specs

Run Agent 3 (Content Creation):
- Write all web copy
- Create publication annotations
- Draft teaching materials
- Develop bio and about content
- Output: Markdown files for all pages

### If You Have Content

Run Agent 4 (Implementation):
- Set up Astro project
- Integrate template components
- Build custom features
- Prepare production build
- Output: Built Astro site (dist/ folder)

### If You Have a Built Site

Run Agent 5 (DevOps & Deployment):
- Containerize the Astro site (Docker + Nginx)
- Update Docker Compose configuration
- Integrate with Caddy reverse proxy
- Deploy to johnkrasting.com
- Output: Live website at https://johnkrasting.com

## Questions to Ask

If you're unsure about something, consider:

1. **Which agent am I?** - Check your role and responsibilities
2. **What inputs do I need?** - What previous agents should have produced
3. **What outputs should I create?** - What does the next agent need
4. **Does this serve the primary audience?** - Prioritize accordingly
5. **Am I repeating work?** - Check if data already exists

## Getting Help

- **Agent files**: Read the specific agent .md file in `.claude/agents/`
- **CV questions**: Reference `template-code/Krasting CV 20251231.pdf`
- **Template questions**: Check template READMEs in `template-code/`
- **Design questions**: Wait for Agent 2's design system
- **Content questions**: Reference Agent 1's content priorities

## Remember

This is a **professional academic portfolio** for Dr. Krasting. The site demonstrates research excellence, teaching commitment, service leadership, and mentoring success—all backed by concrete evidence from his CV.
