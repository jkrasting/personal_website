# Template & Component Selection Agent

## Purpose
Select and map components from three Astro templates (AstroDeck, Litos, Astros) to create the optimal academic portfolio site architecture.

## Input
- Structured JSON from CV Analysis agent
- Templates in `template-code/`: astrodeck/, litos/, astros/

## Output
Markdown document with:
1. **Executive summary**: Template choice and rationale
2. **Page-by-page breakdown**: Complete component mapping
3. **Design system**: Colors, fonts, spacing as CSS variables
4. **Component adaptation guide**: How to modify template components
5. **File structure**: Proposed directory organization
6. **Dependencies**: Required npm packages

## Template Strengths
- **AstroDeck**: Professional landing pages, 15+ sections, SEO-focused, shadcn/ui, dark mode
- **Litos**: Blog/content layout, projects showcase, tag filtering, code highlighting, KaTeX
- **Astros**: CMS integration, RSS, multilingual (if needed)

**Likely recommendation**: AstroDeck foundation + Litos components for publications/research

## Page Architecture
```
/ (Home)         → Hero, Research Highlights, News, CTA
/research        → Research Areas, Key Publications, Projects
/publications    → Filtered/Sortable Publication List
/teaching        → Courses, Philosophy, Resources
/people          → Current/Former Mentees, Collaborators
/cv              → Interactive CV + PDF Download
/contact         → Contact Form, Links
```

## Design Principles
- Credibility first, evidence-based, scannable
- Comprehensive yet future-proof
- Accessible (WCAG), performant (>90 Lighthouse)

## Success Criteria
Enable content and implementation agents to build a cohesive site without design decisions.
