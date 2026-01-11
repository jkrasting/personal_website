import { useState, useEffect } from 'react'
import PublicationCardClient from './PublicationCardClient'

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

interface PublicationListClientProps {
  publications: Publication[]
  selectedResearchArea: string | null
  searchQuery: string
  onBadgeClick: (area: string) => void
}

export function PublicationListClient({
  publications,
  selectedResearchArea,
  searchQuery,
  onBadgeClick
}: PublicationListClientProps) {
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>(publications)

  useEffect(() => {
    const filtered = publications.filter(pub => {
      // Filter by research area
      const matchesArea = !selectedResearchArea || pub.researchAreas?.includes(selectedResearchArea)

      // Filter by search query
      const matchesSearch = !searchQuery ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.description?.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesArea && matchesSearch
    })

    setFilteredPublications(filtered)
  }, [selectedResearchArea, searchQuery, publications])

  if (filteredPublications.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
          <svg
            className="w-8 h-8 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No publications found
        </h3>
        <p className="text-sm text-muted-foreground">
          Try adjusting your search or filter criteria
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-0 divide-y divide-border/60">
      {filteredPublications.map((pub, index) => {
        const publicationNumber = publications.length - publications.findIndex(p => p.id === pub.id)
        return (
          <PublicationCardClient
            key={pub.id}
            publication={pub}
            number={publicationNumber}
            onBadgeClick={onBadgeClick}
            selectedResearchArea={selectedResearchArea}
          />
        )
      })}
    </div>
  )
}

export default PublicationListClient
