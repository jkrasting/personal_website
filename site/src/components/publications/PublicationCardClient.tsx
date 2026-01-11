import { getResearchAreaColor, getResearchAreaName } from '../../lib/researchAreaColors'

interface Publication {
  id: string
  title: string
  authors: string[]
  year: number
  journal: string
  doi?: string
  impactFactor?: number
  researchAreas?: string[]
  featured?: boolean
  firstAuthor?: boolean
  description?: string
}

interface PublicationCardClientProps {
  publication: Publication
  number?: number
  onBadgeClick: (area: string) => void
  selectedResearchArea: string | null
}

const formatAuthors = (authors: string[]) => {
  if (!authors || !Array.isArray(authors) || authors.length === 0) {
    return 'No authors listed'
  }
  return authors.map(author =>
    author.includes('Krasting') ? `<strong>${author}</strong>` : author
  ).join(', ')
}

export function PublicationCardClient({
  publication,
  number,
  onBadgeClick,
  selectedResearchArea
}: PublicationCardClientProps) {
  return (
    <div className="group relative block py-6 border-b border-border/60 last:border-none">
      <article className="relative z-1 flex gap-4 transform transition-transform duration-300 group-hover:translate-x-4">
        {number !== undefined && (
          <div className="flex-shrink-0 w-12 sm:w-14 flex items-start justify-end pt-1">
            <span className="text-2xl sm:text-3xl font-bold text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors">
              {number}
            </span>
          </div>
        )}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex sm:items-center gap-2 sm:gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <svg className="size-3.5 sm:size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <time className="text-xs sm:text-sm">
                {publication.year}
              </time>
            </span>
            {publication.journal && (
              <span className="inline-flex items-center gap-1.5">
                <svg className="size-3.5 sm:size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                <span className="text-xs sm:text-sm">{publication.journal}</span>
              </span>
            )}
            {publication.impactFactor && (
              <span className="inline-flex items-center gap-1 text-xs sm:text-sm">
                <span className="font-medium">IF: {publication.impactFactor}</span>
              </span>
            )}
          </div>

          <div className="block">
            <div className="text-base font-semibold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {publication.title}
            </div>
            <div
              className="mt-1.5 text-sm text-muted-foreground/90 leading-5"
              dangerouslySetInnerHTML={{ __html: formatAuthors(publication.authors) }}
            />
            {publication.description && (
              <p className="mt-1 text-sm text-muted-foreground/80 leading-5 line-clamp-2">{publication.description}</p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {publication.firstAuthor && (
              <span className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                First Author
              </span>
            )}
            {publication.featured && (
              <span className="inline-flex items-center rounded-full border border-transparent bg-primary text-primary-foreground px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Featured
              </span>
            )}
            {publication.researchAreas && publication.researchAreas.length > 0 && (
              publication.researchAreas.slice(0, 3).map((area) => {
                const colors = getResearchAreaColor(area);
                const displayName = getResearchAreaName(area);
                const isSelected = selectedResearchArea === area;
                return (
                  <button
                    key={area}
                    onClick={() => onBadgeClick(area)}
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer ${colors.bg} ${colors.text} ${colors.border} ${isSelected ? 'ring-2 ring-offset-2 shadow-lg scale-105' : ''}`}
                    aria-label={`Filter by ${displayName}`}
                  >
                    {displayName}
                  </button>
                );
              })
            )}
            {publication.researchAreas && publication.researchAreas.length > 3 && (
              <span className="text-xs text-muted-foreground/60">+{publication.researchAreas.length - 3} more</span>
            )}
          </div>

          {publication.doi && (
            <div className="mt-1">
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                DOI: {publication.doi}
              </a>
            </div>
          )}
        </div>
      </article>

      <div className="absolute left-0 top-0 h-full w-0.5 sm:w-1 scale-y-0 bg-accent/80 transition-transform duration-300 group-hover:scale-y-100">
      </div>
    </div>
  )
}

export default PublicationCardClient
