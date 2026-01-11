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
 * Maps research area slug identifiers to their corresponding color classes
 */
export const researchAreaColors: Record<string, { bg: string; text: string; border: string }> = {
  'sea-level-rise': {
    bg: 'bg-blue-500/15',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-500/30',
  },
  'ocean-dynamics': {
    bg: 'bg-green-500/15',
    text: 'text-green-700 dark:text-green-300',
    border: 'border-green-500/30',
  },
  'carbon-cycle': {
    bg: 'bg-purple-500/15',
    text: 'text-purple-700 dark:text-purple-300',
    border: 'border-purple-500/30',
  },
  'esm-development': {
    bg: 'bg-orange-500/15',
    text: 'text-orange-700 dark:text-orange-300',
    border: 'border-orange-500/30',
  },
  'model-diagnostics': {
    bg: 'bg-red-500/15',
    text: 'text-red-700 dark:text-red-300',
    border: 'border-red-500/30',
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
export function getResearchAreaColor(areaSlug: string): { bg: string; text: string; border: string } {
  return researchAreaColors[areaSlug] || {
    bg: 'bg-muted/30',
    text: 'text-muted-foreground',
    border: 'border-border',
  };
}

/**
 * Get the dot color for the legend
 */
export function getResearchAreaDotColor(areaSlug: string): string {
  const colorMap: Record<string, string> = {
    'sea-level-rise': 'bg-blue-500',
    'ocean-dynamics': 'bg-green-500',
    'carbon-cycle': 'bg-purple-500',
    'esm-development': 'bg-orange-500',
    'model-diagnostics': 'bg-red-500',
  };
  return colorMap[areaSlug] || 'bg-gray-500';
}
