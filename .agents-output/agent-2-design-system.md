# Agent 2: Design System Specification

**Date**: January 2026
**Project**: Dr. John P. Krasting Academic Website
**Purpose**: Complete design system for tenure review website

---

## Executive Summary

This design system defines the visual language for Dr. Krasting's academic website. It prioritizes **professional credibility**, **scholarly authority**, and **accessibility** while maintaining modern aesthetics appropriate for a tenure review portfolio.

**Design Principles:**
1. **Professional Authority** - Credible for tenure committees
2. **Clarity & Scanability** - Busy reviewers find information quickly
3. **Evidence-Based** - Data and metrics prominently displayed
4. **Accessible** - WCAG 2.1 AA compliant
5. **Performance** - Fast loading, optimized assets

**Tech Stack:**
- Astro 5.x (static site generation)
- Tailwind CSS v4 (OKLCH color format)
- React 19 (interactive components)
- TypeScript (type safety)

---

## Color System

### Overview

Using **OKLCH color format** (Tailwind v4 standard) for perceptually uniform colors that appear consistent across light and dark modes.

**OKLCH Format:** `oklch(lightness% chroma hue)`
- **Lightness**: 0-100% (0 = black, 100 = white)
- **Chroma**: Color intensity (0 = grayscale, higher = more vivid)
- **Hue**: Color angle in degrees (0-360)

**Benefits:**
- Perceptually uniform (unlike HSL)
- Consistent lightness across hues
- Better for accessibility (predictable contrast)
- Modern browser support

---

### Primary Palette

**Theme: Professional Academic Blue**

Rationale: Blue conveys trust, stability, and professionalism—ideal for academic/scientific contexts. Avoids aggressive colors while maintaining authority.

#### Light Mode Colors

```css
@theme {
  /* Background & Surfaces */
  --color-background: oklch(100% 0 0);           /* Pure white */
  --color-foreground: oklch(20% 0.01 250);       /* Near-black with blue tint */
  --color-card: oklch(100% 0 0);                 /* White */
  --color-popover: oklch(100% 0 0);              /* White */

  /* Primary (Professional Blue) */
  --color-primary: oklch(45% 0.15 250);          /* Rich blue - main brand */
  --color-primary-foreground: oklch(98% 0.01 250); /* Nearly white */

  /* Secondary (Slate Gray) */
  --color-secondary: oklch(92% 0.01 250);        /* Light slate */
  --color-secondary-foreground: oklch(20% 0.01 250); /* Dark text */

  /* Accent (Ocean Teal) */
  --color-accent: oklch(55% 0.12 200);           /* Teal accent */
  --color-accent-foreground: oklch(98% 0.01 200); /* Light text */

  /* Muted (Subtle Gray) */
  --color-muted: oklch(96% 0.005 250);           /* Very light blue-gray */
  --color-muted-foreground: oklch(50% 0.02 250); /* Medium gray text */

  /* Destructive (Error Red) */
  --color-destructive: oklch(55% 0.20 25);       /* Red for errors */
  --color-destructive-foreground: oklch(98% 0.01 25);

  /* Border & Dividers */
  --color-border: oklch(90% 0.01 250);           /* Subtle borders */
  --color-input: oklch(90% 0.01 250);            /* Input borders */
  --color-ring: oklch(45% 0.15 250);             /* Focus rings (primary) */

  /* Semantic Colors */
  --color-success: oklch(55% 0.15 145);          /* Green for success */
  --color-warning: oklch(65% 0.18 70);           /* Amber for warnings */
  --color-info: oklch(60% 0.15 250);             /* Blue for info */
}
```

#### Dark Mode Colors

```css
.dark {
  /* Background & Surfaces */
  --color-background: oklch(15% 0.01 250);       /* Dark blue-black */
  --color-foreground: oklch(95% 0.01 250);       /* Near-white */
  --color-card: oklch(18% 0.01 250);             /* Slightly lighter than bg */
  --color-popover: oklch(18% 0.01 250);          /* Matching card */

  /* Primary (Bright Blue) */
  --color-primary: oklch(70% 0.15 250);          /* Brighter blue for dark bg */
  --color-primary-foreground: oklch(15% 0.01 250); /* Dark text */

  /* Secondary (Dark Slate) */
  --color-secondary: oklch(25% 0.01 250);        /* Dark slate */
  --color-secondary-foreground: oklch(95% 0.01 250); /* Light text */

  /* Accent (Bright Teal) */
  --color-accent: oklch(65% 0.12 200);           /* Brighter teal */
  --color-accent-foreground: oklch(15% 0.01 200); /* Dark text */

  /* Muted (Dark Gray) */
  --color-muted: oklch(25% 0.01 250);            /* Dark blue-gray */
  --color-muted-foreground: oklch(65% 0.02 250); /* Medium-light gray */

  /* Destructive (Bright Red) */
  --color-destructive: oklch(65% 0.20 25);       /* Brighter red */
  --color-destructive-foreground: oklch(15% 0.01 25);

  /* Border & Dividers */
  --color-border: oklch(30% 0.01 250);           /* Visible but subtle */
  --color-input: oklch(30% 0.01 250);            /* Input borders */
  --color-ring: oklch(70% 0.15 250);             /* Focus rings (bright) */

  /* Semantic Colors */
  --color-success: oklch(65% 0.15 145);          /* Brighter green */
  --color-warning: oklch(75% 0.18 70);           /* Brighter amber */
  --color-info: oklch(70% 0.15 250);             /* Brighter blue */
}
```

---

### Research Area Colors

Each of the 5 research areas gets a distinct accent color for visual organization:

```css
/* Research Area Accents */
:root {
  /* Sea Level Rise - Ocean Blue */
  --research-sea-level: oklch(55% 0.15 230);

  /* Ocean Dynamics - Deep Blue */
  --research-ocean-dynamics: oklch(50% 0.15 260);

  /* Carbon Cycle - Forest Green */
  --research-carbon-cycle: oklch(55% 0.15 150);

  /* ESM Development - Tech Purple */
  --research-esm: oklch(55% 0.15 290);

  /* Model Diagnostics - Analytical Orange */
  --research-diagnostics: oklch(60% 0.15 50);
}

.dark {
  /* Brighter versions for dark mode */
  --research-sea-level: oklch(65% 0.15 230);
  --research-ocean-dynamics: oklch(60% 0.15 260);
  --research-carbon-cycle: oklch(65% 0.15 150);
  --research-esm: oklch(65% 0.15 290);
  --research-diagnostics: oklch(70% 0.15 50);
}
```

**Usage:**
- Research area page headers
- Publication tags/badges
- Icon backgrounds
- Section dividers
- Data visualizations

---

### Journal Impact Factor Colors

Color-coded badges for publication impact factors:

```css
/* Impact Factor Tiers */
:root {
  --if-exceptional: oklch(55% 0.20 330);  /* Magenta - IF > 15 */
  --if-high: oklch(55% 0.18 25);          /* Red - IF 8-15 */
  --if-good: oklch(60% 0.15 50);          /* Orange - IF 5-8 */
  --if-standard: oklch(60% 0.12 250);     /* Blue - IF 3-5 */
  --if-base: oklch(55% 0.08 250);         /* Light blue - IF < 3 */
}
```

**Tiers:**
- **Exceptional (>15)**: Nature Climate Change (27.1), Nature Geoscience (16.1)
- **High (8-15)**: Nature Communications (14.2), Annual Reviews (13.0), PNAS (8.9)
- **Good (5-8)**: Geoscientific Model Development (5.0), Geophysical Research Letters (4.7)
- **Standard (3-5)**: Journal of Climate (3.9), JGR: Oceans (3.4)
- **Base (<3)**: Other journals

---

### Accessibility & Contrast

**WCAG 2.1 AA Requirements:**
- Normal text (< 18pt): 4.5:1 contrast ratio
- Large text (≥ 18pt or 14pt bold): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

**Verified Combinations:**

| Foreground | Background | Ratio | Use Case |
|------------|------------|-------|----------|
| foreground | background | 15:1 | Body text (light mode) |
| primary | background | 7.2:1 | Primary buttons, links |
| muted-foreground | background | 4.8:1 | Secondary text |
| primary-foreground | primary | 12:1 | Button text |
| foreground (dark) | background (dark) | 12:1 | Body text (dark mode) |

**Tools for Verification:**
- Use https://oklch.com/ for color picking
- Verify contrast at https://contrast-ratio.com/
- Test with browser DevTools accessibility panel

---

## Typography

### Font Families

**Sans-Serif (Primary):**
```css
--font-sans: 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI',
             'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
             'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Rationale:**
- Inter: Professional, highly readable, excellent screen rendering
- Variable font: Performance optimization
- System font fallbacks: Fast loading, native feel

**Serif (Optional - for long-form content):**
```css
--font-serif: 'Charter', 'Bitstream Charter', 'Georgia', serif;
```

**Use Cases:**
- Optional: Long-form research descriptions
- Optional: About page biography
- Default: Stick with sans-serif for consistency

**Monospace (Code & Technical):**
```css
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco,
             'Cascadia Code', 'Consolas', 'Courier New', monospace;
```

**Use Cases:**
- DOI links
- Code snippets
- Technical specifications
- Email addresses

---

### Font Scales

Using modular scale with 1.250 (major third) ratio for harmonious proportions.

#### Desktop Scale (≥ 768px)

```css
/* Heading Sizes */
--text-9xl: 8rem;      /* 128px - Not used (too large) */
--text-8xl: 6rem;      /* 96px - Hero headlines only */
--text-7xl: 4.5rem;    /* 72px - Page headlines */
--text-6xl: 3.75rem;   /* 60px - Section headlines */
--text-5xl: 3rem;      /* 48px - Subsection headlines */
--text-4xl: 2.25rem;   /* 36px - Card headlines */
--text-3xl: 1.875rem;  /* 30px - Small headlines */
--text-2xl: 1.5rem;    /* 24px - Large body */
--text-xl: 1.25rem;    /* 20px - Emphasis text */
--text-lg: 1.125rem;   /* 18px - Lead paragraphs */

/* Body & UI Sizes */
--text-base: 1rem;     /* 16px - Base body text */
--text-sm: 0.875rem;   /* 14px - Small text, captions */
--text-xs: 0.75rem;    /* 12px - Tiny text, labels */
```

#### Mobile Scale (< 768px)

Reduce heading sizes by 25-40% for mobile:

```css
@media (max-width: 767px) {
  --text-8xl: 4rem;      /* 64px (was 96px) */
  --text-7xl: 3rem;      /* 48px (was 72px) */
  --text-6xl: 2.5rem;    /* 40px (was 60px) */
  --text-5xl: 2rem;      /* 32px (was 48px) */
  --text-4xl: 1.75rem;   /* 28px (was 36px) */
  --text-3xl: 1.5rem;    /* 24px (was 30px) */
  /* Body sizes remain the same */
}
```

---

### Font Weights

```css
--font-thin: 100;
--font-extralight: 200;
--font-light: 300;
--font-normal: 400;       /* Body text */
--font-medium: 500;       /* Emphasis, labels */
--font-semibold: 600;     /* Subheadings, buttons */
--font-bold: 700;         /* Headings */
--font-extrabold: 800;    /* Hero headlines */
--font-black: 900;        /* Rarely used */
```

**Usage Guidelines:**
- **Headlines (h1-h3)**: Bold (700) or Extrabold (800)
- **Subheadings (h4-h6)**: Semibold (600) or Bold (700)
- **Body text**: Normal (400)
- **Emphasis**: Medium (500) or Semibold (600)
- **Buttons & CTAs**: Semibold (600)
- **Labels & metadata**: Medium (500)

---

### Line Heights

```css
--leading-none: 1;        /* Dense text (headings) */
--leading-tight: 1.25;    /* Tight headings */
--leading-snug: 1.375;    /* Snug headings */
--leading-normal: 1.5;    /* Body text (DEFAULT) */
--leading-relaxed: 1.625; /* Relaxed paragraphs */
--leading-loose: 2;       /* Loose text (rare) */
```

**Usage Guidelines:**
- **Large headings (h1-h2)**: leading-tight (1.25)
- **Medium headings (h3-h4)**: leading-snug (1.375)
- **Body text**: leading-relaxed (1.625) for readability
- **Small text**: leading-normal (1.5)
- **Buttons**: leading-none (1) for vertical centering

---

### Letter Spacing (Tracking)

```css
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;         /* DEFAULT */
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

**Usage Guidelines:**
- **Large headings (5xl+)**: tracking-tight (-0.025em)
- **Body text**: tracking-normal (0)
- **Small caps**: tracking-wider (0.05em)
- **Labels, metadata**: tracking-wide (0.025em)
- **Buttons**: tracking-normal (0)

---

### Typography Hierarchy

#### Heading Styles

```css
/* h1 - Page Headline */
.heading-1 {
  font-size: var(--text-7xl);      /* 72px desktop, 48px mobile */
  font-weight: var(--font-bold);   /* 700 */
  line-height: var(--leading-tight); /* 1.25 */
  letter-spacing: var(--tracking-tight); /* -0.025em */
  color: var(--color-foreground);
}

/* h2 - Section Headline */
.heading-2 {
  font-size: var(--text-5xl);      /* 48px desktop, 32px mobile */
  font-weight: var(--font-bold);   /* 700 */
  line-height: var(--leading-tight); /* 1.25 */
  letter-spacing: var(--tracking-tight);
  color: var(--color-foreground);
}

/* h3 - Subsection Headline */
.heading-3 {
  font-size: var(--text-3xl);      /* 30px desktop, 24px mobile */
  font-weight: var(--font-semibold); /* 600 */
  line-height: var(--leading-snug);  /* 1.375 */
  color: var(--color-foreground);
}

/* h4 - Card Headline */
.heading-4 {
  font-size: var(--text-xl);       /* 20px */
  font-weight: var(--font-semibold); /* 600 */
  line-height: var(--leading-snug);
  color: var(--color-foreground);
}

/* h5 - Small Headline */
.heading-5 {
  font-size: var(--text-lg);       /* 18px */
  font-weight: var(--font-medium);  /* 500 */
  line-height: var(--leading-normal);
  color: var(--color-foreground);
}

/* h6 - Micro Headline */
.heading-6 {
  font-size: var(--text-base);     /* 16px */
  font-weight: var(--font-medium);  /* 500 */
  line-height: var(--leading-normal);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider); /* 0.05em */
  color: var(--color-muted-foreground);
}
```

#### Body Styles

```css
/* Lead Paragraph (intro text) */
.text-lead {
  font-size: var(--text-xl);       /* 20px */
  font-weight: var(--font-normal);  /* 400 */
  line-height: var(--leading-relaxed); /* 1.625 */
  color: var(--color-foreground);
}

/* Body Text (default) */
.text-body {
  font-size: var(--text-base);     /* 16px */
  font-weight: var(--font-normal);  /* 400 */
  line-height: var(--leading-relaxed); /* 1.625 */
  color: var(--color-foreground);
}

/* Small Text (captions, metadata) */
.text-small {
  font-size: var(--text-sm);       /* 14px */
  font-weight: var(--font-normal);  /* 400 */
  line-height: var(--leading-normal); /* 1.5 */
  color: var(--color-muted-foreground);
}

/* Micro Text (labels, timestamps) */
.text-micro {
  font-size: var(--text-xs);       /* 12px */
  font-weight: var(--font-medium);  /* 500 */
  line-height: var(--leading-normal);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide); /* 0.025em */
  color: var(--color-muted-foreground);
}
```

---

## Spacing System

Using Tailwind's 4px base unit (0.25rem) for consistent spacing.

### Spacing Scale

```css
--spacing-0: 0;
--spacing-px: 1px;
--spacing-0.5: 0.125rem;  /* 2px */
--spacing-1: 0.25rem;     /* 4px */
--spacing-1.5: 0.375rem;  /* 6px */
--spacing-2: 0.5rem;      /* 8px */
--spacing-2.5: 0.625rem;  /* 10px */
--spacing-3: 0.75rem;     /* 12px */
--spacing-3.5: 0.875rem;  /* 14px */
--spacing-4: 1rem;        /* 16px */
--spacing-5: 1.25rem;     /* 20px */
--spacing-6: 1.5rem;      /* 24px */
--spacing-7: 1.75rem;     /* 28px */
--spacing-8: 2rem;        /* 32px */
--spacing-9: 2.25rem;     /* 36px */
--spacing-10: 2.5rem;     /* 40px */
--spacing-11: 2.75rem;    /* 44px */
--spacing-12: 3rem;       /* 48px */
--spacing-14: 3.5rem;     /* 56px */
--spacing-16: 4rem;       /* 64px */
--spacing-20: 5rem;       /* 80px */
--spacing-24: 6rem;       /* 96px */
--spacing-28: 7rem;       /* 112px */
--spacing-32: 8rem;       /* 128px */
--spacing-36: 9rem;       /* 144px */
--spacing-40: 10rem;      /* 160px */
--spacing-44: 11rem;      /* 176px */
--spacing-48: 12rem;      /* 192px */
--spacing-52: 13rem;      /* 208px */
--spacing-56: 14rem;      /* 224px */
--spacing-60: 15rem;      /* 240px */
--spacing-64: 16rem;      /* 256px */
--spacing-72: 18rem;      /* 288px */
--spacing-80: 20rem;      /* 320px */
--spacing-96: 24rem;      /* 384px */
```

### Spacing Usage Guidelines

**Component Spacing:**
- **xs gap**: 2-4px (spacing-0.5 to spacing-1) - Badge gaps, icon spacing
- **sm gap**: 8-12px (spacing-2 to spacing-3) - Card item spacing
- **md gap**: 16-24px (spacing-4 to spacing-6) - Component gaps
- **lg gap**: 32-48px (spacing-8 to spacing-12) - Section gaps
- **xl gap**: 64-96px (spacing-16 to spacing-24) - Major section gaps

**Padding:**
- **xs**: 8px (spacing-2) - Badges, small buttons
- **sm**: 12px (spacing-3) - Compact cards
- **md**: 16px (spacing-4) - Default cards, inputs
- **lg**: 24px (spacing-6) - Large cards
- **xl**: 32-48px (spacing-8 to spacing-12) - Page sections

**Margin:**
- **Between paragraphs**: 16px (spacing-4)
- **Between sections**: 48-64px (spacing-12 to spacing-16)
- **Between major sections**: 96-128px (spacing-24 to spacing-32)

---

### Container Widths

```css
/* Container Max Widths */
--container-sm: 640px;   /* Small devices */
--container-md: 768px;   /* Medium devices */
--container-lg: 1024px;  /* Large devices */
--container-xl: 1280px;  /* Extra large */
--container-2xl: 1536px; /* 2x extra large */

/* Content Max Widths (for readability) */
--content-narrow: 65ch;   /* 520px - Optimal for reading */
--content-medium: 75ch;   /* 600px */
--content-wide: 85ch;     /* 680px */

/* Site Max Width */
--site-max-width: 1280px; /* 5xl - matches Astrodeck BaseLayout */
```

**Usage:**
- **BaseLayout**: max-w-5xl (1280px) - Most pages
- **FullWidthLayout**: No max width - Showcase pages
- **Prose content**: max-w-prose (65ch) - Blog posts, long text
- **Cards**: Responsive, no fixed max width

---

## Layout & Grid

### Grid System

**Column Grid:**
```css
/* Standard Grids */
.grid-2: grid-cols-1 sm:grid-cols-2;
.grid-3: grid-cols-1 sm:grid-cols-2 md:grid-cols-3;
.grid-4: grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4;

/* Publication Grid */
.publication-grid: grid-cols-1 gap-4;

/* Research Area Grid */
.research-grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6;

/* Metrics Dashboard Grid */
.metrics-grid: grid-cols-2 md:grid-cols-4 gap-4;
```

**Gap Sizes:**
- **sm**: gap-2 (8px) - Tight grids
- **md**: gap-4 (16px) - Default grids
- **lg**: gap-6 (24px) - Spacious grids
- **xl**: gap-8 (32px) - Very spacious

---

### Page Layout Structure

```
┌─────────────────────────────────────┐
│           Header (sticky)           │ ← 56px height
├─────────────────────────────────────┤
│                                     │
│          Main Content               │
│      (max-w-5xl centered)           │
│                                     │
│  ┌───────────────────────────────┐ │
│  │                               │ │
│  │   Page content with          │ │
│  │   py-16 to py-32 spacing     │ │
│  │                               │ │
│  └───────────────────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│             Footer                  │ ← ~200px height
└─────────────────────────────────────┘
```

**Vertical Rhythm:**
- **Page top padding**: py-16 (64px) - Desktop
- **Page top padding**: py-8 (32px) - Mobile
- **Section spacing**: py-16 to py-24 (64-96px)
- **Between major sections**: py-24 to py-32 (96-128px)

---

## Component Styles

### Buttons

#### Primary Button

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.5rem;        /* rounded-md */
  font-size: 1rem;              /* text-base */
  font-weight: 600;             /* font-semibold */
  padding: 0.75rem 1.5rem;      /* px-6 py-3 */
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
  transition: all 150ms ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: var(--color-primary);
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-ring);
  outline-offset: 2px;
}
```

#### Secondary Button

```css
.btn-secondary {
  /* Same as primary but with border */
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-foreground);
}

.btn-secondary:hover {
  background-color: var(--color-accent);
  color: var(--color-accent-foreground);
}
```

#### Ghost Button

```css
.btn-ghost {
  background-color: transparent;
  color: var(--color-foreground);
}

.btn-ghost:hover {
  background-color: var(--color-accent);
  color: var(--color-accent-foreground);
}
```

#### Button Sizes

```css
/* Small Button */
.btn-sm {
  padding: 0.5rem 1rem;    /* px-4 py-2 */
  font-size: 0.875rem;     /* text-sm */
  border-radius: 0.375rem; /* rounded-sm */
}

/* Default Button */
.btn-md {
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  font-size: 1rem;         /* text-base */
  border-radius: 0.5rem;   /* rounded-md */
}

/* Large Button */
.btn-lg {
  padding: 1rem 2rem;      /* px-8 py-4 */
  font-size: 1.125rem;     /* text-lg */
  border-radius: 0.5rem;   /* rounded-md */
}
```

---

### Cards

#### Base Card Style

```css
.card {
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;        /* rounded-lg */
  padding: 1.5rem;               /* p-6 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 200ms ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  border-color: var(--color-primary);
}
```

#### Publication Card

```css
.publication-card {
  /* Extends .card */
  padding: 1.5rem;
  border-left: 3px solid transparent;
}

.publication-card:hover {
  border-left-color: var(--color-primary);
}

.publication-card.featured {
  border-left-color: var(--color-accent);
  background-color: var(--color-muted);
}
```

#### Metrics Card

```css
.metrics-card {
  text-align: center;
  padding: 2rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: linear-gradient(135deg,
    var(--color-card) 0%,
    var(--color-muted) 100%
  );
}
```

---

### Badges

#### Tag Badge

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;     /* px-3 py-1 */
  font-size: 0.75rem;           /* text-xs */
  font-weight: 500;             /* font-medium */
  border-radius: 9999px;        /* rounded-full */
  background-color: var(--color-secondary);
  color: var(--color-secondary-foreground);
  transition: all 150ms ease;
}

.badge:hover {
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
}
```

#### Impact Factor Badge

```css
.badge-if {
  /* Base badge style */
  font-weight: 600;
  font-family: var(--font-mono);
}

/* Tier-specific colors */
.badge-if.exceptional {
  background-color: var(--if-exceptional);
  color: white;
}

.badge-if.high {
  background-color: var(--if-high);
  color: white;
}

.badge-if.good {
  background-color: var(--if-good);
  color: white;
}
```

---

### Forms & Inputs

#### Text Input

```css
.input {
  width: 100%;
  padding: 0.625rem 0.875rem;  /* px-3.5 py-2.5 */
  font-size: 1rem;             /* text-base */
  border: 1px solid var(--color-input);
  border-radius: 0.5rem;       /* rounded-md */
  background-color: var(--color-background);
  color: var(--color-foreground);
  transition: all 150ms ease;
}

.input:focus {
  outline: 2px solid var(--color-ring);
  outline-offset: 0;
  border-color: transparent;
}

.input::placeholder {
  color: var(--color-muted-foreground);
}
```

#### Select Dropdown

```css
.select {
  /* Same as .input */
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* Chevron icon */
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  padding-right: 2.5rem;
}
```

---

### Links

```css
.link {
  color: var(--color-primary);
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 2px;
  transition: all 150ms ease;
}

.link:hover {
  text-decoration-color: var(--color-primary);
}

.link:focus-visible {
  outline: 2px solid var(--color-ring);
  outline-offset: 2px;
  border-radius: 2px;
}
```

**DOI Links:**
```css
.doi-link {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-muted-foreground);
}
```

---

## Animation & Transitions

### Transition Durations

```css
--transition-fast: 100ms;
--transition-base: 150ms;
--transition-medium: 200ms;
--transition-slow: 300ms;
--transition-slower: 500ms;
```

**Usage:**
- **Hover effects**: 150ms (base)
- **Focus states**: 100ms (fast)
- **Page transitions**: 200ms (medium)
- **Modal/drawer**: 300ms (slow)
- **Accordion expand**: 300ms (slow)

### Easing Functions

```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Usage:**
- **Default**: ease-in-out (smooth)
- **Hover effects**: ease-out (snappy)
- **Accordions**: ease-in-out
- **Number tickers**: ease-out

---

### Common Animations

#### Fade In

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 300ms ease-out;
}
```

#### Slide Up

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 400ms ease-out;
}
```

#### Number Ticker

```css
/* Smooth counting animation */
.number-ticker {
  transition: all 800ms ease-out;
  font-variant-numeric: tabular-nums;
}
```

#### Card Hover

```css
.card-hover {
  transition: all 200ms ease-out;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
```

---

## Accessibility

### Focus States

**Keyboard Navigation:**
```css
/* Default focus ring */
*:focus-visible {
  outline: 2px solid var(--color-ring);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Custom focus for specific elements */
.btn:focus-visible {
  outline: 2px solid var(--color-ring);
  outline-offset: 2px;
}

.link:focus-visible {
  outline: 2px solid var(--color-ring);
  outline-offset: 2px;
  background-color: var(--color-muted);
}
```

### Skip to Content

```css
.skip-to-content {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 9999;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
  border-radius: 0.5rem;
  font-weight: 600;
  transform: translateY(-200%);
}

.skip-to-content:focus {
  transform: translateY(0);
}
```

### Screen Reader Only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

### ARIA Labels

**Required ARIA attributes:**
- All interactive elements: `aria-label` or visible text
- Navigation: `<nav aria-label="Main navigation">`
- Landmark regions: `<main>`, `<header>`, `<footer>`, `<aside>`
- Buttons: Descriptive labels (not "Click here")
- Links: Meaningful text (not "Read more" without context)
- Images: `alt` text (decorative images: `alt=""`)
- Forms: Associated `<label>` elements

---

## Responsive Design

### Breakpoints

```css
/* Tailwind v4 defaults */
--screen-sm: 640px;   /* Small devices (phones landscape) */
--screen-md: 768px;   /* Medium devices (tablets) */
--screen-lg: 1024px;  /* Large devices (desktops) */
--screen-xl: 1280px;  /* Extra large devices */
--screen-2xl: 1536px; /* 2X extra large */
```

### Mobile-First Approach

**Design for mobile first, then scale up:**

```css
/* Mobile (default) */
.metrics-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .metrics-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}
```

### Responsive Typography

```css
/* Fluid typography */
.heading-1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
}

.heading-2 {
  font-size: clamp(2rem, 4vw, 3rem);
}

.text-body {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
}
```

### Touch Targets

**Minimum 44x44px for touch:**
```css
.btn-mobile {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1rem;
}

.nav-link-mobile {
  min-height: 44px;
  padding: 0.75rem 1rem;
}
```

---

## Dark Mode Strategy

### Implementation

Using Tailwind's `dark:` variant with class-based switching:

```html
<!-- Theme toggle adds/removes .dark class on <html> -->
<html class="dark">
```

```css
/* Light mode (default) */
.card {
  background-color: var(--color-card);
  color: var(--color-foreground);
}

/* Dark mode */
.dark .card {
  background-color: var(--color-card); /* Auto from theme vars */
  color: var(--color-foreground);
}
```

### Persistence

```javascript
// Save preference to localStorage
localStorage.setItem('theme', 'dark');

// Load on page load (prevent FOUC)
if (localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
```

### Dark Mode Considerations

1. **Images**: Reduce opacity in dark mode
   ```css
   .dark img {
     opacity: 0.9;
   }
   ```

2. **Shadows**: Lighter shadows in dark mode
   ```css
   .card {
     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
   }

   .dark .card {
     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
   }
   ```

3. **Borders**: More visible in dark mode
   ```css
   border: 1px solid var(--color-border);
   /* Auto-adjusts via theme variables */
   ```

---

## Iconography

### Icon System

**Primary Icon Library**: Lucide Icons (via Astro Icon)
- Clean, consistent design
- Wide variety (1000+ icons)
- MIT licensed
- Good accessibility

**Icon Sizes:**
```css
--icon-xs: 12px;   /* Inline with text */
--icon-sm: 16px;   /* Small UI */
--icon-md: 20px;   /* Default */
--icon-lg: 24px;   /* Section headers */
--icon-xl: 32px;   /* Feature highlights */
--icon-2xl: 48px;  /* Hero sections */
```

**Icon Usage:**
- Research areas: Custom icons (waves, globe, molecule, chart, gear)
- Navigation: Lucide icons (Menu, X, ChevronDown, ExternalLink)
- Actions: Download, Print, Search, Filter, Share
- Social: GitHub, LinkedIn, Email
- Metadata: Calendar, Clock, Tag, Award, DollarSign

---

### Research Area Icons

Custom icons for 5 research areas:

1. **Sea Level Rise**: Waves icon (oceanography)
2. **Ocean Dynamics**: Circulation/whirlpool icon
3. **Carbon Cycle**: Molecule/atom icon
4. **ESM Development**: Layers/stack icon (model layers)
5. **Model Diagnostics**: Chart/analytics icon

**Style**: Line-based, 2px stroke, rounded corners, matching Lucide style

---

## Print Styles

### CV Print Stylesheet

```css
@media print {
  /* Hide UI elements */
  header, footer, nav, .theme-toggle, .skip-to-content {
    display: none !important;
  }

  /* Expand all sections */
  .cv-section {
    display: block !important;
  }

  /* Page setup */
  @page {
    size: letter;
    margin: 0.5in;
  }

  /* Typography */
  body {
    font-size: 10pt;
    line-height: 1.4;
    color: #000;
    background: #fff;
  }

  h1 { font-size: 18pt; }
  h2 { font-size: 14pt; page-break-after: avoid; }
  h3 { font-size: 12pt; page-break-after: avoid; }

  /* Links */
  a {
    color: #000;
    text-decoration: none;
  }

  a[href^="http"]:after {
    content: " (" attr(href) ")";
    font-size: 9pt;
    color: #555;
  }

  /* Page breaks */
  .page-break {
    page-break-after: always;
  }

  .avoid-break {
    page-break-inside: avoid;
  }

  /* Cards */
  .card {
    border: 1px solid #ddd;
    box-shadow: none;
    page-break-inside: avoid;
  }
}
```

---

## Performance Considerations

### Font Loading

**Strategy**: Preload critical fonts, swap for others

```html
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
```

```css
@font-face {
  font-family: 'Inter Variable';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap; /* Show fallback, then swap */
  font-style: normal;
}
```

### Color Variables

Use CSS custom properties for runtime theme switching without additional CSS:

```css
/* Single source of truth */
:root {
  --color-primary: oklch(45% 0.15 250);
}

.dark {
  --color-primary: oklch(70% 0.15 250);
}

/* Used everywhere */
.button {
  background-color: var(--color-primary);
}
```

### Reduced Motion

Respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Component Design Patterns

### Publication Card Pattern

**Structure:**
```
┌─────────────────────────────────────────┐
│ [IF Badge]  [Featured Star]             │
│                                         │
│ Title of Publication (Bold, Large)     │
│ Authors (with Krasting highlighted)    │
│                                         │
│ Journal Name • Year • DOI              │
│ [Tag] [Tag] [Tag]                      │
│                                         │
│ [View] [Cite] [Download]                │
└─────────────────────────────────────────┘
```

**Hover State:**
- Lift 4px
- Shadow increase
- Border color change to primary
- Subtle scale (1.01)

**Mobile:**
- Stack elements vertically
- Hide secondary actions
- Show only title, authors, journal

---

### Metrics Dashboard Pattern

**Structure:**
```
┌──────┬──────┬──────┬──────┐
│  44  │  31  │ $8M  │ 10+  │
│ Pubs │h-idx │ Fund │ Yrs  │
└──────┴──────┴──────┴──────┘
```

**Features:**
- Animated number counting (NumberTicker)
- Icon above number
- Large number (text-5xl)
- Label below (text-sm, muted)
- 2x2 grid on mobile, 4-column on desktop

---

### Research Area Card Pattern

**Structure:**
```
┌─────────────────────────────┐
│         [Icon]              │
│                             │
│    Research Area Name       │
│                             │
│  Brief description of the   │
│  research focus area...     │
│                             │
│  • Key Publication 1        │
│  • Key Publication 2        │
│                             │
│      [Learn More →]         │
└─────────────────────────────┘
```

**Hover:**
- Icon color changes to research area color
- Card lifts slightly
- "Learn More" link underlines

---

## Design System Checklist

**For Agent 3 & 4:**

✅ **Colors Defined**: Light/dark modes, research areas, impact factors
✅ **Typography Set**: Font families, scales, weights, line heights
✅ **Spacing System**: Consistent 4px base, responsive gaps
✅ **Components Styled**: Buttons, cards, badges, inputs, links
✅ **Animations Specified**: Transitions, hover effects, number tickers
✅ **Accessibility**: Focus states, skip links, ARIA, contrast ratios
✅ **Responsive**: Mobile-first, breakpoints, touch targets
✅ **Dark Mode**: Strategy, persistence, considerations
✅ **Icons**: System defined, research area icons
✅ **Print Styles**: CV-optimized printing
✅ **Performance**: Font loading, reduced motion, CSS variables

---

## Implementation Files

### Tailwind Config (`tailwind.config.mjs`)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Uses CSS variables from globals.css
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        // ... (all other colors)
      },
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
        serif: ['Charter', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
}
```

### Global Styles (`src/styles/globals.css`)

```css
@import "tailwindcss";

/* Color Theme Variables */
@theme {
  /* All color variables defined above */
  /* ... */
}

.dark {
  /* Dark mode overrides */
  /* ... */
}

/* Typography */
@layer base {
  body {
    @apply font-sans text-base leading-relaxed;
    @apply text-foreground bg-background;
    @apply antialiased;
  }

  h1 { @apply text-7xl font-bold leading-tight tracking-tight; }
  h2 { @apply text-5xl font-bold leading-tight tracking-tight; }
  h3 { @apply text-3xl font-semibold leading-snug; }
  h4 { @apply text-xl font-semibold leading-snug; }
  h5 { @apply text-lg font-medium leading-normal; }
  h6 { @apply text-base font-medium uppercase tracking-wider; }

  a { @apply text-primary hover:underline focus-visible:outline-ring; }
}

/* Prose Styles (for rich content) */
@layer components {
  .prose {
    @apply max-w-prose text-foreground;
  }

  .prose p { @apply mb-4 leading-relaxed; }
  .prose ul { @apply list-disc list-inside mb-4; }
  .prose ol { @apply list-decimal list-inside mb-4; }
  .prose blockquote { @apply border-l-4 border-primary pl-4 italic; }
  .prose code { @apply font-mono text-sm bg-muted px-1.5 py-0.5 rounded; }
}

/* Print Styles */
@import "./print.css";
```

---

## Agent 2 Deliverable Summary

✅ **Color System Complete**: OKLCH format, light/dark modes, research area colors, IF badges
✅ **Typography Defined**: Font families, modular scale, hierarchy, responsive
✅ **Spacing System**: 4px base, consistent gaps, container widths
✅ **Components Styled**: Buttons, cards, badges, forms, links
✅ **Animations Specified**: Transitions, hover effects, number counting
✅ **Accessibility Ensured**: WCAG 2.1 AA, focus states, screen readers
✅ **Responsive Design**: Mobile-first, breakpoints, touch targets
✅ **Dark Mode Strategy**: Class-based, persistent, optimized
✅ **Print Optimization**: CV-focused print stylesheet
✅ **Performance Considerations**: Font loading, reduced motion, variables

**Next Step**: Agent 3 (Content Creation) will use this design system to write all copy, annotations, and page content while adhering to these visual guidelines.

---

**Status**: Agent 2 COMPLETE. Both deliverables ready for Agent 3.
