import { useState } from 'react'
import PublicationListClient from './PublicationListClient'
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
  contributionStatement?: string
  contributions?: {
    conceptualization?: number
    dataProduction?: number
    analysis?: number
    interpretation?: number
    writing?: number
  }
}

interface ResearchAreaLegend {
  id: string
  name: string
  color: string
}

interface PublicationsPageProps {
  publications: Publication[]
  researchAreasLegend: ResearchAreaLegend[]
}

export function PublicationsPage({ publications, researchAreasLegend }: PublicationsPageProps) {
  const [selectedResearchArea, setSelectedResearchArea] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showContributions, setShowContributions] = useState<boolean>(false)

  const handleBadgeClick = (area: string) => {
    // Toggle: if clicking the same area, clear it; otherwise, set the new area
    setSelectedResearchArea(prev => prev === area ? null : area)
  }

  const handleClearFilter = () => {
    setSelectedResearchArea(null)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  const handleClearAll = () => {
    setSelectedResearchArea(null)
    setSearchQuery('')
  }

  // Calculate filtered count based on both filters
  const filteredCount = publications.filter(pub => {
    const matchesArea = !selectedResearchArea || pub.researchAreas?.includes(selectedResearchArea)
    const matchesSearch = !searchQuery ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.description?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesArea && matchesSearch
  }).length

  const selectedAreaName = selectedResearchArea
    ? getResearchAreaName(selectedResearchArea)
    : null

  const hasActiveFilters = selectedResearchArea || searchQuery

  return (
    <div>
      {/* Search Filter */}
      <div className="mb-6 p-6 bg-card rounded-lg border">
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="search" className="text-lg font-semibold">
            Search Publications
          </label>
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Clear Search
            </button>
          )}
        </div>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </div>
          <input
            id="search"
            type="text"
            placeholder="Search by title, author, journal, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-background border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-sm">
              <span className="text-muted-foreground">Showing </span>
              <span className="font-semibold text-foreground">{filteredCount}</span>
              <span className="text-muted-foreground"> of {publications.length} publication{filteredCount !== 1 ? 's' : ''}</span>
              {selectedResearchArea && (
                <>
                  <span className="text-muted-foreground"> in </span>
                  <span className="font-semibold text-primary">{selectedAreaName}</span>
                </>
              )}
              {searchQuery && (
                <>
                  <span className="text-muted-foreground"> matching </span>
                  <span className="font-semibold text-primary">"{searchQuery}"</span>
                </>
              )}
            </p>
            <button
              onClick={handleClearAll}
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Clear All Filters
            </button>
          </div>
        </div>
      )}

      {/* Research Areas Legend */}
      <div className="mb-8 p-6 bg-card rounded-lg border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Filter by Research Area</h2>
          {selectedResearchArea && (
            <button
              onClick={handleClearFilter}
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Clear Research Area
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          {researchAreasLegend.map((area) => {
            const colors = getResearchAreaColor(area.id);
            const isSelected = selectedResearchArea === area.id;
            return (
              <button
                key={area.id}
                onClick={() => handleBadgeClick(area.id)}
                className={`flex items-start gap-2 p-3 rounded-lg border transition-all hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer text-left ${
                  isSelected
                    ? 'bg-primary/10 border-primary shadow-md scale-[1.02]'
                    : 'bg-background hover:bg-muted/30'
                }`}
                aria-label={`Filter by ${area.name}`}
                aria-pressed={isSelected}
              >
                <span className={`inline-block w-3 h-3 rounded-full mt-1 flex-shrink-0 ${area.color}`}></span>
                <div className="flex-1">
                  <span className={`font-medium ${isSelected ? 'text-primary' : ''}`}>
                    {area.name}
                  </span>
                  {isSelected && (
                    <span className="ml-2 text-xs text-primary/70">
                      (active filter)
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contribution Toggle */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={() => setShowContributions(!showContributions)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors border ${
            showContributions
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-background text-foreground border-border hover:bg-muted'
          }`}
          aria-pressed={showContributions}
        >
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          {showContributions ? 'Hide' : 'Show'} Author Contributions
        </button>
      </div>

      {/* Publication List */}
      <PublicationListClient
        publications={publications}
        selectedResearchArea={selectedResearchArea}
        searchQuery={searchQuery}
        onBadgeClick={handleBadgeClick}
        showContributions={showContributions}
      />
    </div>
  )
}

export default PublicationsPage
