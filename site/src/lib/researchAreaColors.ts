/**
 * Research area slug to display name mapping
 */
export const researchAreaNames: Record<string, string> = {
  'sea-level-rise': 'Sea Level Rise & Coastal Impacts',
  'ocean-dynamics': 'Ocean Dynamics & Circulation',
  'carbon-cycle': 'Carbon Cycle & Biogeochemistry',
  'esm-development': 'Earth System Model Development',
  'model-diagnostics': 'Model Diagnostics & Evaluation',
};

/**
 * Research area color mapping
 * Maps research area slug identifiers to their corresponding Rutgers pale palette colors
 * Using CSS custom classes defined in global.css for consistent Rutgers branding
 */
export const researchAreaColors: Record<string, { bg: string; text: string; border: string; badgeClass: string }> = {
  'sea-level-rise': {
    bg: 'bg-[var(--rutgers-blue-pale)]',
    text: 'text-[var(--rutgers-blue-dark)]',
    border: 'border-[var(--rutgers-blue-mid)]',
    badgeClass: 'badge-pale-blue',
  },
  'ocean-dynamics': {
    bg: 'bg-[var(--rutgers-teal-pale)]',
    text: 'text-[var(--rutgers-teal-dark)]',
    border: 'border-[var(--rutgers-teal-mid)]',
    badgeClass: 'badge-pale-teal',
  },
  'carbon-cycle': {
    bg: 'bg-[var(--rutgers-yellow-pale)]',
    text: 'text-[var(--rutgers-yellow-dark)]',
    border: 'border-[var(--rutgers-yellow-mid)]',
    badgeClass: 'badge-pale-yellow',
  },
  'esm-development': {
    bg: 'bg-[var(--rutgers-gray-pale)]',
    text: 'text-[var(--rutgers-gray-dark)]',
    border: 'border-[var(--rutgers-gray-mid)]',
    badgeClass: 'badge-pale-gray',
  },
  'model-diagnostics': {
    bg: 'bg-[var(--rutgers-scarlet-pale)]',
    text: 'text-[var(--rutgers-scarlet-dark)]',
    border: 'border-[var(--rutgers-scarlet-mid)]',
    badgeClass: 'badge-pale-scarlet',
  },
};

/**
 * Get display name for a research area slug
 */
export function getResearchAreaName(areaSlug: string): string {
  return researchAreaNames[areaSlug] || areaSlug;
}

/**
 * Get color classes for a research area slug
 */
export function getResearchAreaColor(areaSlug: string): { bg: string; text: string; border: string; badgeClass: string } {
  return researchAreaColors[areaSlug] || {
    bg: 'bg-[var(--rutgers-gray-pale)]',
    text: 'text-[var(--rutgers-gray-dark)]',
    border: 'border-[var(--rutgers-gray-mid)]',
    badgeClass: 'badge-pale-gray',
  };
}

/**
 * Get the dot color for the legend (uses Rutgers mid colors)
 */
export function getResearchAreaDotColor(areaSlug: string): string {
  const colorMap: Record<string, string> = {
    'sea-level-rise': 'dot-blue',
    'ocean-dynamics': 'dot-teal',
    'carbon-cycle': 'dot-yellow',
    'esm-development': 'dot-gray',
    'model-diagnostics': 'dot-scarlet',
  };
  return colorMap[areaSlug] || 'dot-gray';
}
