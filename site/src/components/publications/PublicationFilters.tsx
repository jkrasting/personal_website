import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

interface FilterState {
  year: string
  researchAreas: string[]
  firstAuthor: boolean
  featured: boolean
  searchQuery: string
}

interface PublicationFiltersProps {
  availableYears: number[]
  researchAreas: { id: string; name: string }[]
  onFilterChange: (filters: FilterState) => void
  className?: string
}

export function PublicationFilters({
  availableYears,
  researchAreas,
  onFilterChange,
  className = '',
}: PublicationFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    year: 'all',
    researchAreas: [],
    firstAuthor: false,
    featured: false,
    searchQuery: '',
  })

  const [searchInput, setSearchInput] = useState('')

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters(prev => ({ ...prev, searchQuery: searchInput }))
    }, 300)

    return () => clearTimeout(timer)
  }, [searchInput])

  // Notify parent of filter changes
  useEffect(() => {
    onFilterChange(filters)
  }, [filters, onFilterChange])

  const handleYearChange = (year: string) => {
    setFilters(prev => ({ ...prev, year }))
  }

  const handleResearchAreaToggle = (areaId: string) => {
    setFilters(prev => ({
      ...prev,
      researchAreas: prev.researchAreas.includes(areaId)
        ? prev.researchAreas.filter(id => id !== areaId)
        : [...prev.researchAreas, areaId],
    }))
  }

  const handleToggle = (key: 'firstAuthor' | 'featured') => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const clearFilters = () => {
    setFilters({
      year: 'all',
      researchAreas: [],
      firstAuthor: false,
      featured: false,
      searchQuery: '',
    })
    setSearchInput('')
  }

  const hasActiveFilters =
    filters.year !== 'all' ||
    filters.researchAreas.length > 0 ||
    filters.firstAuthor ||
    filters.featured ||
    filters.searchQuery !== ''

  return (
    <div className={`space-y-6 p-6 rounded-lg border bg-card ${className}`}>
      {/* Search */}
      <div className="space-y-2">
        <Label htmlFor="search">Search Publications</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            id="search"
            type="text"
            placeholder="Search by title, authors, or keywords..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10"
          />
          {searchInput && (
            <button
              onClick={() => setSearchInput('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Year Filter */}
      <div className="space-y-2">
        <Label htmlFor="year">Year</Label>
        <select
          id="year"
          value={filters.year}
          onChange={(e) => handleYearChange(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <option value="all">All Years</option>
          {availableYears.sort((a, b) => b - a).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Research Areas */}
      <div className="space-y-2">
        <Label>Research Areas</Label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {researchAreas.map(area => (
            <label
              key={area.id}
              className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={filters.researchAreas.includes(area.id)}
                onChange={() => handleResearchAreaToggle(area.id)}
                className="w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
              <span className="text-sm">{area.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Toggles */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer transition-colors">
          <input
            type="checkbox"
            checked={filters.firstAuthor}
            onChange={() => handleToggle('firstAuthor')}
            className="w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
          <span className="text-sm font-medium">First Author Only</span>
        </label>

        <label className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer transition-colors">
          <input
            type="checkbox"
            checked={filters.featured}
            onChange={() => handleToggle('featured')}
            className="w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
          <span className="text-sm font-medium">Featured Only</span>
        </label>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={clearFilters}
          className="w-full"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  )
}

export default PublicationFilters
