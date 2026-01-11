import { defineCollection, z } from 'astro:content';

// Publications collection (data type - JSON files)
const publicationsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    journal: z.string(),
    impactFactor: z.number().optional(),
    doi: z.string().optional(),
    status: z.enum(['published', 'accepted', 'in-review', 'in-prep']),
    researchAreas: z.array(z.string()),
    firstAuthor: z.boolean().optional(),
    featured: z.boolean().optional(),
    conceptualizationPercent: z.number().optional(),
    investigationPercent: z.number().optional(),
    softwarePercent: z.number().optional(),
    writingPercent: z.number().optional(),
    description: z.string().optional(),
    contributionStatement: z.string().optional(),
    contributions: z.object({
      conceptualization: z.number().optional(),
      dataProduction: z.number().optional(),
      analysis: z.number().optional(),
      interpretation: z.number().optional(),
      writing: z.number().optional(),
    }).optional(),
  }),
});

// Research areas collection (content type - MDX files)
const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
    icon: z.string().optional(),
    color: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  'publications': publicationsCollection,
  'research': researchCollection,
};
