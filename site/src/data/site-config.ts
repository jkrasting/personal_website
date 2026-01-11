export const siteConfig = {
  name: "Dr. John P. Krasting",
  title: "Dr. John P. Krasting | Climate Scientist",
  description: "Climate scientist specializing in sea level rise, ocean dynamics, and Earth system modeling. NOAA / Geophysical Fluid Dynamics Laboratory -- Princeton, NJ, USA.",
  url: "https://johnkrasting.com",
  author: {
    name: "Dr. John P. Krasting",
    email: "John.Krasting@noaa.gov",
    github: "jkrasting",
    linkedin: "krasting",
  },
  metrics: {
    publications: 44,
    hIndex: 31,
    funding: 8.75, // in millions
    teachingYears: 14,
  },
  researchAreas: [
    {
      id: "sea-level-rise",
      name: "Sea Level Rise & Coastal Impacts",
      description: "Leading research on global and regional sea level projections, steric sea level changes, and coastal inundation.",
      color: "oklch(50% 0.25 25)", // Rutgers Scarlet
    },
    {
      id: "ocean-dynamics",
      name: "Ocean Dynamics & Circulation",
      description: "Expert in ocean circulation, water mass transformation, Antarctic Slope Current, and AMOC dynamics.",
      color: "oklch(30% 0.02 0)", // Charcoal Gray
    },
    {
      id: "carbon-cycle",
      name: "Carbon Cycle & Biogeochemistry",
      description: "Research on ocean carbon uptake, acidification, and transient climate response to cumulative emissions (TCRE).",
      color: "oklch(55% 0.15 150)", // Forest Green (carbon)
    },
    {
      id: "esm-development",
      name: "Earth System Model Development",
      description: "Core developer of GFDL CM4, ESM4, CM5, and OM5 climate models used in IPCC assessments.",
      color: "oklch(45% 0.20 20)", // Dark Red
    },
    {
      id: "model-diagnostics",
      name: "Model Diagnostics & Evaluation",
      description: "Co-lead of NOAA Model Diagnostics Task Force, developing process-oriented diagnostics frameworks.",
      color: "oklch(60% 0.05 15)", // Warm Gray
    },
  ],
}

export type SiteConfig = typeof siteConfig
