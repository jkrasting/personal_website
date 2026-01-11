# Work Session Notes - January 11, 2026

## Completed: Publication ID Migration & Author Contributions Feature

### Publication ID Migration (Commit: 58da51c)
- Migrated all 44 publications from numbered format (`pub-001`) to semantic IDs
- New format: `lastname-year-keyword` (e.g., `krasting-2024-steric-sea-level`)
- Created `convert_publication_ids.py` script with ID mapping
- Updated all JSON files with new IDs
- Git properly detected renames, preserving file history
- Successfully deployed to production

### Author Contributions Feature (Commit: 84b7b89)
- Extracted contribution data from CV LaTeX source (`documents/cv/my_publications.tex`)
- Created `extract_contributions.py` to parse contribution statements and percentages
- Added to all 44 publication JSON files:
  - `contributionStatement`: Narrative description of author's role
  - `contributions`: Percentage breakdown (Conceptualization, Data Production, Analysis, Interpretation, Writing)
- Implemented toggle UI component on publications page (default: OFF)
- Added contribution display section with:
  - Contribution statement text
  - Visual percentage bars for each category
  - Responsive grid layout (2-5 columns)

### Known Issues & Resolutions
1. **Memory Constraint**: Local `npm run build` killed during Astro type checking
   - Not an issue for Docker builds (completed successfully)
   - Docker build environment handles it fine
   - **Resolution**: Always use Docker builds, avoid local npm builds

2. **FIXED**: Toggle button was clicking but publications weren't updating
   - **Root Cause**: Missing contribution fields in data transformation (publications.astro)
   - **Fix 1 (Commit: 5c63719)**: Added contributionStatement and contributions to publicationsData mapping
   - **Fix 2 (Commit: cc9d9c4)**: Added fields to Zod schema in config.ts to fix TypeScript errors
   - **Status**: RESOLVED - Toggle now working correctly

### Files Modified
- `site/src/components/publications/PublicationsPage.tsx` - Added toggle state and button
- `site/src/components/publications/PublicationListClient.tsx` - Pass showContributions prop
- `site/src/components/publications/PublicationCardClient.tsx` - Display contribution section
- All 44 publication JSON files - Added contribution data
- `extract_contributions.py` - Data extraction script

### Additional Fixes
3. **FIXED**: Contribution label visibility issue
   - **Issue**: "Writing" label (last contribution) not displaying in some layouts
   - **Root Cause**: Grid/flex layout causing label text to be hidden or cut off
   - **Fix (Commit: ad401ca)**:
     - Added `min-w-0` to flex containers to allow proper shrinking
     - Added `whitespace-nowrap` to labels to prevent wrapping
     - Increased grid gap from 2 to 3 for better spacing
   - **Status**: RESOLVED

### Deployment Status
- Container: healthy and running
- Site: https://johnkrasting.com
- Basic auth: enabled (preview mode)
- Last deploy: January 11, 2026 22:54 UTC
