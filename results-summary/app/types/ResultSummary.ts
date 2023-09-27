export interface ResultsRatingProps {
  isLoading: boolean
  data: ResultsSummaryData[] | undefined
}

export interface ResultsSummaryData {
  category: 'Reaction' | 'Memory' | 'Verbal' | 'Visual'
  score: number
  icon: string
}
