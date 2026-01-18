import { getCitationMetadata, type CitationMeta } from '../data/citationMetadata';

export interface Publication {
  authors: string[];
  year: number;
  title: string;
  journal: string;
  doi?: string;
}

export interface CitationParts {
  authors: string;
  year: number;
  title: string;
  journal: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
}

/**
 * Format authors for citation display.
 * Uses comma separation with & before the last author.
 * Does NOT bold "Krasting" (unlike LaTeX source).
 */
export function formatCitationAuthors(authors: string[]): string {
  if (!authors || authors.length === 0) return '';
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} & ${authors[1]}`;

  const allButLast = authors.slice(0, -1);
  const last = authors[authors.length - 1];
  return `${allButLast.join(', ')}, & ${last}`;
}

/**
 * Get citation parts for structured HTML rendering.
 * Includes volume/issue/pages from the metadata lookup.
 */
export function getCitationParts(pub: Publication): CitationParts {
  const meta = pub.doi ? getCitationMetadata(pub.doi) : undefined;

  return {
    authors: formatCitationAuthors(pub.authors),
    year: pub.year,
    title: pub.title,
    journal: pub.journal,
    volume: meta?.volume,
    issue: meta?.issue,
    pages: meta?.pages,
    doi: pub.doi,
  };
}

/**
 * Generate plain text citation for clipboard.
 * Format: Authors, Year: Title. Journal Volume(Issue), pages. DOI
 */
export function generatePlainCitation(pub: Publication): string {
  const parts = getCitationParts(pub);
  let citation = `${parts.authors}, ${parts.year}: ${parts.title}. ${parts.journal}`;

  if (parts.volume) {
    citation += ` ${parts.volume}`;
    if (parts.issue) {
      citation += `(${parts.issue})`;
    }
    if (parts.pages) {
      citation += `, ${parts.pages}`;
    }
  }

  citation += '.';

  if (parts.doi) {
    citation += ` https://doi.org/${parts.doi}`;
  }

  return citation;
}
