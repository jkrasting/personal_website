/**
 * Dynamic CV Metrics Calculations
 * Calculates years of experience, teaching, and publication count based on current date
 */

import { getCollection } from 'astro:content';

/**
 * Calculate years between a start year and current date
 */
export function calculateYearsSince(startYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

/**
 * Get total count of publications from content collection
 */
export async function getTotalPublications(): Promise<number> {
  const publications = await getCollection('publications');
  return publications.length;
}

/**
 * Calculate dynamic metrics based on cv-data.json start years
 */
export async function getDynamicMetrics(metrics: {
  teachingStartYear: number;
  experienceStartYear: number;
  [key: string]: any;
}) {
  const yearsTeaching = calculateYearsSince(metrics.teachingStartYear);
  const yearsExperience = calculateYearsSince(metrics.experienceStartYear);
  const totalPublications = await getTotalPublications();

  return {
    ...metrics,
    yearsTeaching,
    yearsExperience,
    totalPublications,
  };
}
